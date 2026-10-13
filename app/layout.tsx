import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mirza Rabby — Full-Stack Developer & AI Engineer',
  description:
    'Full-stack developer specializing in AI/ML integration, scalable web applications, and modern cloud architecture.',
  openGraph: {
    title: 'Mirza Rabby — Full-Stack Developer & AI Engineer',
    description:
      'Full-stack developer specializing in AI/ML integration, scalable web applications, and modern cloud architecture.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirza Rabby — Full-Stack Developer & AI Engineer',
    description:
      'Full-stack developer specializing in AI/ML integration, scalable web applications, and modern cloud architecture.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}