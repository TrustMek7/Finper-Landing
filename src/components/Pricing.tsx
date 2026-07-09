import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
const FREE_FEATURES = [
'Balance en tiempo real',
'Categorías de gastos',
'Historial de transacciones',
'Con anuncios (AdMob)'];

const PREMIUM_FEATURES = [
'Todo lo gratuito',
'IA ilimitada',
'Exportar PDF / CSV',
'Sin anuncios',
'Soporte prioritario'];

export function Pricing() {
  return (
    <section id="precios" className="bg-finper-bg py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-finper-primary">
            Precios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-finper-dark tracking-tight">
            Un plan para cada bolsillo
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-8 items-start max-w-3xl mx-auto">
          <FadeInSection>
            <div className="rounded-3xl bg-white border border-finper-dark/10 p-8 h-full">
              <h3 className="text-lg font-bold text-finper-dark">Gratuito</h3>
              <p className="mt-2 text-sm text-finper-dark/50">
                Para empezar a ordenar tus finanzas
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-finper-dark">
                  S/0
                </span>
                <span className="text-sm text-finper-dark/50">/siempre</span>
              </div>
              <a
                href="#descargar"
                className="mt-6 block text-center rounded-full border border-finper-dark/15 py-3 text-sm font-semibold text-finper-dark hover:border-finper-primary hover:text-finper-primary transition-colors">
                
                Empezar gratis
              </a>
              <ul className="mt-8 space-y-3">
                {FREE_FEATURES.map((f) =>
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-finper-dark/70">
                  
                    <Check className="w-4 h-4 text-finper-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <motion.div
              whileHover={{
                y: -6
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative rounded-3xl bg-finper-dark border-2 border-finper-primary p-8 h-full shadow-glow hover:shadow-[0_0_0_1px_rgba(0,168,150,0.6),0_25px_70px_-10px_rgba(2,195,154,0.6)] transition-shadow">
              
              <span className="absolute -top-3 right-8 inline-flex items-center gap-1 rounded-full bg-finper-accent px-3 py-1 text-[11px] font-bold text-finper-dark">
                <Sparkles className="w-3 h-3" />
                Popular
              </span>
              <h3 className="text-lg font-bold text-white">Premium</h3>
              <p className="mt-2 text-sm text-white/50">
                Para quienes quieren ir más allá
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  S/9.90
                </span>
                <span className="text-sm text-white/50">/mes</span>
              </div>
              <a
                href="#descargar"
                className="mt-6 block text-center rounded-full bg-finper-primary py-3 text-sm font-semibold text-white hover:bg-finper-accent transition-colors">
                
                Probar Premium
              </a>
              <ul className="mt-8 space-y-3">
                {PREMIUM_FEATURES.map((f) =>
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/80">
                  
                    <Check className="w-4 h-4 text-finper-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>);

}