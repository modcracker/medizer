import React, { useState, useEffect } from 'react';
import { Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { auth } from '../services/firebase';

export default function Footer({ t }: { t: any }) {
  const currentYear = new Date().getFullYear();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    return auth.onAuthStateChanged((u) => setUser(u));
  }, []);

  return (
    <footer className="border-t border-stone-100 bg-white">
      {/* Pre-footer CTA Segment */}
      <section className="bg-green-950 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
            alt="Circuitry"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="corp-container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">Ready to join?</h2>
              <p className="text-green-200/60 text-lg max-w-[500px]">Access the world's most advanced medical network.</p>
            </div>
            <Link 
              to="/membership" 
              className="bg-green-600 hover:bg-green-500 px-10 py-5 rounded-sm font-bold text-[15px] text-white transition-all flex items-center gap-4 active:scale-[0.98]"
            >
              Get started
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="py-16 lg:py-24 corp-container">
        <div className="grid lg:grid-cols-12 gap-16 mb-20 items-start">
          {/* Logo Column - spans 3 */}
          <div className="lg:col-span-3 pb-16 lg:pb-0">
            <Link to="/">
              <Logo className="mb-8" />
            </Link>
            <p className="text-stone-500 text-base leading-relaxed font-medium max-w-[240px]">{t.tagline}</p>
          </div>

          {/* Sitemap Column - spans 9 */}
          <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:border-l lg:border-stone-100 lg:pl-16">
            <div>
              <h4 className="text-sm font-bold text-stone-500 mb-8 pb-2 border-b border-stone-100">Systems</h4>
              <ul className="space-y-4">
                <li><Link to="/network/global" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Global Map</Link></li>
                <li><Link to="/network/monitoring" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Monitoring</Link></li>
                <li><Link to="/network" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Direct Network</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-stone-500 mb-8 pb-2 border-b border-stone-100">Advisory</h4>
              <ul className="space-y-4">
                <li><Link to="/analysis/core" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Digital Analysis</Link></li>
                <li><Link to="/analysis/ethics" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Review Protocol</Link></li>
                <li><Link to="/analysis" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Analytics Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-stone-500 mb-8 pb-2 border-b border-stone-100">About</h4>
              <ul className="space-y-4">
                <li><Link to="/heritage/ethos" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Philosophy</Link></li>
                <li><Link to="/heritage/directives" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Directives</Link></li>
                <li><Link to="/heritage/review" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Century Review</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-stone-500 mb-8 pb-2 border-b border-stone-100">Operations</h4>
              <ul className="space-y-4">
                <li><Link to="/membership" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Access Portal</Link></li>
                <li><Link to="/support" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Liaison Hub</Link></li>
                <li><Link to="/heritage/governance/rights" className="text-[15px] font-medium text-stone-600 hover:text-green-700 transition-colors block">Privacy Rights</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Operational Bar */}
        <div className="pt-12 pb-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4 text-left">
            <div className="text-sm font-bold text-stone-400 leading-none">
              Institutional Headquarters
            </div>
            <div className="text-[13px] text-stone-600 leading-none font-medium flex flex-wrap gap-x-4 gap-y-2">
              <span>Medizer Medical Group SA</span>
              <span className="text-stone-300">/</span>
              <span>Route de Pré-Bois 20, ICC</span>
              <span className="text-stone-300">/</span>
              <span>1215 Geneva, Switzerland</span>
            </div>
          </div>

          <Link 
            to="/access"
            className="group flex items-center gap-6 bg-[#faf9f8] px-8 py-4 border border-stone-100 hover:border-green-700 transition-all duration-700 rounded-sm"
          >
            <div className="flex flex-col items-start gap-2 text-left">
              <span className="text-xs font-bold text-stone-400 leading-none">{user ? 'Identity Verified' : 'Access Protocol'}</span>
              <span className="text-sm font-bold text-green-950 tracking-tight flex items-center gap-3">
                <Key className="w-3.5 h-3.5 text-green-700 group-hover:rotate-[15deg] transition-transform" />
                {user ? `ID: ${user.email?.split('@')[0]}` : 'Access Required'}
              </span>
            </div>
            <div className="w-8 h-[1px] bg-stone-200 group-hover:w-16 transition-all duration-700" />
          </Link>
        </div>
        
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-stone-400 font-medium">
          <p>© {currentYear} Medizer Corporation. Institutional health preservation.</p>
          <div className="flex items-center gap-8">
             <a href="#" className="hover:text-green-700 transition-colors font-bold">Privacy Directive</a>
             <a href="#" className="hover:text-green-700 transition-colors font-bold">Institutional Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
