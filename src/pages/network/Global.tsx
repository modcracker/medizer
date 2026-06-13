import React, { useEffect } from 'react';
import { Globe, Shield, MapPin, Building2, Zap, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Global({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tg = t.globalNetwork;
  const tc = t.common;

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100 selection:text-green-900">
      {/* Massive Editorial Header */}
      <section className="pt-60 pb-40 border-b border-stone-100 relative overflow-hidden bg-white">
        <div className="corp-container relative z-10 text-left">
           <div className="flex flex-col lg:flex-row gap-20 items-end justify-between">
              <div className="max-w-5xl">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="text-sm font-bold text-green-900 uppercase tracking-widest">{tc.network}</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-12 italic text-green-950"
                >
                   {tg.title.split('.')[0]} <br />
                   <span className="text-stone-200 not-italic">.</span>
                </motion.h1>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="lg:max-w-sm mb-12"
              >
                <p className="text-xl text-stone-500 leading-relaxed font-serif italic py-6">
                   {tg.description}
                </p>
              </motion.div>
           </div>
        </div>
        {/* Abstract Background Detail */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none">
           <Globe className="w-full h-full text-black" />
        </div>
      </section>

      {/* Facilities Grid - Asymmetrical editorial layout */}
      <section className="py-48 bg-[#fbfcfb]">
        <div className="corp-container">
          <div className="grid lg:grid-cols-12 gap-px bg-stone-200 border border-stone-200 overflow-hidden shadow-2xl">
            {/* Main Center - Geneva */}
            <div className="lg:col-span-8 bg-white p-16 lg:p-24 group relative overflow-hidden text-left">
              <div className="flex justify-between items-start mb-20">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">HQ // {tg.nodes.geneva.city}</div>
                  <h3 className="text-5xl lg:text-6xl font-bold text-green-950 tracking-tighter italic">{tg.nodes.geneva.title}.</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-sm text-green-700">
                  <Building2 className="w-8 h-8" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                  <p className="text-xl text-stone-500 leading-relaxed font-medium">
                    {tg.geneva_desc}
                  </p>
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-green-900 border-b border-green-900/10 pb-4">{tg.specialization}</div>
                    <ul className="text-stone-500 space-y-2 text-sm font-medium">
                      {tg.specs_geneva.map((spec: string, i: number) => (
                        <li key={i}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="aspect-video bg-stone-50 border border-stone-100 p-12 flex flex-col justify-between relative">
                   <div className="text-[10px] font-mono text-stone-400">GVA_CORE_TELEMETRY</div>
                   <div className="space-y-2">
                     <div className="h-0.5 w-full bg-stone-100"><motion.div animate={{ width: "100%" }} transition={{ duration: 5, repeat: Infinity }} className="h-full bg-green-700" /></div>
                     <div className="h-0.5 w-full bg-stone-100"><motion.div animate={{ width: "100%" }} transition={{ duration: 7, delay: 1, repeat: Infinity }} className="h-full bg-green-400" /></div>
                   </div>
                   <div className="flex justify-between items-center italic font-serif text-sm text-stone-400">
                     <span>Operational Fidelity</span>
                     <span>99.999%</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Singapore Hub */}
            <div className="lg:col-span-4 bg-white p-16 group hover:bg-[#fbfcfb] transition-all text-left">
              <div className="space-y-12 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Regional // {tg.nodes.singapore.city}</div>
                  <h3 className="text-4xl font-bold text-green-950 tracking-tight italic leading-none">{tg.nodes.singapore.title}.</h3>
                  <p className="text-lg text-stone-500 leading-relaxed font-medium pt-8">
                    {tg.singapore_desc}
                  </p>
                </div>
                <div className="pt-12 border-t border-stone-100">
                  <div className="flex justify-between items-center text-sm font-bold mb-4">
                    <span className="text-stone-400">{tg.staff_count}</span>
                    <span className="text-green-950">142 {tg.specialists}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-stone-400">{tg.sovereignty}</span>
                    <span className="text-green-700">{tg.full_autonomy}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zurich Synthesis */}
            <div className="lg:col-span-4 bg-white p-16 group hover:bg-[#fbfcfb] transition-all text-left border-t lg:border-t-0 border-stone-200">
               <div className="space-y-12 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Research // Zurich</div>
                    <h3 className="text-4xl font-bold text-green-950 tracking-tight italic leading-none">{tg.nodes.london.title}.</h3>
                    <p className="text-lg text-stone-500 leading-relaxed font-medium pt-8">
                       {tg.london_desc}
                    </p>
                  </div>
                  <div className="pt-12 border-t border-stone-100">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-stone-400">{tg.array_capacity}</span>
                      <span className="text-green-950">2.4 PB/day</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Dubai Collective */}
            <div className="lg:col-span-8 bg-green-950 text-white p-16 lg:p-24 group relative overflow-hidden text-left">
              <div className="grid md:grid-cols-2 gap-16 items-center h-full">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-green-700 uppercase tracking-widest">Emergent // {tg.nodes.dubai.city}</div>
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter italic">{tg.nodes.dubai.title}.</h3>
                  </div>
                  <p className="text-xl text-stone-400 leading-relaxed font-medium">
                    {tg.dubai_desc}
                  </p>
                  <div className="inline-flex items-center gap-4 text-green-500 text-sm font-bold">
                    <Zap className="w-4 h-4" />
                    <span>{tg.response_time}</span>
                  </div>
                </div>
                <div className="relative aspect-square md:aspect-auto h-64 md:h-full border border-white/10 bg-white/5 p-12 flex flex-col justify-center items-center text-center">
                   <div className="absolute inset-0 overflow-hidden opacity-20">
                     <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2)_0%,transparent_70%)]" />
                   </div>
                   <Activity className="w-16 h-16 text-green-500 mb-8 animate-pulse" />
                   <div className="text-sm font-bold text-green-500 uppercase tracking-widest mb-2 font-mono">Status // Operational</div>
                   <div className="text-4xl font-bold tracking-tighter italic">Live Feed.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Network Standards Section */}
      <section className="py-48 bg-white overflow-hidden text-left border-b border-stone-100">
        <div className="corp-container">
           <div className="grid lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-12 mb-32">
                 <div className="max-w-4xl">
                   <h2 className="text-sm font-bold text-green-900 mb-8 border-b border-green-900/10 pb-4 uppercase tracking-widest">Protocol Framework</h2>
                   <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter text-green-950 leading-tight mb-12 italic">{tg.protocol_title}</h3>
                   <p className="text-xl text-stone-500 font-serif italic leading-relaxed">
                     {tg.protocol_desc}
                   </p>
                 </div>
              </div>

              <div className="lg:col-span-5">
                 <h2 className="text-sm font-bold text-green-900 mb-12 border-b border-green-900/10 pb-6 uppercase tracking-widest">{tg.continuity_title}</h2>
                 <h3 className="text-4xl font-bold tracking-tighter text-green-950 leading-tight mb-12 italic">{tg.continuity_title}</h3>
                 <p className="text-lg text-stone-500 leading-relaxed font-medium mb-12">
                   {tg.continuity_desc}
                 </p>
              </div>
              <div className="lg:col-span-7 space-y-16 lg:pl-16">
                 {tg.principles.map((item: any, i: number) => (
                    <div key={i} className="grid md:grid-cols-3 gap-12 items-start pb-16 border-b border-stone-100 last:border-0">
                       <div className="text-4xl font-bold text-stone-200 tracking-tighter leading-none">{`0${i + 1}`}</div>
                       <div className="md:col-span-2 space-y-4">
                          <h4 className="text-2xl font-bold text-green-950 tracking-tight italic">{item.title}.</h4>
                          <p className="text-lg text-stone-500 leading-relaxed font-medium">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* New: Physical Security & Fortress Standards */}
      <section className="py-48 bg-[#fbfcfb] text-left overflow-hidden border-t border-stone-100">
         <div className="corp-container">
            <div className="grid lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 shadow-2xl">
                     {[
                        { label: tg.stats.security_class, value: 'Level 4-HB' },
                        { label: tg.stats.power_backup, value: '48H Sovereign' },
                        { label: tg.stats.air_filtration, value: 'Bio-Surgical' },
                        { label: tg.stats.response_team, value: 'On-Site 24/7' }
                     ].map((spec, i) => (
                        <div key={i} className="bg-white p-12 space-y-4">
                           <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest font-mono">{spec.label}</div>
                           <div className="text-2xl font-bold text-green-950 italic tracking-tight">{spec.value}</div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:col-span-6 order-1 lg:order-2 space-y-12">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 italic">{tg.stats.compliant_title}</h3>
                  <p className="text-lg text-stone-500 leading-relaxed font-medium">
                     {tg.stats.compliant_desc}
                  </p>
                  <ul className="space-y-6 text-stone-500 font-medium list-none text-lg">
                     <li className="flex gap-4 items-start pb-6 border-b border-stone-100">
                        <Shield className="w-6 h-6 text-green-700 flex-shrink-0" />
                        <span>{tg.stats.biometric}</span>
                     </li>
                     <li className="flex gap-4 items-start pb-6 border-b border-stone-100">
                        <MapPin className="w-6 h-6 text-green-700 flex-shrink-0" />
                        <span>{tg.stats.power_grids}</span>
                     </li>
                     <li className="flex gap-4 items-start">
                        <Building2 className="w-6 h-6 text-green-700 flex-shrink-0" />
                        <span>{tg.stats.shielded}</span>
                     </li>
                  </ul>
               </div>
            </div>
            
            <div className="mt-32">
               <Link 
                 to="/membership"
                 className="inline-flex items-center gap-12 text-3xl font-bold text-green-950 group hover:translate-x-4 transition-transform active:scale-95"
               >
                  <span>{tg.stats.inquiry_button}</span>
                  <ArrowRight className="w-10 h-10 text-green-700 transition-transform" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
