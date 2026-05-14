import React, { useEffect } from 'react';
import { MapPin, Zap, Shield, Database, Globe, ArrowRight, Settings, Command } from 'lucide-react';

const networkFacilities = [
  { id: 'CH-ZH-01', city: 'Zurich', type: 'Clinical Laboratory', status: 'Optimal', load: '42%', uptime: '99.999%' },
  { id: 'SG-RC-04', city: 'Singapore', type: 'Diagnostic Center', status: 'Optimal', load: '38%', uptime: '99.998%' },
  { id: 'US-NY-03', city: 'New York', type: 'Command Center', status: 'Maintenance', load: '12%', uptime: '99.994%' },
  { id: 'AE-DX-01', city: 'Dubai', type: 'Medical Facility', status: 'Optimal', load: '65%', uptime: '99.999%' },
];

export default function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfcfb] text-[#1a1a1a] min-h-screen">
      {/* Institutional Hero */}
      <section className="pt-60 pb-32 border-b border-stone-100 relative overflow-hidden bg-white">
        <div className="corp-container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-[1px] bg-green-700/30" />
                <span className="text-base font-bold text-green-700">Systems Architecture</span>
              </div>
              <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.95] mb-12 text-green-950">
                Institutional <br />
                <span className="text-stone-300 italic">Foundation.</span>
              </h1>
            </div>
            <div className="lg:max-w-sm pb-4">
               <p className="text-2xl text-stone-500 font-serif italic leading-relaxed">
                 "Our physical infrastructure serves as the silent anchor for all biological clinical operations."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Facility Overview */}
      <section className="py-32 bg-[#fbfcfb]">
        <div className="corp-container">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-5xl font-bold tracking-tighter text-green-950 mb-8 italic">Precision at Scale.</h2>
                 <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                   Each facility is a purpose-built environment designed for absolute biological fidelity. We maintain direct control over every tier of our system—from the physical hardware to the regional clinical personnel—ensuring a seamless health trajectory for our members.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 shadow-xl">
                 {[
                   { label: 'Air Purity', desc: 'Surgical HEPA filtration standards.' },
                   { label: 'Data Stewardship', desc: 'Tier-4 physical server residency.' },
                   { label: 'Access Control', desc: 'Vascular biometric protocol.' },
                   { label: 'Energy Security', desc: 'Redundant power with long-term fuel cells.' }
                 ].map((spec, i) => (
                   <div key={i} className="bg-white p-10">
                      <h3 className="text-sm font-bold text-green-700 mb-3">{spec.label}</h3>
                      <p className="text-sm text-stone-500 font-medium leading-relaxed">{spec.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Clean Administrative Directory */}
      <section className="py-32 bg-white border-y border-stone-100">
        <div className="corp-container">
           <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <div className="max-w-xl">
                 <h2 className="text-5xl font-bold tracking-tighter text-green-950 italic">Facility Registry.</h2>
              </div>
              <span className="text-sm font-semibold text-stone-400">Global Operations Registry</span>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-stone-200 text-sm font-medium text-stone-400">
                       <th className="py-6 pr-6">Location</th>
                       <th className="py-6 px-6">Classification</th>
                       <th className="py-6 px-6">Status</th>
                       <th className="py-6 pl-6 text-right">Jurisdiction</th>
                    </tr>
                 </thead>
                 <tbody className="text-stone-800">
                    {networkFacilities.map((facility, i) => (
                      <tr key={i} className="border-b border-stone-50 group hover:bg-stone-50/50 transition-colors">
                         <td className="py-10 pr-6">
                            <div className="font-bold text-xl text-green-950">{facility.city}</div>
                            <div className="text-sm text-stone-400 font-medium">{facility.id}</div>
                         </td>
                         <td className="py-10 px-6 font-medium text-stone-500 italic font-serif text-lg">{facility.type}</td>
                         <td className="py-10 px-6">
                            <div className="flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                               <span className="text-base font-bold text-green-800">{facility.status}</span>
                            </div>
                         </td>
                         <td className="py-10 pl-6 text-right font-medium text-stone-400 text-sm">International Waters / EEA</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-48 bg-[#fbfcfb]">
        <div className="corp-container max-w-4xl mx-auto text-center">
           <Command className="w-12 h-12 text-green-700/20 mx-auto mb-12" />
           <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-green-950 leading-[1.05] mb-12">
             Privacy through <br /> <span className="italic text-stone-300">Physical Isolation.</span>
           </h2>
           <p className="text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
             "We achieve absolute security by removing clinical data from the cloud entirely. Your biological record resides within our walls, and nowhere else."
           </p>
        </div>
      </section>
    </div>
  );
}
