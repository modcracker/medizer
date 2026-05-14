import React, { useEffect } from 'react';
import { Shield, Zap, Activity } from 'lucide-react';

export default function Heritage({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfbf9] text-[#1a1a1a]">
      {/* Massive Editorial Header */}
      <section className="pt-60 pb-40 border-b border-stone-100 relative overflow-hidden bg-white">
        <div className="corp-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-end justify-between">
             <div className="max-w-4xl">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-16 h-[1px] bg-green-900/30" />
                  <span className="text-base font-bold text-green-900">Established 1926</span>
                </div>
                <h1 className="text-8xl lg:text-[14rem] font-bold tracking-tighter leading-[0.7] mb-12 italic text-green-950">
                   Clinical <br />
                   <span className="text-stone-200 not-italic">Heritage.</span>
                </h1>
             </div>
             <div className="lg:max-w-sm mb-6">
                <p className="text-3xl text-green-900 font-serif italic leading-tight">
                   "Our longevity is measured not in years, but in the biological resilience of our families."
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-48 bg-[#fbfcfb] overflow-hidden">
        <div className="corp-container">
           <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative">
                 <div className="aspect-[3/4] bg-white border border-stone-200 p-20 flex flex-col justify-between group overflow-hidden shadow-2xl">
                    <Shield className="w-20 h-20 text-green-900/10 group-hover:text-green-900 transition-all duration-1000 transform group-hover:scale-110" />
                    <div>
                       <div className="text-sm font-bold text-stone-400 mb-6">Foundational Archive</div>
                       <h3 className="text-5xl font-bold text-green-950 tracking-tighter leading-none mb-8 italic">The Geneva Mandate.</h3>
                       <p className="text-stone-600 text-lg leading-relaxed font-medium">
                          Founded as a private endocrinology laboratory in 1926, the Medizer core was built on one principle: absolute biological sovereignty.
                       </p>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-7 lg:pl-16 space-y-24">
                 <div className="max-w-xl">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-8 h-px bg-green-700/30" />
                      <span className="text-base font-bold text-green-700">Institutional Ethos</span>
                    </div>
                    <div className="space-y-12">
                       <p className="text-4xl text-stone-800 leading-tight font-serif italic">
                          "We believe that reactive medicine is a strategic failure. True clinical excellence lies in predicting decay before it manifests."
                       </p>
                       <p className="text-xl text-stone-500 leading-relaxed font-medium">
                          Medizer operates as a clinical steward for those whose health is a critical asset. Our philosophy is rooted in the Swiss tradition of absolute privacy and clinical neutrality.
                       </p>
                    </div>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-12 pt-24 border-t border-stone-100">
                    <div className="space-y-6">
                       <div className="w-10 h-10 border border-green-900/20 rounded-full flex items-center justify-center text-green-900 font-bold">1</div>
                       <h4 className="text-2xl font-bold text-green-950 tracking-tighter italic">Offline Storage.</h4>
                       <p className="text-base text-stone-500 leading-relaxed font-medium">Your records exist only on our hardened physical machines. No residency in public systems.</p>
                    </div>
                    <div className="space-y-6">
                       <div className="w-10 h-10 border border-green-900/20 rounded-full flex items-center justify-center text-green-900 font-bold">2</div>
                       <h4 className="text-2xl font-bold text-green-950 tracking-tighter italic">Vascular Privacy.</h4>
                       <p className="text-base text-stone-500 leading-relaxed font-medium">Authentication layers built on irreversible physiological markers, ensuring data access is yours alone.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Timeline Grid */}
      <section className="py-48 bg-white border-y border-stone-100 relative overflow-hidden">
        <div className="corp-container">
           <div className="flex justify-between items-baseline mb-32">
              <h2 className="text-7xl font-bold tracking-tighter text-green-950 italic">Milestones.</h2>
              <div className="text-sm font-bold text-stone-400">Institutional Archive</div>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-px bg-stone-100 border border-stone-100">
              {[
                { year: '1926', title: 'The Old Town Lab', body: 'Dr. Lukas Medizer founds the first laboratory specializing in adrenal and metabolic health for industrial leaders.' },
                { year: '1968', title: 'Cryptography Shift', body: 'Pioneering off-grid record encryption. The foundation of our modern security architecture.' },
                { year: '1994', title: 'Network Expansion', desc: 'The transition from a single Geneva laboratory to a decentralized network of high-security clinical facilities.' },
                { year: '2022', title: 'Clinical Analysis', desc: 'The integration of advanced computational analysis into our diagnostic protocols.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 group hover:bg-green-950 transition-all duration-700">
                   <div className="text-7xl font-bold text-stone-100 group-hover:text-green-500/20 mb-8 transition-colors leading-none tracking-tighter">{item.year}</div>
                   <h3 className="text-3xl font-bold mb-6 italic tracking-tight group-hover:text-white transition-colors">{item.title}.</h3>
                   <p className="text-lg text-stone-500 group-hover:text-stone-300 leading-relaxed font-medium transition-colors">
                      {item.body || item.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Governance Banner */}
      <section className="py-48 bg-[#fbfcfb]">
        <div className="corp-container">
           <div className="max-w-4xl mx-auto text-center space-y-16">
              <div className="inline-block px-8 py-2 border border-green-900/10 rounded-full text-base font-bold text-green-900">Institutional Governance</div>
              <h2 className="text-6xl lg:text-[7rem] font-bold tracking-tighter text-green-950 leading-[0.85]">Administered by the <br /> <span className="italic text-stone-200">Geneva Medical Board.</span></h2>
              <p className="text-3xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
                "Our board is comprised of leading clinical strategists, ensuring that Medizer remains the gold standard for health preservation."
              </p>
              
              <div className="grid grid-cols-3 gap-8 pt-16 border-t border-stone-100">
                 <div className="space-y-4">
                    <div className="text-4xl font-bold text-green-950 tracking-tighter">100%</div>
                    <div className="text-sm font-bold text-stone-400">Privacy Audit</div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-4xl font-bold text-green-950 tracking-tighter">Offline</div>
                    <div className="text-sm font-bold text-stone-400">Data Residency</div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-4xl font-bold text-green-950 tracking-tighter">Secure</div>
                    <div className="text-sm font-bold text-stone-400">Clinical Access</div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
