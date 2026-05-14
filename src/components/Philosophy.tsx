import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Philosophy({ t }: { t: any }) {
  return (
    <section id="philosophy" className="py-32 lg:py-48 bg-white border-t border-stone-100">
      <div className="corp-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          <div className="lg:col-span-7 space-y-16">
            <h2 className="text-4xl lg:text-5xl tracking-tighter leading-[1.1] max-w-[800px] text-green-950 font-bold">
              {t.quote.replace(/"/g, '')}
            </h2>

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

            <div className="p-10 lg:p-14 bg-stone-50 border border-stone-200 rounded-sm relative overflow-hidden group">
              <p className="font-bold text-2xl lg:text-3xl leading-tight text-green-950">
                "{t.entry}"
              </p>
              
              <div className="mt-12 pt-8 border-t border-stone-200 flex items-center justify-between">
                <div className="text-sm font-bold text-stone-400">
                  Institutional Directive
                </div>
                <Link to="/membership" className="flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-600 transition-all">
                  Membership Information
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-green-100/30 rounded-sm -z-10 translate-x-4 translate-y-4" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Human Biology and Science"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-green-950/10 pointer-events-none" />
            </div>

            {/* Institutional Overlay Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 border border-stone-100 shadow-xl max-w-[280px] hidden xl:block">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-green-700" />
                <span className="text-sm font-bold text-stone-400">Biological Integrity</span>
              </div>
              <p className="text-sm font-medium text-stone-600 leading-relaxed font-serif italic">
                Maintaining the peak state of human biology through clinical excellence and strategic foresight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
