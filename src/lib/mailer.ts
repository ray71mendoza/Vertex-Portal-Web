import nodemailer, { type Transporter } from 'nodemailer';

export const CONTACT_DESTINATION_EMAIL = process.env.CONTACT_TO_EMAIL || 'gerenciavertexsas@gmail.com';

export interface ContactEmailPayload {
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  preferredLanguage: 'es' | 'en';
}

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD.');
  }

  const port = Number(SMTP_PORT);

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  return cachedTransporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const transporter = getTransporter();
  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;
  const isEs = payload.preferredLanguage === 'es';

  const rows: Array<[string, string]> = [
    [isEs ? 'Nombre' : 'Name', payload.name],
    [isEs ? 'Organización' : 'Organization', payload.organization || '-'],
    [isEs ? 'Correo' : 'Email', payload.email],
    [isEs ? 'Teléfono' : 'Phone', payload.phone || '-'],
    [isEs ? 'Servicio de interés' : 'Service of interest', payload.service || '-'],
    [isEs ? 'Idioma preferido' : 'Preferred language', payload.preferredLanguage.toUpperCase()],
  ];

  const textBody = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    isEs ? 'Mensaje:' : 'Message:',
    payload.message,
  ].join('\n');

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #03252D; line-height: 1.6;">
      <h2 style="color: #0B4551;">${isEs ? 'Nuevo mensaje de contacto — Vertex' : 'New contact message — Vertex'}</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td>
            <td>${escapeHtml(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
      <p style="font-weight: 600; margin-top: 20px;">${isEs ? 'Mensaje' : 'Message'}:</p>
      <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Vertex — Formulario de contacto" <${fromAddress}>`,
    to: CONTACT_DESTINATION_EMAIL,
    replyTo: payload.email,
    subject: isEs
      ? `Solicitud de contacto Vertex - ${payload.name}`
      : `Vertex contact request - ${payload.name}`,
    text: textBody,
    html: htmlBody,
  });
}
