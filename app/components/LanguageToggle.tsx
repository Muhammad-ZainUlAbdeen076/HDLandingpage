'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
    >
      {currentLang === 'en' ? 'العربية' : 'English'}
    </button>
  );
}