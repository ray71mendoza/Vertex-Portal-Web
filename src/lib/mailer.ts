const RESEND_API_URL = 'https://api.resend.com/emails';

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

function stripControlChars(value: string): string {
  return value.replace(/[\r\n\t\x00-\x1F\x7F]/g, '');
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
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromAddress) {
    throw new Error('Resend is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
  }

  const isEs = payload.preferredLanguage === 'es';

  const name = stripControlChars(payload.name);
  const organization = payload.organization ? stripControlChars(payload.organization) : '';
  const phone = payload.phone ? stripControlChars(payload.phone) : '';
  const service = payload.service ? stripControlChars(payload.service) : '';

  const rows: Array<[string, string]> = [
    [isEs ? 'Nombre' : 'Name', name],
    [isEs ? 'Organización' : 'Organization', organization || '-'],
    [isEs ? 'Correo' : 'Email', payload.email],
    [isEs ? 'Teléfono' : 'Phone', phone || '-'],
    [isEs ? 'Servicio de interés' : 'Service of interest', service || '-'],
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

  let response: Response;
  try {
    response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${isEs ? 'Vertex — Formulario de contacto' : 'Vertex — Contact form'} <${fromAddress}>`,
        to: CONTACT_DESTINATION_EMAIL,
        reply_to: payload.email,
        subject: isEs ? `Solicitud de contacto Vertex - ${name}` : `Vertex contact request - ${name}`,
        text: textBody,
        html: htmlBody,
      }),
      // Workers requests are killed by the platform eventually anyway, but an
      // explicit timeout means a slow/hung Resend response fails fast with a
      // clear error instead of tying up the request for the platform's max.
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new Error('Resend request timed out after 10s');
    }
    throw error;
  }

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    // Logged server-side only — the route handler never forwards this detail to the visitor.
    throw new Error(`Resend request failed (${response.status}): ${errorBody}`);
  }
}
