'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full my-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
          {content.title}
        </h1>
        <p className="text-lg text-slate-400">{content.subtitle}</p>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3 rounded-full transition shadow-lg shadow-indigo-600/30">
            {content.cta}
          </button>
        </div>
      </motion.div>

      <div className="relative h-[350px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <Image
          src="/hero.webp"
          alt="Hero Illustration"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}