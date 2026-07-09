import React from 'react';
import { motion } from 'framer-motion';
import { Mic, BarChart3, Tag, Fingerprint } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
const FEATURES = [
{
  icon: Mic,
  title: 'Voz con Gemini AI',
  description:
  'Di "Gasté 50 soles en comida" y la IA lo registra y categoriza solo.'
},
{
  icon: BarChart3,
  title: 'Análisis financiero',
  description:
  'Gráficos diarios, semanales y mensuales de tus ingresos y gastos.'
},
{
  icon: Tag,
  title: 'Categorías peruanas',
  description: 'Comida, transporte, mercado, mototaxi, ahorros y más.'
},
{
  icon: Fingerprint,
  title: 'Biometría',
  description: 'Accede con tu huella dactilar. Sin contraseñas.'
}];

export function Features() {
  return (
    <section id="caracteristicas" className="bg-finper-bg py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-finper-primary">
            Características
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-finper-dark tracking-tight">
            Todo lo que necesitas, en un solo lugar
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeInSection key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -4
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="h-full rounded-2xl bg-white border border-finper-dark/5 border-l-4 border-l-finper-primary p-7 shadow-sm hover:shadow-xl hover:shadow-finper-primary/10 transition-shadow">
                  
                  <div className="w-11 h-11 rounded-xl bg-finper-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-finper-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-finper-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-finper-dark/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeInSection>);

          })}
        </div>
      </div>
    </section>);

}