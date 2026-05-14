import React, { useEffect } from 'react';
import { Scale, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Board() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfcfb] overflow-x-hidden">
      {/* Page Hero */}
      <section className="relative min-h-[450px] w-full border-b border-stone-100 flex items-center bg-[#fbfcfb]">
        {/* Full-width Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/[0.02] z-0 pointer-events-none" />
        <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1573161158521-1143609e735b?auto=format&fit=crop&q=80&w=1600" 
            alt="Scientific Board"
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="corp-container relative z-20">
          <div className="max-w-[750px] py-20">
            <span className="block mb-6 text-base font-bold text-green-700 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-green-700/30" />
              Governance & Board
            </span>
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter mb-8 italic">Review Board.</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[600px] font-medium">
              Independent oversight consisting of bio-ethicists, legal scholars, and senior medical professionals overseeing institutional compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 corp-container bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-6 h-6 text-green-700" />,
              title: "Board Composition",
              desc: "Seven permanent members and four rotating jurisdictional liaisons ensure a diversity of ethical perspectives and technical expertise."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
              title: "Compliance Audit",
              desc: "Bi-annual audits of facility operations and decentralized storage protocols to ensure absolute adherence to the Medizer Directives."
            },
            {
              icon: <Scale className="w-6 h-6 text-green-700" />,
              title: "Conflict Resolution",
              desc: "A dedicated tribunal for jurisdictional disputes and complex ethical dilemmas arising from advanced biological monitoring."
            }
          ].map((item, i) => (
            <div key={i} className="group p-12 bg-[#fbfcfb] border border-stone-100 hover:border-green-700/30 transition-all duration-700 shadow-sm hover:shadow-2xl">
              <div className="w-12 h-12 bg-white rounded-sm border border-stone-100 flex items-center justify-center mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4 tracking-tighter italic">{item.title}.</h3>
              <p className="text-stone-500 text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-stone-50 border border-stone-100 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h3 className="text-3xl font-bold text-green-950 tracking-tighter mb-4 italic">Transparency Report 2024</h3>
            <p className="text-stone-600 text-lg">Review our latest governance and compliance findings.</p>
          </div>
          <button className="bg-white border border-stone-200 px-10 py-5 rounded-sm font-bold text-stone-800 hover:bg-stone-50 transition-all shadow-sm">
            Download PDF
          </button>
        </div>
      </section>
    </div>
  );
}
