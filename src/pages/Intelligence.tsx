import React, { useEffect } from 'react';
import { Activity, Shield, Zap, Sparkles, Binary, Fingerprint, Brain, Database, MessageSquare } from 'lucide-react';
import HealthAI from '../components/HealthAI';

export default function Intelligence({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tc = t.common;
  const tip = t.intelligencePage;

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Tech Header */}
      <section className="pt-60 pb-32 border-b border-stone-200 bg-stone-50 relative overflow-hidden">
        <div className="corp-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-px bg-green-700/30" />
                <span className="text-base font-bold text-green-700 uppercase tracking-widest">{tip.subtitle}</span>
              </div>
              <h1 className="text-7xl lg:text-9xl font-bold text-green-950 tracking-tighter leading-[0.95] mb-12 italic">
                {tip.title.split(' ')[0]} <br />
                <span className="text-stone-300 not-italic">{tip.title.split(' ')[1]}</span>
              </h1>
            </div>
              <div className="lg:col-span-4 pb-4">
                 <p className="text-2xl text-stone-500 leading-tight font-serif italic mb-8 text-left">
                    {tip.description}
                 </p>
                 <div className="h-px w-full bg-stone-200" />
              </div>
           </div>
        </div>
      </section>

      {/* Unique Integrated Terminal (Not a section layer) */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="corp-container">
           <div className="grid lg:grid-cols-12 gap-px bg-stone-200 border border-stone-200">
              <div className="lg:col-span-4 bg-white p-16 space-y-12 text-left">
                 <div>
                    <h2 className="text-3xl font-bold tracking-tighter text-green-950 mb-6 italic">{tip.board.title}</h2>
                    <p className="text-stone-600 text-lg leading-relaxed font-medium">
                       {tip.board.desc}
                    </p>
                 </div>
                 
                 <div className="space-y-6 pt-12 border-t border-stone-100">
                    <div className="flex justify-between items-center text-sm font-bold">
                       <span className="text-stone-400 uppercase tracking-widest">Security Protocol</span>
                       <span className="text-green-700">Validated</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                       <span className="text-stone-400 uppercase tracking-widest">Board Presence</span>
                       <span className="text-green-950">Active</span>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-8 bg-stone-50 p-px">
                 <div className="bg-white p-8 h-full">
                    <div className="border border-stone-200 rounded-sm overflow-hidden shadow-xl shadow-stone-200/50">
                       <div className="bg-stone-50 px-6 py-4 border-b border-stone-200 flex justify-between items-center">
                          <div className="flex gap-2">
                             <div className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                             <div className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                          </div>
                          <span className="text-[9px] font-mono font-bold text-stone-400 uppercase tracking-[0.2em]">SYS_LINK // ALPHA_GENEVA</span>
                       </div>
                       <div className="bg-white">
                          <HealthAI t={t.healthAi} />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Advisory Modules */}
      <section className="py-40 bg-white">
        <div className="corp-container">
           <div className="max-w-2xl mb-24 text-left">
              <h2 className="text-6xl font-bold tracking-tighter text-green-950 mb-8 italic">{tip.modules_title}</h2>
              <p className="text-stone-500 text-2xl font-serif italic">{tip.modules_desc}</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tip.modules.map((module: any, i: number) => (
                <div key={i} className="bg-[#fbfcfb] p-12 border border-stone-100 hover:border-green-700 transition-all group text-left">
                   <div className="text-stone-300 group-hover:text-green-700 mb-10 transition-colors">
                      {i === 0 && <Binary className="w-6 h-6" />}
                      {i === 1 && <Activity className="w-6 h-6" />}
                      {i === 2 && <Brain className="w-6 h-6" />}
                      {i === 3 && <Shield className="w-6 h-6" />}
                   </div>
                   <h3 className="text-2xl font-bold text-green-950 tracking-tight mb-4 italic">{module.title}.</h3>
                   <p className="text-base text-stone-500 leading-relaxed font-medium">{module.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Diagnostic Protocols */}
      <section className="py-48 bg-green-950 text-white relative overflow-hidden">
        <div className="corp-container relative z-10">
           <div className="grid lg:grid-cols-12 gap-24 items-center text-left">
              <div className="lg:col-span-6 space-y-12">
                 <h2 className="text-6xl lg:text-7xl font-bold tracking-tighter italic">{tip.directives.title.split(' ')[0]} <br /> {tip.directives.title.split(' ')[1]}</h2>
                 <p className="text-2xl text-stone-300 leading-relaxed font-serif italic">
                   {tip.directives.desc}
                 </p>
                 <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                    <div className="space-y-4">
                       <div className="text-sm font-bold text-green-500 uppercase tracking-widest">Record Fidelity</div>
                       <div className="text-4xl font-bold tracking-tighter italic">99.98%</div>
                    </div>
                    <div className="space-y-4">
                       <div className="text-sm font-bold text-green-700 uppercase tracking-widest">Sync Velocity</div>
                       <div className="text-4xl font-bold tracking-tighter italic">INSTANT</div>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-6">
                 <div className="aspect-[4/3] border border-white/10 bg-white/5 p-16 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                       <div className="space-y-2 text-left">
                          <div className="text-xs font-bold text-green-500 font-mono tracking-widest">FACILITY ID: GENEVA-PRIMARY</div>
                          <div className="text-4xl font-bold tracking-tight italic">Registry Core.</div>
                       </div>
                       <Activity className="w-12 h-12 text-green-500 opacity-50" />
                    </div>
                    
                    <div className="space-y-8">
                       <div className="h-0.5 w-full bg-white/5 overflow-hidden text-left">
                          <div className="h-full w-2/3 bg-green-600 group-hover:w-full transition-all duration-[2000ms]" />
                       </div>
                       <div className="h-0.5 w-full bg-white/5 overflow-hidden text-left">
                          <div className="h-full w-4/5 bg-green-400 group-hover:w-full transition-all duration-[2000ms] delay-500" />
                       </div>
                    </div>
                    
                    <div className="text-sm font-medium text-stone-500 italic font-serif text-left">
                       Institutional Data Sovereignty // Encryption Validated
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full" />
                 </div>
              </div>
           </div>
        </div>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#166534_0%,transparent_50%)]" />
        </div>
      </section>
    </div>
  );
}
