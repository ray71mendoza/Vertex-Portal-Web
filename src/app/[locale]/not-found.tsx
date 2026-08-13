import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center vx-bg-dark text-white px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-8xl font-bold text-vertex-prismBlue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada / Page not found</h2>
        <p className="text-vertex-facetIce mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/es" className="vx-btn vx-btn-light">
          Volver al inicio / Back to Home
        </Link>
      </div>
    </div>
  );
}
