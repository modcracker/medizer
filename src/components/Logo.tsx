import React from 'react';
import { Shield, Plus } from 'lucide-react';

interface LogoProps {
  className?: string;
  textColor?: string;
  iconSize?: number;
}

export default function Logo({ className = "", textColor = "text-green-950" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        <Shield className="w-6 h-6 text-green-700 fill-green-700/5 group-hover:fill-green-700/10 transition-colors" strokeWidth={1.5} />
        <Plus className="absolute text-green-700 w-3 h-3 group-hover:scale-110 transition-transform" strokeWidth={3} />
      </div>
      <span className={`font-bold ${textColor} text-[22px] tracking-tighter leading-none`}>Medizer.</span>
    </div>
  );
}
