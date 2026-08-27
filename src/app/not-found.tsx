import type { Metadata } from 'next';
import { NotFoundContent } from '@/components/pages/NotFoundContent';
import './globals.css';

export const metadata: Metadata = {
  title: '404 - Página no encontrada / Page Not Found | Vertex',
  description: 'La página solicitada no existe o ha sido movida.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootNotFound() {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/vertex-symbol.png" type="image/png" />
      </head>
      <body className="vx-bg-dark">
        <main id="main-content">
          <NotFoundContent />
        </main>
      </body>
    </html>
  );
}
