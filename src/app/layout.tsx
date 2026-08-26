import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vertex',
  description: 'Tecnología estratégica para transformar ideas en resultados.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
