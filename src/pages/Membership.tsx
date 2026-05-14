import React, { useEffect } from 'react';
import Application from '../components/Application';

export default function Membership({ t }: { t: any }) {
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
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600" 
            alt="Medical Professional"
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="corp-container relative z-20">
          <div className="max-w-[750px] py-20">
            <span className="block mb-6 text-[13px] font-semibold text-green-700 tracking-wider inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-green-700/30" />
              SYSTEMS / ACCESS
            </span>
            <h1 className="font-bold text-6xl lg:text-8xl text-green-950 tracking-tighter mb-8 italic">Membership.</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[500px]">
              Initiate your biological protocol. Access to the Medizer network is strictly managed to ensure institutional integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <Application t={t.application} />
      </section>
    </div>
  );
}
