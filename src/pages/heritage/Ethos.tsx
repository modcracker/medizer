import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';

export default function Ethos({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tp = t.philosophy;

  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      {/* High-Impact Hero */}
      <section className="pt-60 pb-32 bg-white border-b border-stone-200 relative overflow-hidden text-center">
        <div className="corp-container relative z-10">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center justify-center gap-6 mb-12">
               <div className="w-12 h-px bg-green-900/30" />
               <span className="text-base font-bold text-green-900">{t.common.institutional}</span>
               <div className="w-12 h-px bg-green-900/30" />
             </div>
              <h1 className="text-8xl lg:text-[14rem] font-bold tracking-tighter leading-[0.75] mb-16 italic text-green-950">
                The <br />
                <span className="text-stone-200 not-italic">Ethos.</span>
             </h1>
             <p className="text-2xl text-stone-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
               {tp.p1}
             </p>
          </div>
        </div>
      </section>

      {/* Unique Narrative Grid */}
      <section className="py-48 bg-white">
        <div className="corp-container">
           <div className="grid lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-5 border-l-4 border-green-900/30 pl-16 py-8 text-left">
                 <h2 className="text-4xl font-bold text-green-950 tracking-tighter mb-8 italic leading-tight">{tp.sovereignty_title}</h2>
                 <p className="text-xl text-stone-500 leading-relaxed font-serif italic mb-12">
                   {tp.p2}
                 </p>
                 <div className="h-px w-24 bg-stone-200" />
              </div>
              
              <div className="lg:col-span-7 space-y-16 text-left">
                 <div className="prose prose-2xl prose-stone font-serif text-stone-800">
                    <p className="text-2xl leading-relaxed italic border-b border-stone-100 pb-12 mb-12">
                       {tp.p1}
                    </p>
                    <p className="text-lg text-stone-600 font-medium font-sans not-italic leading-relaxed">
                       {tp.p2}
                    </p>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-12 pt-24 border-t border-stone-100 italic">
                    <div>
                       <h4 className="text-sm font-bold text-green-900 mb-6 tracking-tight uppercase tracking-[0.2em]">{tp.priority_label}</h4>
                       <p className="text-lg text-stone-500 leading-relaxed font-medium">{tp.priority_desc}</p>
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-green-900 mb-6 tracking-tight uppercase tracking-[0.2em]">{tp.privacy_label}</h4>
                       <p className="text-lg text-stone-500 leading-relaxed font-medium">{tp.privacy_desc}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Visual Quote (Unique to Ethos) */}
      <section className="py-48 bg-white border-t border-stone-200">
        <div className="corp-container max-w-5xl mx-auto text-center space-y-16">
           <BookOpen className="w-16 h-16 text-green-900/10 mx-auto" />
           <h2 className="text-5xl lg:text-[6rem] font-bold tracking-tighter text-green-950 leading-[0.85]">
              {tp.luxury_title} <br /> <span className="italic text-stone-300">{tp.luxury_subtitle}</span>
           </h2>
           <p className="text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
             "{t.heritage.description}"
           </p>
        </div>
      </section>
    </div>
  );
}
