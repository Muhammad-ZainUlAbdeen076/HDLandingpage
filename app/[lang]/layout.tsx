import { Inter } from 'next/font/google';
import './../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isArabic = lang === 'ar';

  return (
    <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} className={inter.variable}>
      <body className="font-sans antialiased bg-slate-950 text-slate-50 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}