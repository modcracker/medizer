import React, { useEffect } from 'react';
import { ArrowRight, History } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Review() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: '1926', title: 'Foundation', desc: 'Established in Geneva as a private data repository for longitudinal research.' },
    { year: '1954', title: 'The Zurich Accord', desc: 'Codification of member privacy rights and data stewardship protocols.' },
    { year: '1982', title: 'Network Expansion', desc: 'Activation of secondary facilities in Singapore and New York.' },
    { year: '2008', title: 'Bio-Digital Shift', desc: 'Transition of all physical records to encrypted sovereign digital architecture.' },
    { year: '2024', title: 'Century Milestone', desc: 'Approaching 100 years of uninterrupted biological data preservation.' }
  ];

  return (
    <div className="bg-[#fbfcfb] overflow-x-hidden">
      {/* Page Hero */}
      <section className="relative min-h-[450px] w-full border-b border-stone-100 flex items-center bg-[#fbfcfb]">
        {/* Full-width Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/[0.02] z-0 pointer-events-none" />
        <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfcfb] to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1600" 
            alt="Historical Records"
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="corp-container relative z-20">
          <div className="max-w-[750px] py-20 text-center md:text-left">
            <span className="block mb-6 text-base font-bold text-green-700 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-green-700/30" />
              Retrospective & Archive
            </span>
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter mb-8 italic">Century Review.</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[600px] font-medium mx-auto md:mx-0">
              A chronological analysis of the Medizer impact on institutional health management and biological data integrity since 1926.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 corp-container bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative border-l border-stone-200 ml-4 md:ml-12 pl-12 space-y-32">
            {milestones.map((m, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[53px] top-0 w-2.5 h-2.5 bg-green-700 rounded-full ring-8 ring-white group-hover:ring-green-700/10 transition-all duration-500" />
                
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="text-6xl font-bold text-green-950 tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                      {m.year}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-3xl font-bold text-green-950 mb-4 tracking-tighter italic">{m.title}.</h3>
                    <p className="text-stone-500 text-lg leading-relaxed max-w-[550px] font-medium">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 pt-20 border-t border-stone-100 text-center">
            <Link to="/membership" className="inline-flex flex-col items-center group">
              <span className="text-stone-400 text-sm mb-4 font-bold tracking-tight">The Future of Sovereignty</span>
              <span className="text-4xl font-bold text-green-950 tracking-tighter group-hover:text-green-700 transition-colors italic">
                Secure your lineage today.
              </span>
              <div className="mt-8 w-12 h-12 bg-green-700 rounded-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
