import { getDictionary } from '../dictionaries';
import Hero from '../components/Hero';
import LanguageToggle from '../components/LanguageToggle';

interface PageProps {
  params: Promise<{ lang: 'en' | 'ar' }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-6 lg:p-24">
      <header className="w-full flex justify-end max-w-7xl">
        <LanguageToggle currentLang={lang} />
      </header>
      <Hero content={dict.hero} />
    </main>
  );
}