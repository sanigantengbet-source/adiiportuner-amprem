import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'adiiportuner.amprem - Sistem Verifikasi Akun Alight Motion',
  description: 'Layanan verifikasi akun Alight Motion via magic link dengan antarmuka web modern dan aman.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'adiiportuner.amprem - Sistem Verifikasi Akun Alight Motion',
    description: 'Layanan verifikasi akun Alight Motion via magic link dengan antarmuka web modern dan aman.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'adiiportuner.amprem - Sistem Verifikasi Akun Alight Motion',
    description: 'Layanan verifikasi akun Alight Motion via magic link dengan antarmuka web modern dan aman.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
