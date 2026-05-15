import React, { useEffect } from 'react';
import { ShieldCheck, Scale, ArrowRight, FileText, Gavel, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Ethics({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900">
      {/* Institutional Page Hero */}
      <section className="relative pt-60 pb-32 border-b border-stone-100 bg-white overflow-hidden text-left">
        <div className="corp-container relative z-20">
           <div className="flex flex-col lg:flex-row gap-24 items-end justify-between">
              <div className="max-w-4xl">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="mb-8"
                 >
                   <span className="text-sm font-bold text-green-700 uppercase tracking-widest">Protocol // Section 04</span>
                 </motion.div>
                 <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-12 italic text-green-950"
                 >
                    Ethics <br />
                    <span className="text-stone-200 not-italic">Protocol.</span>
                 </motion.h1>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="text-xl text-stone-600 leading-relaxed max-w-2xl font-serif italic"
                 >
                    "Governing the acquisition and stewardship of biological intelligence through a framework of sovereign individual rights."
                 </motion.p>
              </div>
           </div>
        </div>
        {/* Background Detail */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
           <Scale className="w-full h-full text-black scale-150 rotate-12" />
        </div>
      </section>

      {/* principles section remains similar but I will add more detail after it */}

      {/* New: The Clinical Guardrails Section */}
      <section className="py-48 bg-white border-y border-stone-100 text-left">
         <div className="corp-container">
            <div className="max-w-4xl mb-32">
               <h2 className="text-sm font-bold text-green-900 mb-8 border-b border-green-900/10 pb-4 uppercase tracking-widest">Enforced Constraints</h2>
               <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter text-green-950 leading-tight mb-12 italic">The Guardrails.</h3>
               <p className="text-xl text-stone-500 font-serif italic leading-relaxed">
                  The Medizer Ethics Protocol is backed by technical countermeasures that prevent the violation of our core directives. Our silicon-level security ensures that these rules are immutable.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-24">
               {[
                  {
                     title: 'Absolute Non-Commerciality',
                     desc: 'At no point, for any reason, is member biological data ever provided to third-party commercial interests. Our revenue is derived from membership, not data arbitrage.'
                  },
                  {
                     title: 'Mandatory Disclosure',
                     desc: 'Any shift in the analytical baseline or synthesis logic is disclosed to the membership board 90 days prior to activation.'
                  },
                  {
                     title: 'Biological Sanctity',
                     desc: 'No biological data is used for speculative "enhancement" modeling without the explicit, jurisdictional consent of the individual member.'
                  },
                  {
                     title: 'The Perpetual Archive',
                     desc: 'Members have the right to migrate their data to secondary cold-storage tiers beyond our active synthesis environment at any time.'
                  }
               ].map((guard, i) => (
                  <div key={i} className="space-y-6">
                     <div className="text-sm font-bold text-green-700 font-mono tracking-widest">{`[ CONSTRAINT_0${i + 1} ]`}</div>
                     <h4 className="text-3xl font-bold text-green-950 tracking-tight italic">{guard.title}.</h4>
                     <p className="text-xl text-stone-500 leading-relaxed font-medium">{guard.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* New: Governance Structures Section */}
      <section className="py-48 bg-[#fbfcfb] text-left overflow-hidden">
         <div className="corp-container">
            <div className="grid lg:grid-cols-12 gap-24 items-start">
               <div className="lg:col-span-5">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 italic mb-12 leading-tight">Institutional <br /> Oversight Tiers.</h3>
                  <p className="text-lg text-stone-500 leading-relaxed font-medium">
                     Transparency is maintained through a three-tier governance model, separating clinical operations from ethical adjudication.
                  </p>
               </div>
               <div className="lg:col-span-7 space-y-16">
                  {[
                     {
                        tier: 'Tier 1 // Institutional Board',
                        role: 'Direct oversight of day-to-day clinical operations and global synthesis fidelity.',
                        composition: 'Internal Senior Clinicians'
                     },
                     {
                        tier: 'Tier 2 // The Council of Directives',
                        role: 'High-level auditing of the core protocols and long-term ethical trajectory.',
                        composition: 'Bio-ethicists & Legal Scholars'
                     },
                     {
                        tier: 'Tier 3 // Independent Tribunal',
                        role: 'External adjudication of membership rights and jurisdictional compliance disputes.',
                        composition: 'Independent 3rd Party Observers'
                     }
                  ].map((tier, i) => (
                     <div key={i} className="grid md:grid-cols-12 gap-12 items-start group">
                        <div className="md:col-span-1 text-2xl font-bold text-stone-200 group-hover:text-green-700 transition-colors">{`0${i + 1}`}</div>
                        <div className="md:col-span-11 space-y-4">
                           <h4 className="text-2xl font-bold text-green-950 tracking-tight italic">{tier.tier}.</h4>
                           <p className="text-lg text-stone-500 leading-relaxed font-medium">{tier.role}</p>
                           <div className="text-sm font-bold text-green-900/50 uppercase tracking-widest">{`COMPOSITION: ${tier.composition}`}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Policy Verification & Audit Section remains */}
      <section className="py-48 bg-white border-t border-stone-100 text-left">
        <div className="corp-container">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 leading-tight italic">Institutional <br /> Verification.</h2>
                 <p className="text-xl text-stone-500 leading-relaxed font-serif italic py-4">
                    Medizer operates under strict bio-ethical frameworks established at our Geneva foundation. Our protocols are subject to bi-annual review by independent scholars.
                 </p>
                 <div className="flex flex-col gap-6 pt-12">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-sm bg-[#fbfcfb] border border-stone-100 flex items-center justify-center text-green-700">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-green-950">Ethical Audit Report 2024.pdf</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-sm bg-[#fbfcfb] border border-stone-100 flex items-center justify-center text-green-700">
                        <Eye className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-green-950">Transparency Manifesto</span>
                   </div>
                 </div>
              </div>
              <div className="relative group">
                 <div className="aspect-[4/5] bg-[#fbfcfb] border border-stone-100 p-20 flex flex-col justify-end shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
                       <Gavel className="w-32 h-32 text-green-900/10 group-hover:text-green-700" />
                    </div>
                    <div className="relative z-10 space-y-12 text-left">
                       <div className="space-y-4">
                          <div className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">Governing Body</div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-green-950 tracking-tighter italic leading-none">The Council of Directives.</h3>
                       </div>
                       <p className="text-lg text-stone-500 leading-relaxed font-medium">
                          Our Council ensures that the institution remains faithful to its founding mandate while adapting to emergent biological technologies.
                       </p>
                       <Link to="/membership" className="inline-flex items-center gap-8 text-xl font-bold text-green-700 group">
                          <span>Request Institutional Review</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform" />
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
