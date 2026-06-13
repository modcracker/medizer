import React, { useEffect } from 'react';
import { ShieldCheck, Scale, ArrowRight, FileText, Gavel, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Ethics({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const te = t.ethicsPage;

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
                   <span className="text-sm font-bold text-green-700 uppercase tracking-widest">{te.subtitle}</span>
                 </motion.div>
                 <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-12 italic text-green-950"
                 >
                    {te.title.split(' ')[0]} <br />
                    <span className="text-stone-200 not-italic">{te.title.split(' ')[1]}</span>
                 </motion.h1>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="text-xl text-stone-600 leading-relaxed max-w-2xl font-serif italic"
                 >
                    {te.description}
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

      {/* The Clinical Guardrails Section */}
      <section className="py-48 bg-white border-y border-stone-100 text-left">
         <div className="corp-container">
            <div className="max-w-4xl mb-32">
               <h2 className="text-sm font-bold text-green-900 mb-8 border-b border-green-900/10 pb-4 uppercase tracking-widest">{te.enforced_constraints}</h2>
               <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter text-green-950 leading-tight mb-12 italic">{te.guardrails_title}</h3>
               <p className="text-xl text-stone-500 font-serif italic leading-relaxed">
                  {te.guardrails_desc}
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-24">
               {te.guardrails.map((guard: any, i: number) => (
                  <div key={i} className="space-y-6">
                     <div className="text-sm font-bold text-green-700 font-mono tracking-widest">{`[ CONSTRAINT_0${i + 1} ]`}</div>
                     <h4 className="text-3xl font-bold text-green-950 tracking-tight italic">{guard.title}.</h4>
                     <p className="text-xl text-stone-500 leading-relaxed font-medium">{guard.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Governance Structures Section */}
      <section className="py-48 bg-[#fbfcfb] text-left overflow-hidden">
         <div className="corp-container">
            <div className="grid lg:grid-cols-12 gap-24 items-start">
               <div className="lg:col-span-5">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 italic mb-12 leading-tight">{te.governance_title}</h3>
                  <p className="text-lg text-stone-500 leading-relaxed font-medium">
                     {te.governance_desc}
                  </p>
               </div>
               <div className="lg:col-span-7 space-y-16">
                  {te.tiers.map((tier: any, i: number) => (
                     <div key={i} className="grid md:grid-cols-12 gap-12 items-start group">
                        <div className="md:col-span-1 text-2xl font-bold text-stone-200 group-hover:text-green-700 transition-colors">{`0${i + 1}`}</div>
                        <div className="md:col-span-11 space-y-4">
                           <h4 className="text-2xl font-bold text-green-950 tracking-tight italic">{tier.tier}.</h4>
                           <p className="text-lg text-stone-500 leading-relaxed font-medium">{tier.role}</p>
                           <div className="text-sm font-bold text-green-900/50 uppercase tracking-widest">{`COMPOSITION: ${tier.comp || tier.composition}`}</div>
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
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 leading-tight italic">{te.verification_title}</h2>
                 <p className="text-xl text-stone-500 leading-relaxed font-serif italic py-4">
                    {te.verification_desc}
                 </p>
                 <div className="flex flex-col gap-6 pt-12">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-sm bg-[#fbfcfb] border border-stone-100 flex items-center justify-center text-green-700">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-green-950">{te.audit_report}</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-sm bg-[#fbfcfb] border border-stone-100 flex items-center justify-center text-green-700">
                        <Eye className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-green-950">{te.manifesto}</span>
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
                          <div className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{te.subtitle}</div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-green-950 tracking-tighter italic leading-none">{te.council_title}</h3>
                       </div>
                       <p className="text-lg text-stone-500 leading-relaxed font-medium">
                          {te.council_desc}
                       </p>
                       <Link to="/membership" className="inline-flex items-center gap-8 text-xl font-bold text-green-700 group">
                          <span>{te.request_review}</span>
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
