import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ t }: { t: any }) {
  return (
    <>
      <section className="relative min-h-[600px] w-full overflow-hidden border-b border-stone-100 bg-[#fbfcfb] flex items-center justify-center">
        {/* Full-width Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/[0.02] z-0 pointer-events-none" />

        {/* Visual Layer */}
        <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfcfb] via-[#fbfcfb]/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" 
            alt="Medical Consultation"
            className="w-full h-full object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="corp-container relative z-20">
          <div className="max-w-[700px] py-24">
            <span className="text-sm font-bold text-green-700 uppercase tracking-widest block mb-6">
              {t.established}
            </span>
            <h1 className="font-bold mb-8 leading-[1.05] tracking-tighter text-6xl lg:text-8xl text-green-950">
              {t.title}
            </h1>
            <p className="mb-12 text-xl text-stone-600 leading-relaxed max-w-[550px]">
              {t.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/membership" className="bg-green-700 px-10 py-5 rounded-sm text-[16px] font-bold text-white hover:bg-green-600 transition-all shadow-xl shadow-green-950/10 active:scale-[0.97]">
                {t.consultation}
              </Link>
              <Link to="/network" className="bg-white border border-stone-200 px-10 py-5 rounded-sm text-[16px] font-medium hover:bg-stone-50 transition-all active:scale-[0.97] text-stone-600">
                {t.overview}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section moved below the fold */}
      <div className="bg-white py-12 border-b border-stone-100">
        <div className="corp-container h-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <Stat label="Current Status" value="Optimal" />
            <Stat label="Network Assets" value="50M USD" />
            <Stat label="Structure" value="Independent" />
            <Stat label="Method" value="Private" />
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-stone-400 mb-1">{label}</span>
      <span className="text-[16px] font-medium text-green-950">{value}</span>
    </div>
  );
}
