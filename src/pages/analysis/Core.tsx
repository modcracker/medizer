import React, { useEffect } from 'react';
import HealthAI from '../../components/HealthAI';
import { ArrowRight, Cpu, Network, Zap, Shield, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Core({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tp = t.corePage;

  return (
    <div className="bg-white overflow-x-hidden font-sans">
      {/* Editorial Page Hero */}
      <section className="relative pt-60 pb-40 border-b border-stone-100 bg-white">
        <div className="corp-container relative z-20 text-left">
           <div className="flex flex-col lg:flex-row gap-24 items-end justify-between">
              <div className="max-w-4xl">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="mb-8"
                 >
                   <span className="text-sm font-bold text-green-700 uppercase tracking-widest">{tp.subtitle}</span>
                 </motion.div>
                 <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-12 italic text-green-950"
                 >
                    {tp.title.split(' ')[0]} <br />
                    <span className="text-stone-200 not-italic">{tp.title.split(' ')[1]}</span>
                 </motion.h1>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="lg:max-w-sm mb-12"
              >
                 <p className="text-xl text-stone-500 leading-relaxed font-serif italic py-6">
                    {tp.description}
                 </p>
              </motion.div>
           </div>
        </div>
        {/* Background Visual Element */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] pointer-events-none overflow-hidden">
           <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,1)_0%,transparent_100%)]" />
        </div>
      </section>

      {/* Main Analysis Engine section */}
      <section className="bg-[#fbfcfb] py-32">
         <div className="corp-container">
            <div className="flex items-center gap-4 mb-16">
               <Cpu className="w-5 h-5 text-green-700" />
               <span className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{tp.status_nominal}</span>
            </div>
            <HealthAI t={t.healthAi} />
         </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-48 bg-white border-y border-stone-100 text-left">
        <div className="corp-container">
           <div className="grid lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-12 mb-32">
                 <div className="max-w-4xl">
                    <h2 className="text-sm font-bold text-green-900 mb-8 border-b border-green-900/10 pb-4 uppercase tracking-widest">Distributed Synthesis</h2>
                    <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter text-green-950 leading-tight mb-12 italic">{tp.sovereignty_title}</h3>
                    <p className="text-xl text-stone-500 font-serif italic leading-relaxed">
                       {tp.sovereignty_desc}
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-5 space-y-12">
                 <h2 className="text-4xl font-bold tracking-tighter text-green-950 leading-tight italic">{tp.synthesis_title}</h2>
                 <p className="text-xl text-stone-600 leading-relaxed font-medium">
                    {tp.synthesis_desc}
                 </p>
                 <div className="pt-12 space-y-8">
                    {[
                       { label: tp.stats.parallel, value: '512k/sec' },
                       { label: tp.stats.velocity, value: '100ms' },
                       { label: tp.stats.residency, value: 'Geneva Core' },
                       { label: tp.stats.encryption, value: 'Phase-4 Asymmetric' }
                    ].map((stat, i) => (
                       <div key={i} className="flex justify-between items-end border-b border-stone-100 pb-4">
                          <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">{stat.label}</span>
                          <span className="text-2xl font-bold text-green-900 italic tracking-tight">{stat.value}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 shadow-2xl overflow-hidden">
                 {tp.features.map((item: any, i: number) => (
                    <div key={i} className="bg-white p-12 group hover:bg-stone-50 transition-all duration-700">
                       <div className="w-12 h-12 bg-white border border-stone-100 flex items-center justify-center text-green-700 mb-8 transition-all group-hover:scale-110 shadow-sm">
                          {i === 0 && <Network className="w-6 h-6" />}
                          {i === 1 && <Database className="w-6 h-6" />}
                          {i === 2 && <Zap className="w-6 h-6" />}
                          {i === 3 && <Shield className="w-6 h-6" />}
                       </div>
                       <h4 className="text-2xl font-bold text-green-950 tracking-tighter italic mb-4">{item.title}.</h4>
                       <p className="text-lg text-stone-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* The Hardware Stack Deep-Dive */}
      <section className="py-48 bg-green-950 text-white overflow-hidden text-left">
         <div className="corp-container">
            <div className="grid lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-6 space-y-12">
                  <div className="text-xs font-bold text-green-500 uppercase tracking-[0.3em] font-mono">{tp.hardware_tier}</div>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter italic">{tp.stack.title}</h2>
                  <p className="text-xl text-stone-400 font-serif italic leading-relaxed">
                     {tp.stack.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                     <div>
                        <div className="text-4xl font-bold mb-2">{tp.uptime_val}</div>
                        <div className="text-sm font-bold text-stone-500 uppercase">{tp.stack.uptime}</div>
                     </div>
                     <div>
                        <div className="text-4xl font-bold mb-2">{tp.zero_val}</div>
                        <div className="text-sm font-bold text-stone-500 uppercase">{tp.stack.dependencies}</div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-6">
                  <div className="relative aspect-square bg-white/[0.03] border border-white/10 p-16 flex flex-col justify-center items-center group">
                     <div className="absolute inset-0 bg-[#fbfcfb] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     <Cpu className="w-32 h-32 text-green-500 mb-12 group-hover:text-green-950 transition-colors relative z-10" />
                     <div className="text-center relative z-10 group-hover:text-green-950 transition-colors">
                        <h4 className="text-3xl font-bold tracking-tighter mb-4 italic">Medizer Core G3</h4>
                        <p className="text-lg text-stone-500 font-medium max-w-sm mx-auto">
                           Hardware-level isolation of sensitive clinical records from the analytical synthesis layer.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Analytical Modules Breakdown */}
      <section className="py-48 bg-[#fbfcfb] text-left">
         <div className="corp-container">
            <div className="max-w-4xl mb-24">
               <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 italic mb-8">{tp.modules_title}</h3>
               <p className="text-lg text-stone-500 font-medium">{tp.modules_desc}</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
               {tp.modules.map((module: any, i: number) => (
                  <div key={i} className="p-16 bg-white border border-stone-100 hover:border-green-700/30 transition-all duration-700 shadow-sm hover:shadow-2xl">
                     <div className="text-4xl font-bold text-stone-100 mb-8 tracking-tighter">{`0${i + 1}`}</div>
                     <h4 className="text-3xl font-bold text-green-950 tracking-tighter italic mb-6">{module.title}.</h4>
                     <p className="text-lg text-stone-500 leading-relaxed font-medium mb-12">{module.desc}</p>
                     <div className="flex items-center gap-3 text-sm font-bold text-green-700">
                        <Activity className="w-4 h-4" />
                        <span className="uppercase tracking-widest">{module.focus}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-48 bg-[#fbfcfb] text-center overflow-hidden relative">
         <div className="corp-container relative z-10">
            <div className="max-w-3xl mx-auto space-y-12">
               <div className="inline-flex items-center gap-4 text-green-700 font-bold text-sm border border-green-700/20 px-6 py-2 rounded-full bg-green-50/50">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>{tp.system_ready}</span>
               </div>
               <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-green-950 leading-tight italic">{tp.cta_title}</h2>
               <p className="text-xl text-stone-500 font-serif italic leading-relaxed">
                  {tp.cta_desc}
               </p>
               <div className="pt-12">
                  <Link to="/membership" className="inline-flex items-center gap-10 bg-green-950 text-white px-16 py-8 rounded-full font-bold shadow-2xl hover:bg-green-900 transition-all active:scale-95 text-xl group">
                    <span>{tp.cta_button}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform text-green-500" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
