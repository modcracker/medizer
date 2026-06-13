import React, { useEffect, useState } from 'react';
import { Activity, Shield, Cpu, Lock, Terminal, Activity as ActivityIcon, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Monitoring({ t }: { t: any }) {
  const [lastSync, setLastSync] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setLastSync(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const tm = t.monitoring;
  const d = tm.dashboard;

  return (
    <div className="bg-[#fbfcfb] text-[#1a1a1a] min-h-screen font-sans">
      {/* Editorial Hero */}
      <section className="pt-60 pb-32 border-b border-stone-100 relative overflow-hidden bg-white">
        <div className="corp-container relative z-10 text-left">
           <div className="grid lg:grid-cols-12 gap-24 items-end">
              <div className="lg:col-span-8">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="mb-8"
                 >
                   <span className="text-sm font-bold text-green-700 uppercase tracking-widest">{tm.subtitle}</span>
                </motion.div>
                 <motion.h1 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-12 text-green-950"
                 >
                    {tm.title.split(' ')[0]} <br />
                    <span className="text-stone-300 italic">{tm.title.split(' ')[1]}</span>
                 </motion.h1>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="lg:col-span-4 pb-4"
              >
                 <p className="text-xl text-stone-500 leading-relaxed font-serif italic py-4">
                    {tm.description}
                 </p>
              </motion.div>
           </div>
        </div>
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
           <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(0,0,0,1)_40px,rgba(0,0,0,1)_41px),repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(0,0,0,1)_40px,rgba(0,0,0,1)_41px)]" />
        </div>
      </section>

      {/* Real-time Status Dashboard Style */}
      <section className="py-24 bg-[#fbfcfb]">
        <div className="corp-container">
           {/* Technical Header */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 px-4">
              <div className="space-y-2">
                 <div className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{d.operational_mode}</div>
                 <h2 className="text-3xl font-bold text-green-950 tracking-tighter italic">{d.command_interface}</h2>
              </div>
              <div className="flex items-center gap-8">
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-stone-400 uppercase font-mono">{d.last_verification}</span>
                    <span className="text-sm font-bold text-green-700">{lastSync.toLocaleTimeString()}</span>
                 </div>
                 <div className="w-12 h-12 bg-white border border-stone-100 rounded-sm flex items-center justify-center shadow-sm">
                    <RefreshCw className="w-5 h-5 text-green-700 animate-spin-slow" />
                 </div>
              </div>
           </div>

           <div className="grid lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 shadow-2xl">
              {[
                { label: d.residency, value: 'Sovereign', status: d.status_optimal, icon: <Cpu className="w-5 h-5" /> },
                { label: d.latency, value: '{"<"} 40ms', status: d.status_continuous, icon: <Activity className="w-5 h-5" /> },
                { label: d.encryption, value: 'AES-256-HQ', status: d.status_locked, icon: <Lock className="w-5 h-5" /> },
                { label: d.board, value: 'Active', status: d.status_verified, icon: <Shield className="w-5 h-5" /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-12 space-y-8 group hover:bg-stone-50 transition-colors text-left">
                   <div className="flex justify-between items-start text-stone-300 group-hover:text-green-700 transition-colors">
                      {stat.icon}
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <div className="space-y-2">
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{stat.label}</div>
                      <div className="text-4xl font-bold text-green-950 tracking-tighter italic">{stat.value}.</div>
                   </div>
                   <div className="flex items-center gap-3 pt-4 border-t border-stone-50">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                      <span className="text-xs font-bold text-stone-500 uppercase font-mono">{stat.status}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Systems Architecture & Audit Logs */}
      <section className="py-48 bg-white border-y border-stone-100 relative overflow-hidden text-left">
        <div className="corp-container relative z-10">
           <div className="grid lg:grid-cols-12 gap-24">
              {/* Architecture Principles */}
              <div className="lg:col-span-7 space-y-24">
                 <div>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-green-950 leading-tight italic mb-12 uppercase">{tm.integrity.title}</h2>
                    <p className="text-xl text-stone-500 font-serif italic leading-relaxed max-w-2xl mb-12">
                       {tm.integrity.desc}
                    </p>
                    <div className="p-10 bg-green-50/50 border border-green-900/10 rounded-sm">
                       <h4 className="text-xl font-bold text-green-900 mb-4 italic">{tm.integrity.directive_title}</h4>
                       <p className="text-stone-600 font-medium leading-relaxed">
                          {tm.integrity.directive_desc}
                       </p>
                    </div>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-16">
                    {[
                       {
                          title: 'Fidelity Auditing',
                          desc: 'Continuous background verification of all biological data streams against institutional baselines using high-fidelity synthesis.'
                       },
                       {
                          title: 'Jurisdictional Barrier',
                          desc: 'Automated enforcement of data residency. Telemetry is physically locked to primary HQ nodes using hardware-level geo-fencing.'
                       },
                       {
                          title: 'Peer-Review Loops',
                          desc: 'Every analytical output is checked against anonymized clinical histories to ensure contextual accuracy.'
                       },
                       {
                          title: 'Anomaly Suppression',
                          desc: 'Instant isolation of corrupted or inconsistent data streams to prevent analytical pollution of the Global Registry.'
                       }
                    ].map((item, i) => (
                       <div key={i} className="space-y-4">
                          <h4 className="text-xl font-bold text-green-950 italic">{item.title}</h4>
                          <p className="text-lg text-stone-500 leading-relaxed font-medium">{item.desc}</p>
                       </div>
                    ))}
                 </div>

                 {/* New: Audit Cycles Section */}
                 <div className="pt-24 border-t border-stone-100">
                    <h3 className="text-3xl font-bold text-green-950 italic mb-12">{d.audit_cycle}</h3>
                    <div className="space-y-12">
                       {[
                          { cycle: 'Phase 1 // Real-time Telemetry Auditing', freq: 'Continuous', focus: 'Immediate Data Integrity' },
                          { cycle: 'Phase 2 // Internal Operational Review', freq: 'Quarterly', focus: 'Clinical Compliance & Staff Performance' },
                          { cycle: 'Phase 3 // Independent Scholars Audit', freq: 'Bi-Annual', focus: 'Ethical Framework Alignment' },
                          { cycle: 'Phase 4 // Global Registry Synchronization', freq: 'Annual', focus: 'Long-term Archive Fidelity' }
                       ].map((cycle, i) => (
                          <div key={i} className="flex flex-col md:flex-row gap-12 text-left group">
                             <div className="text-xl font-bold text-green-800 font-mono bg-green-50 px-4 py-1 rounded-sm self-start">{`H${i + 1}`}</div>
                             <div className="flex-1 space-y-2 pb-12 border-b border-stone-50 last:border-0 group-hover:border-green-700/20 transition-all">
                                <h4 className="text-2xl font-bold text-green-950 tracking-tight italic">{cycle.cycle}.</h4>
                                <p className="text-lg text-stone-500 font-medium">{`Primary Focus: ${cycle.focus}`}</p>
                                <div className="text-xs font-bold text-stone-300 uppercase tracking-widest">{`Frequency: ${cycle.freq}`}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Technical Sidebar / Audit Log */}
              <div className="lg:col-span-5 sticky top-40 h-fit">
                 <div className="bg-[#fbfcfb] border border-stone-100 p-12 shadow-inner h-full flex flex-col">
                    <div className="flex items-center justify-between mb-12 border-b border-stone-200 pb-8">
                       <div className="flex items-center gap-3">
                          <Terminal className="w-5 h-5 text-green-900" />
                          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{tm.log.title}</span>
                       </div>
                       <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold font-mono">
                          SECURED
                       </div>
                    </div>
                    
                    <div className="space-y-8 flex-1">
                       {[
                         { time: '02:14:12', event: 'Geneva Node: Data Integrity Checked', status: 'Valid' },
                         { time: '01:58:04', event: 'Zurich Hub: Protocol Synchronization', status: 'Sync' },
                         { time: '01:12:45', event: 'Board Access: Verified Credential', status: 'Auth' },
                         { time: '00:45:22', event: 'Residency Audit: Jurisdictional Match', status: 'Match' },
                         { time: '00:12:10', event: 'System Handshake: Global Latency Check', status: 'Opt' },
                         { time: '23:55:01', event: 'Directive 1926-C: Baseline Reset', status: 'Nom' },
                         { time: '23:12:40', event: 'Singapore Node: Resident Link Verified', status: 'Auth' }
                       ].map((log, i) => (
                         <div key={i} className="flex gap-6 items-start group">
                            <span className="text-[11px] text-stone-300 font-mono pt-1">{log.time}</span>
                            <div className="flex-1 space-y-1">
                               <div className="text-sm font-bold text-green-900 group-hover:text-green-700 transition-colors">{log.event}</div>
                               <div className="text-[10px] text-stone-400 font-mono uppercase tracking-tighter">Event Status // {log.status}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-stone-200">
                       <p className="text-xs text-stone-500 font-serif italic leading-relaxed">
                         {tm.log.footer}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Abstract Architectural Detail */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,1)_0%,transparent_70%)]" />
      </section>

      {/* Institutional Alert Pattern */}
      <section className="py-24 bg-green-950 text-white overflow-hidden">
        <div className="corp-container">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                 <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-500" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold tracking-tight italic">Clinical Protocol Alpha.</h3>
                    <p className="text-stone-400 font-medium">All systems monitored under Direct Mandate 1926-C.</p>
                 </div>
              </div>
              <Link to="/membership" className="px-10 py-4 bg-green-500 text-green-950 font-bold hover:bg-green-400 transition-all active:scale-95 shadow-xl shadow-green-500/10 inline-block">
                 {d.request_audit}
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
