import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
export function CTA() {
  return (
    <section
      id="descargar"
      className="relative bg-finper-dark py-24 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-finper-primary/10 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Listo para ordenar tus finanzas?
          </h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto">
            Descarga FinPer hoy y empieza a controlar tu dinero hablando, así de
            fácil.
          </p>
          <a
            href="/finper.apk"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-finper-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-finper-primary/25 hover:bg-finper-accent hover:-translate-y-0.5 transition-all">
            
            <Download className="w-4 h-4" />
            Descargar APK
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
            <Smartphone className="w-4 h-4" />
            Disponible para Android
          </div>
        </FadeInSection>
      </div>
    </section>);

}