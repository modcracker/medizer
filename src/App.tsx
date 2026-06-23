/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Infrastructure from './pages/Infrastructure';
import Intelligence from './pages/Intelligence';
import Heritage from './pages/Heritage';
import Support from './pages/Support';
import Membership from './pages/Membership';
import AccessPortal from './pages/AccessPortal';

// New Sub-pages
import Global from './pages/network/Global';
import Monitoring from './pages/network/Monitoring';
import Core from './pages/analysis/Core';
import Ethics from './pages/analysis/Ethics';
import Ethos from './pages/heritage/Ethos';
import Directives from './pages/heritage/Directives';
import Review from './pages/heritage/Review';
import Board from './pages/heritage/Board';
import Rights from './pages/heritage/Rights';

import { Language, translations } from './translations';
import { seedContent } from './services/firebase';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('English');
  const t = translations[currentLang];
  const location = useLocation();

  useEffect(() => {
    seedContent();
  }, []);

  // Dynamic SEO Meta Tags
  useEffect(() => {
    const getPageMeta = (pathname: string) => {
      switch (pathname) {
        case '/':
          return { title: t.hero.title, description: t.hero.description };
        case '/network':
        case '/infrastructure':
          return { title: `${t.infrastructure.title} | ${t.infrastructure.subtitle}`, description: t.infrastructure.description };
        case '/network/global':
          return { title: t.globalNetwork.title, description: t.globalNetwork.description };
        case '/network/monitoring':
          return { title: `${t.monitoring.title} | ${t.monitoring.subtitle}`, description: t.monitoring.description };
        case '/analysis':
        case '/intelligence':
          return { title: `${t.intelligencePage.title} | ${t.intelligencePage.subtitle}`, description: t.intelligencePage.description };
        case '/analysis/core':
          return { title: `${t.corePage.title} | ${t.corePage.subtitle}`, description: t.corePage.description };
        case '/analysis/ethics':
          return { title: `${t.ethicsPage.title} | ${t.ethicsPage.subtitle}`, description: t.ethicsPage.description };
        case '/heritage':
        case '/institutional':
          return { title: `${t.heritage.title} | ${t.heritage.subtitle}`, description: t.heritage.description };
        case '/heritage/ethos':
          return { title: t.heritage.ethos_title, description: t.heritage.ethos_quote };
        case '/heritage/directives':
          return { title: `${t.directives.title} | ${t.directives.subtitle}`, description: t.directives.description };
        case '/heritage/review':
          return { title: `${t.review.title} | ${t.review.subtitle}`, description: t.review.description };
        case '/heritage/governance/board':
          return { title: `${t.board.title} | ${t.board.subtitle}`, description: t.board.description };
        case '/heritage/governance/rights':
          return { title: `${t.rights.title} | ${t.rights.subtitle}`, description: t.rights.description };
        case '/support':
        case '/liaison':
          return { title: t.support.hero_title, description: t.support.hero_desc };
        case '/membership':
        case '/apply':
          return { title: t.membership.hero_title, description: t.membership.hero_desc };
        case '/access':
          return { title: `${t.accessPortal.title} | ${t.accessPortal.subtitle}`, description: t.accessPortal.description };
        default:
          return { title: 'Medizer | Sovereign Healthcare', description: 'Institutional biological monitoring and sovereign health management.' };
      }
    };

    const { title, description } = getPageMeta(location.pathname);
    
    // Update Document Title
    document.title = `Medizer | ${title}`;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update Open Graph tags for better social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Medizer | ${title}`);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

  }, [location.pathname, t]);

  return (
    <div className="min-h-screen bg-white">
      {/* Sale Notice Banner */}
      <a 
        href="https://www.godaddy.com/domainsearch/find?domainToCheck=medizer.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full bg-amber-500 border-b border-amber-600 block hover:bg-amber-450 transition-all z-50 relative"
      >
        <div className="max-w-7xl mx-auto py-5 px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-stone-950">
          <div className="flex items-center gap-3 justify-center text-center">
            <span className="inline-block w-3 h-3 rounded-full bg-stone-950 animate-pulse shrink-0" />
            <span className="font-mono font-black tracking-tight text-lg md:text-2xl uppercase leading-tight">
              DUE TO UNFORESEEN CIRCUMSTANCES MEDIZER.COM IS FOR SALE AT GODADDY.COM
            </span>
            <span className="inline-block w-3 h-3 rounded-full bg-stone-950 animate-pulse shrink-0" />
          </div>
          <span className="inline-flex items-center gap-2 bg-stone-950 text-amber-500 hover:bg-stone-900 font-extrabold text-xs md:text-sm uppercase px-5 py-2.5 rounded-sm hover:scale-[1.03] active:scale-95 transition-all shadow-md shrink-0 font-mono">
            BUY ON GODADDY
            <span>→</span>
          </span>
        </div>
      </a>
      <Navbar currentLang={currentLang} onLangChange={setCurrentLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          
          {/* Network */}
          <Route path="/network" element={<Infrastructure t={t} />} />
          <Route path="/network/global" element={<Global t={t} />} />
          <Route path="/network/monitoring" element={<Monitoring t={t} />} />
          
          {/* Analysis */}
          <Route path="/analysis" element={<Intelligence t={t} />} />
          <Route path="/analysis/core" element={<Core t={t} />} />
          <Route path="/analysis/ethics" element={<Ethics t={t} />} />
          
          {/* Heritage */}
          <Route path="/heritage" element={<Heritage t={t} />} />
          <Route path="/heritage/ethos" element={<Ethos t={t} />} />
          <Route path="/heritage/directives" element={<Directives t={t} />} />
          <Route path="/heritage/review" element={<Review t={t} />} />
          <Route path="/heritage/governance/board" element={<Board t={t} />} />
          <Route path="/heritage/governance/rights" element={<Rights t={t} />} />
          
          {/* Support & Membership */}
          <Route path="/support" element={<Support t={t} />} />
          <Route path="/membership" element={<Membership t={t} />} />
          <Route path="/access" element={<AccessPortal t={t} />} />

          {/* Fallbacks for old URLs to prevent broken links */}
          <Route path="/institutional" element={<Heritage t={t} />} />
          <Route path="/infrastructure" element={<Infrastructure t={t} />} />
          <Route path="/intelligence" element={<Intelligence t={t} />} />
          <Route path="/liaison" element={<Support t={t} />} />
          <Route path="/apply" element={<Membership t={t} />} />
        </Routes>
      </main>
      <Footer t={t} />
      <Analytics />
    </div>
  );
}

