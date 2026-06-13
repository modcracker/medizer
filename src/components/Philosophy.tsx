import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Philosophy({ t }: { t: any }) {
  return (
    <section id="philosophy" className="py-32 lg:py-48 bg-white border-t border-stone-100 overflow-hidden">
      <div className="corp-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start mb-32">
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <span className="text-sm font-bold text-green-700 uppercase tracking-widest">{t.sovereignty_title}</span>
              <h2 className="text-5xl lg:text-7xl tracking-tighter leading-[1] text-green-950 font-bold italic">
                {t.quote.replace(/"/g, '')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6">
                <p className="text-xl text-stone-900 leading-relaxed font-serif italic border-l-2 border-stone-100 pl-8">
                  {t.p1}
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-stone-500 leading-relaxed pt-1">
                  {t.p2}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
             <div className="relative group">
                <div className="absolute -inset-4 bg-stone-50 rounded-sm -z-10 translate-x-4 translate-y-4 transition-transform duration-1000 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Biological Analysis"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-green-950/20 mix-blend-overlay" />
                </div>
                
                <div className="absolute -bottom-10 -right-10 bg-white p-10 border border-stone-100 shadow-2xl max-w-[320px] hidden xl:block">
                  <div className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-widest">Institution-Grade Access</div>
                  <p className="text-sm font-medium text-stone-600 leading-relaxed font-serif italic mb-6">
                    "{t.priority_desc.replace(/"/g, '')}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-stone-400">Veritas-Level Clearance Only</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 pt-32 border-t border-stone-100">
          <div className="space-y-8">
            <h3 className="text-sm font-bold text-green-700 uppercase tracking-widest">{t.priority_label}</h3>
            <p className="text-stone-500 font-medium leading-relaxed">
              {t.priority_desc}
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-sm font-bold text-green-700 uppercase tracking-widest">{t.privacy_label}</h3>
            <p className="text-stone-500 font-medium leading-relaxed">
              {t.privacy_desc}
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-sm font-bold text-green-700 uppercase tracking-widest">{t.luxury_title} <br/><span className="text-stone-400 italic font-medium lowercase tracking-tighter text-2xl">{t.luxury_subtitle}</span></h3>
            <p className="text-stone-500 font-medium leading-relaxed mb-6">
              {t.entry}
            </p>
            <Link to="/heritage/ethos" className="inline-flex items-center gap-3 text-sm font-bold text-green-700 group">
              <span>Learn about our Ethos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
