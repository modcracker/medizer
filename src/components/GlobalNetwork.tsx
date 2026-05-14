import React from 'react';
import { Network, Globe, Database, Activity, Shield, ArrowUpRight, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const networkFacilities = [
  { 
    city: "Zurich", 
    type: "Clinical Laboratory", 
    coords: "47.3769° N, 8.5417° E",
    focus: "Genomic Sequencing",
    capacity: "420 Patients/Mo",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    size: "lg"
  },
  { 
    city: "Singapore", 
    type: "Precision Diagnostic Center", 
    coords: "1.3521° N, 103.8198° E",
    focus: "AI Diagnostics",
    capacity: "350 Patients/Mo",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800",
    size: "sm"
  },
  { 
    city: "New York", 
    type: "Executive Hub", 
    coords: "40.7128° N, 74.0060° W",
    focus: "Strategic Management",
    capacity: "180 Members",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800",
    size: "sm"
  },
  { 
    city: "Palo Alto", 
    type: "Digital Health Systems", 
    coords: "37.4419° N, 122.1430° W",
    focus: "IoT & Bio-Sensing",
    capacity: "9000 Concurrent Nodes",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
    size: "md"
  },
  { 
    city: "Dubai", 
    type: "Regenerative Medicine Unit", 
    coords: "25.2048° N, 55.2708° E",
    focus: "Stem Cell Therapy",
    capacity: "220 Patients/Mo",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    size: "sm"
  },
];

export default function GlobalNetwork() {
  return (
    <section id="infrastructure" className="py-32 lg:py-48 bg-[#fbfbfb] overflow-hidden border-t border-stone-100">
      <div className="corp-container">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20 lg:mb-32">
          <div className="max-w-2xl">
            <h2 className="font-bold text-4xl lg:text-5xl text-green-950 tracking-tighter mb-8">
              Regional Centers.
            </h2>
            <p className="text-xl text-stone-500 leading-relaxed max-w-[600px]">
              Medizer operates a network of high-security clinical environments. Each facility is equipped with proprietary diagnostic arrays and direct links to Geneva headquarters.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 pb-4">
            <div className="text-sm font-medium text-stone-400">Network status</div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 border border-stone-100 rounded-sm shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-bold text-green-950">Active & Operational</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {networkFacilities.map((facility, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-sm border border-stone-100 bg-white hover:border-green-700/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-stone-200/50 flex flex-col ${
                facility.size === 'lg' ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${facility.size === 'md' ? 'lg:col-span-2' : ''}`}
            >
              <div className="absolute top-6 right-6 z-20">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-sm border border-stone-100 flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-all duration-500 cursor-pointer">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className={`relative overflow-hidden ${facility.size === 'lg' ? 'flex-grow h-full' : 'aspect-square lg:aspect-auto h-[240px]'}`}>
                <img 
                  src={facility.image} 
                  alt={facility.city}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-green-950/20 group-hover:bg-transparent transition-colors duration-1000" />
                
                {/* Visual Label for LG card */}
                {facility.size === 'lg' && (
                  <div className="absolute top-8 left-8">
                    <div className="flex flex-col items-start gap-4">
                      <div className="px-4 py-1 bg-green-700 text-white text-xs font-bold rounded-xs tracking-tight">
                        Primary Facility
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-10 relative">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-stone-400 mb-3">
                      <MapPin className="w-4 h-4 text-green-700" />
                      {facility.coords}
                    </div>
                    <h3 className="text-3xl font-bold text-green-950 tracking-tight mb-2">
                      {facility.city}
                    </h3>
                    <p className="text-stone-500 font-medium">
                      {facility.type}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-stone-100">
                    <div>
                      <div className="text-xs text-stone-400 mb-1">Clinic focus</div>
                      <div className="text-sm font-bold text-green-950">{facility.focus}</div>
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 mb-1">Monthly throughput</div>
                      <div className="text-sm font-bold text-green-950">{facility.capacity}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-green-700/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>
          ))}
          
          {/* Construction Slot */}
          <div className="bg-[#f0f0ee]/50 border-2 border-dashed border-stone-200 rounded-sm p-10 flex flex-col justify-center items-center text-center group cursor-help">
            <div className="w-12 h-12 bg-stone-100 rounded-sm flex items-center justify-center mb-6 group-hover:rotate-45 transition-transform duration-700">
              <Zap className="w-5 h-5 text-stone-400" />
            </div>
            <h3 className="text-sm font-bold text-stone-600 mb-2">Tokyo Facility</h3>
            <p className="text-sm text-stone-400">Opening Q4 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
