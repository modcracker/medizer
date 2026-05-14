import React, { useEffect } from 'react';
import { FileText, Lock, Globe } from 'lucide-react';

export default function Rights() {
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
              Privacy & Data Rights
            </span>
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter mb-8 italic">Data Rights.</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[600px] mx-auto md:mx-0 font-medium">
              Guaranteeing the highest level of biological data autonomy. Your genetic footprint is yours alone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 corp-container">
        <div className="bg-white p-12 lg:p-16 border border-stone-100 shadow-xl">
        <div className="space-y-12">
          <div className="flex gap-8 items-start">
            <Lock className="w-6 h-6 text-green-700 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-green-950 tracking-tight mb-2">Zero-Visibility Storage.</h3>
              <p className="text-lg text-stone-500 font-medium leading-relaxed">All member data is stored using asymmetric encryption. Medizer administrators cannot access raw health records without explicit member-side decryption.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <Globe className="w-6 h-6 text-green-700 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-green-950 tracking-tight mb-2">Jurisdictional Portability.</h3>
              <p className="text-lg text-stone-500 font-medium leading-relaxed">Members can migrate their biological data between HQ centers (Geneva, New York, Singapore) with zero data loss and full jurisdictional compliance.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <FileText className="w-6 h-6 text-green-700 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-green-950 tracking-tight mb-2">The Right to Erasure.</h3>
              <p className="text-lg text-stone-500 font-medium leading-relaxed">Total institutional privacy. Upon membership termination, all biological records are permanently purged from all primary and redundant archives following a 72-hour cooling period.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
