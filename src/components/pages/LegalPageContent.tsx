'use client';

export function LegalPageContent({ type, locale }: { type: 'privacy' | 'terms'; locale: string }) {
  const title = type === 'privacy'
    ? (locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy')
    : (locale === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions');

  return (
    <div className="pt-[var(--vx-header-height)]">
      <section className="vx-section vx-bg-subtle relative overflow-hidden">
        <div className="vx-container">
          <div className="max-w-3xl">
            <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-vertex-facetTeal text-base">
              {locale === 'es' ? 'Última actualización: Agosto 2026' : 'Last updated: August 2026'}
            </p>
          </div>
        </div>
      </section>

      <section className="vx-section">
        <div className="vx-container max-w-3xl space-y-6 text-vertex-facetTeal leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                {locale === 'es'
                  ? 'En Vertex, valoramos y respetamos la privacidad de nuestros usuarios y clientes. Esta política explica cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas.'
                  : 'At Vertex, we value and respect the privacy of our users and clients. This policy explains how we collect, use, and protect the personal information you provide to us.'}
              </p>
              <h2 className="text-2xl font-bold text-vertex-ink pt-4">
                {locale === 'es' ? '1. Información que recopilamos' : '1. Information We Collect'}
              </h2>
              <p>
                {locale === 'es'
                  ? 'Recopilamos información suministrada voluntariamente en nuestro formulario de contacto (nombre, correo electrónico, organización, teléfono y mensajes) únicamente con el fin de atender tus solicitudes comerciales e institucionales.'
                  : 'We collect information voluntarily submitted in our contact form (name, email, organization, phone, and messages) solely to process your commercial and institutional inquiries.'}
              </p>
              <h2 className="text-2xl font-bold text-vertex-ink pt-4">
                {locale === 'es' ? '2. Uso de la información' : '2. Use of Information'}
              </h2>
              <p>
                {locale === 'es'
                  ? 'La información recopilada se utiliza exclusivamente para comunicarnos contigo, presentar propuestas de servicios y brindar soporte. No vendemos ni compartimos tus datos con terceros sin tu consentimiento explícito.'
                  : 'The information collected is used exclusively to communicate with you, present service proposals, and provide support. We do not sell or share your data with third parties without your explicit consent.'}
              </p>
            </>
          ) : (
            <>
              <p>
                {locale === 'es'
                  ? 'Bienvenido al sitio web corporativo de Vertex. Al acceder y navegar en este sitio, aceptas cumplir con los siguientes términos y condiciones de uso.'
                  : 'Welcome to the Vertex corporate website. By accessing and browsing this site, you agree to comply with the following terms and conditions of use.'}
              </p>
              <h2 className="text-2xl font-bold text-vertex-ink pt-4">
                {locale === 'es' ? '1. Propiedad Intelectual' : '1. Intellectual Property'}
              </h2>
              <p>
                {locale === 'es'
                  ? 'Todos los contenidos, marcas, isotipos, diseños, textos y elementos gráficos presentes en este sitio son propiedad exclusiva de Vertex y están protegidos por las leyes de propiedad intelectual.'
                  : 'All contents, trademarks, logotypes, designs, text, and graphic elements on this site are the exclusive property of Vertex and are protected by intellectual property laws.'}
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
