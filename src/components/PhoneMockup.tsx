import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}
export function PhoneMockup({ src, alt, className = '' }: PhoneMockupProps) {
  const [errored, setErrored] = useState(false);
  return (
    <div
      className={`relative w-[220px] h-[440px] sm:w-[260px] sm:h-[520px] rounded-[2.25rem] border-[6px] border-finper-mid/60 bg-finper-dark overflow-hidden shadow-2xl ${className}`}>
      
      {/* notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-finper-dark rounded-b-2xl z-10" />
      {!errored ?
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className="w-full h-full object-cover" /> :


      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-finper-mid/30 to-finper-dark text-finper-accent">
          <Smartphone className="w-10 h-10" strokeWidth={1.5} />
          <span className="text-xs text-white/50 px-6 text-center">{alt}</span>
        </div>
      }
    </div>);

}