/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

  useEffect(() => {
    seedContent();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentLang={currentLang} onLangChange={setCurrentLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          
          {/* Network */}
          <Route path="/network" element={<Infrastructure />} />
          <Route path="/network/global" element={<Global />} />
          <Route path="/network/monitoring" element={<Monitoring />} />
          
          {/* Analysis */}
          <Route path="/analysis" element={<Intelligence />} />
          <Route path="/analysis/core" element={<Core />} />
          <Route path="/analysis/ethics" element={<Ethics />} />
          
          {/* Heritage */}
          <Route path="/heritage" element={<Heritage t={t} />} />
          <Route path="/heritage/ethos" element={<Ethos t={t} />} />
          <Route path="/heritage/directives" element={<Directives />} />
          <Route path="/heritage/review" element={<Review />} />
          <Route path="/heritage/governance/board" element={<Board />} />
          <Route path="/heritage/governance/rights" element={<Rights />} />
          
          {/* Support & Membership */}
          <Route path="/support" element={<Support />} />
          <Route path="/membership" element={<Membership t={t} />} />
          <Route path="/access" element={<AccessPortal />} />

          {/* Fallbacks for old URLs to prevent broken links */}
          <Route path="/institutional" element={<Heritage t={t} />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/liaison" element={<Support />} />
          <Route path="/apply" element={<Membership t={t} />} />
        </Routes>
      </main>
      <Footer t={t.footer} />
    </div>
  );
}

