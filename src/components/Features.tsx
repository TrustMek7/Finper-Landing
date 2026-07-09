import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BellRing, Goal, Mic, Tag, WifiOff } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { trackEvent } from '../lib/analytics';

const FEATURES = [
{
  icon: Mic,
  title: 'Registro rapido',
  description:
  'Anota ingresos y gastos por voz o texto en pocos segundos.'
},
{
  icon: WifiOff,
  title: 'Funciona offline',
  description:
  'Registra movimientos aún sin conexión y sincroniza cuando vuelvas a tener internet.'
},
{
  icon: Tag,
  title: 'Categorias peruanas',
  description: 'Mercado, mototaxi, ventas, comida, transporte y ahorro diario.'
},
{
  icon: Goal,
  title: 'Metas de ahorro',
  description: 'Define objetivos simples para separar dinero y avanzar poco a poco.'
},
{
  icon: BellRing,
  title: 'Alertas de presupuesto',
  description: 'Recibe avisos cuando una categoría se acerca al límite que elegiste.'
},
{
  icon: BarChart3,
  title: 'Reportes simples',
  description: 'Resumen mensual claro para saber cuanto entra, cuanto sale y que ajustar.'
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
            Funcionalidades principales para controlar tu dinero
          </h2>
          <p className="mt-4 text-finper-dark/60 leading-relaxed">
            Lo esencial para personas con ingresos variables: rapido, offline y
            adaptado al dia a dia peruano.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeInSection key={feature.title} delay={i * 0.08}>
                <motion.button
                  type="button"
                  onClick={() =>
                    trackEvent('feature_interest', {
                      feature: feature.title,
                      location: 'features_grid',
                    })
                  }
                  whileHover={{
                    scale: 1.02,
                    y: -4
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="h-full w-full text-left rounded-2xl bg-white border border-finper-dark/5 border-l-4 border-l-finper-primary p-7 shadow-sm hover:shadow-xl hover:shadow-finper-primary/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-finper-primary/30">
                  
                  <div className="w-11 h-11 rounded-xl bg-finper-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-finper-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-finper-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-finper-dark/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.button>
              </FadeInSection>);

          })}
        </div>
      </div>
    </section>);

}
