import React from 'react';
import { Dna, Cpu, Brain, ShieldAlert, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    title: "Genomic Sequencing",
    description: "Multi-omic analysis for longitudinal health span tracking.",
    icon: <Dna className="w-5 h-5" />
  },
  {
    title: "Cardiac Monitoring",
    description: "Advanced continuous metabolic and cardiovascular diagnostics.",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Neurological Review",
    description: "Cognitive performance and comprehensive neurological assessments.",
    icon: <Brain className="w-5 h-5" />
  },
  {
    title: "Biometric Safeguards",
    description: "Early-warning protocols for proactive health management.",
    icon: <ShieldAlert className="w-5 h-5" />
  }
];

export default function Features({ t }: { t: any }) {
  return (
    <section id="network" className="py-32 lg:py-48 border-t border-stone-100 bg-[#fbfbfb]">
      <div className="corp-container">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <h2 className="font-bold text-4xl lg:text-5xl text-green-950 tracking-tighter leading-tight">{t.title}</h2>
            <p className="mt-6 text-xl text-stone-600 max-w-2xl">{t.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-stone-100">
          {[
            { title: t.p1_title, description: t.p1_desc, icon: <Dna className="w-5 h-5" />, link: "/analysis/core" },
            { title: t.p2_title, description: t.p2_desc, icon: <Cpu className="w-5 h-5" />, link: "/support" },
            { title: t.p3_title, description: t.p3_desc, icon: <Globe className="w-5 h-5" />, link: "/network/global" },
            { title: t.p1_title, description: t.p1_desc, icon: <Brain className="w-5 h-5" />, link: "/analysis/ethics" },
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="group cursor-pointer p-12 border-r border-b border-stone-100 bg-white hover:bg-[#faf9f8] transition-all duration-700">
              <div className="w-12 h-12 border border-stone-100 rounded-sm flex items-center justify-center mb-12 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-700">
                <div className="text-stone-400 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-4 text-green-950 tracking-tight leading-none uppercase">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed text-[15px] font-medium">
                {item.description}
              </p>
              <div className="mt-12 overflow-hidden">
                <div className="h-[1px] w-full bg-stone-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
