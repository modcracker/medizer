import React, { useEffect } from 'react';
import { FileText, Lock, Globe } from 'lucide-react';

export default function Rights({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tr = t.rights;

  return (
    <div className="bg-[#fbfcfb] overflow-x-hidden text-left">
      {/* Page Hero */}
      <section className="relative min-h-[450px] w-full border-b border-stone-100 flex items-center bg-[#fbfcfb]">
        {/* Full-width Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/[0.02] z-0 pointer-events-none" />

        <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfcfb] to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
            alt="Data Security"
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="corp-container relative z-20">
          <div className="max-w-[750px] py-20 text-center md:text-left">
            <span className="block mb-6 text-base font-bold text-green-700 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-green-700/30" />
              {tr.subtitle}
            </span>
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter mb-8 italic">{tr.title}</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[600px] mx-auto md:mx-0 font-medium">
              {tr.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 corp-container">
        <div className="bg-white p-12 lg:p-16 border border-stone-100 shadow-xl">
        <div className="space-y-12">
          {tr.principles.map((principle: any, i: number) => (
            <div key={principle.title} className="flex gap-8 items-start">
              <Lock className="w-6 h-6 text-green-700 shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-green-950 tracking-tight mb-2">{principle.title}.</h3>
                <p className="text-lg text-stone-500 font-medium leading-relaxed">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 p-12 lg:p-16 border border-stone-100 bg-[#fbfcfb]">
         <div className="flex gap-8 items-start">
            <FileText className="w-6 h-6 text-green-700 shrink-0 mt-1" />
            <div className="space-y-6">
               <h3 className="text-3xl font-bold text-green-950 tracking-tighter italic">{tr.terms_title}</h3>
               <p className="text-lg text-stone-500 font-medium leading-relaxed max-w-3xl">
                  {tr.terms_desc}
               </p>
            </div>
         </div>
      </div>
    </section>
  </div>
);
}
