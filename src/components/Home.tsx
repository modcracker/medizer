import React, { useEffect } from 'react';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Features from './Features';
import GlobalNetwork from './GlobalNetwork';
import HealthAI from './HealthAI';
import Application from './Application';

export default function Home({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Hero t={t.hero} />
      <Philosophy t={t.philosophy} />
      <Features t={t.features} />
      <GlobalNetwork t={t} />
      <HealthAI t={t.healthAi} />
      <Application t={t.application} />
    </>
  );
}
