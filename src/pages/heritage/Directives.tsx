import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Directives() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfcfb] overflow-x-hidden">
      {/* Page Hero */}
      <section className="relative min-h-[450px] w-full border-b border-stone-100 flex items-center bg-[#fbfcfb]">
        {/* Full-width Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/[0.02] z-0 pointer-events-none" />

        <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfcfb] via-white/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600" 
            alt="Corporate Integrity"
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="corp-container relative z-20">
          <div className="max-w-[750px] py-20 text-center md:text-left">
            <span className="block mb-6 text-base font-bold text-green-700 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-green-700/30" />
              Mandate & Core
            </span>
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter mb-8 italic">Directives.</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[600px] font-medium mx-auto md:mx-0">
              Institutional guidelines ensuring the perpetuation of high-fidelity biological data and member security across the next century.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 corp-container bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid gap-8 items-start">
            {[
              {
                id: '01',
                title: 'Preservation of Lineage',
                desc: 'We prioritize the longitudinal tracking of biological markers across decades, ensuring health trajectories are analyzed within their complete historical context.'
              },
              {
                id: '02',
                title: 'Analytical Autonomy',
                desc: 'Medizer reserves all rights to proprietary methodology development, resisting commercial pressure to commoditize individual health snapshots in favor of deep-structure analysis.'
              },
              {
                id: '03',
                title: 'Discreet Stewardship',
                desc: 'The network exists as a private utility. We maintain a zero-visibility policy for external queries regarding individual membership or data repositories.'
              }
            ].map((directive) => (
              <div key={directive.id} className="group relative bg-[#fbfcfb] p-12 border border-stone-100 hover:border-green-700/30 transition-all duration-700">
                <div className="flex flex-col md:grid md:grid-cols-12 gap-10">
                  <div className="md:col-span-2 text-6xl font-bold text-green-700 opacity-10 tracking-tighter leading-none italic group-hover:opacity-20 transition-opacity">
                    {directive.id}
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="text-3xl font-bold text-green-950 mb-4 tracking-tighter italic">{directive.title}.</h3>
                    <p className="text-stone-500 text-lg leading-relaxed max-w-[600px] font-medium">
                      {directive.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 p-12 bg-green-950 rounded-sm text-white">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-4 tracking-tight italic">Aligned with our mission?</h4>
              <p className="text-green-200/70 text-lg leading-relaxed">
                Membership into the Medizer Network is by institutional invitation or qualified application review.
              </p>
            </div>
            <Link to="/membership" className="bg-green-700 hover:bg-green-600 text-white px-10 py-5 rounded-sm font-bold transition-all shadow-xl shadow-black/20 whitespace-nowrap active:scale-95">
              Inquire for Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
