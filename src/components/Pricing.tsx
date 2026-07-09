import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { trackEvent } from '../lib/analytics';
import type { PlanId } from '../lib/plans';

type PricingPlan = {
  id: PlanId;
  name: string;
  price: string;
  cadence?: string;
  purpose: string;
  justification: string;
  cta: string;
  recommended?: boolean;
  features: string[];
};

const PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 'S/ 0',
    purpose:
      'Validar adopción inicial y permitir que usuarios con bajos ingresos prueben la app sin barrera económica.',
    justification:
      'Ideal para comprobar uso frecuente antes de pedir pago o ampliar funcionalidades.',
    cta: 'Probar gratis',
    features: [
      'Registro básico de ingresos y gastos',
      'Funcionamiento offline',
      'Categorías principales',
      'Resumen mensual básico',
      'Máximo 1 meta de ahorro',
      'Datos guardados localmente',
    ],
  },
  {
    id: 'basic',
    name: 'Básico',
    price: 'S/ 9.90',
    cadence: '/ mes',
    purpose:
      'Pensado para usuarios individuales que ya quieren mayor control financiero, pero necesitan un precio accesible.',
    justification:
      'S/ 9.90 es un monto bajo y razonable para trabajadores independientes o personas con ingresos variables, equivalente a un gasto cotidiano pequeño.',
    cta: 'Elegir Básico',
    recommended: true,
    features: [
      'Todo lo del plan Free',
      'Metas de ahorro ilimitadas',
      'Alertas de presupuesto por categoría',
      'Reportes mensuales más detallados',
      'Exportación de resumen en PDF',
      'Copia de seguridad o sincronización opcional cuando haya conexión',
    ],
  },
  {
    id: 'entrepreneur',
    name: 'Emprendedor',
    price: 'S/ 29.90',
    cadence: '/ mes',
    purpose:
      'Pensado para pequeños emprendedores que necesitan separar finanzas personales y del negocio.',
    justification:
      'S/ 29.90 agrega valor operativo para negocios pequeños: separación de cuentas, reportes más completos y control del emprendimiento.',
    cta: 'Elegir Emprendedor',
    features: [
      'Todo lo del plan Básico',
      'Separación entre finanzas personales y negocio',
      'Múltiples perfiles o cajas',
      'Reportes por negocio/categoría',
      'Exportación avanzada',
      'Historial ampliado',
      'Soporte prioritario o acompañamiento inicial',
    ],
  },
];

interface PricingProps {
  selectedPlan: PlanId;
  onSelectPlan: (plan: PlanId) => void;
}

export function Pricing({ selectedPlan, onSelectPlan }: PricingProps) {
  const handlePlanClick = (plan: PricingPlan) => {
    onSelectPlan(plan.id);
    trackEvent('pricing_click', {
      plan_id: plan.id,
      plan_name: plan.name,
      price: plan.price,
    });
    trackEvent('plan_selected', {
      plan_id: plan.id,
      plan_name: plan.name,
      price: plan.price,
      source: 'pricing_card',
    });
    trackEvent('cta_click', {
      location: 'pricing',
      label: plan.cta,
      plan_id: plan.id,
    });
  };

  return (
    <section id="precios" className="bg-finper-bg py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-finper-primary">
            Precios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-finper-dark tracking-tight">
            Planes diseñados para diferentes necesidades
          </h2>
          <p className="mt-4 text-finper-dark/60 leading-relaxed">
            Los planes presentan opciones referenciales según el nivel de servicio requerido por cada usuario.
          </p>
        </FadeInSection>

        <div className="grid lg:grid-cols-3 gap-7 items-stretch">
          {PLANS.map((plan, index) => {
            const isRecommended = plan.recommended;
            const isSelected = selectedPlan === plan.id;
            return (
              <FadeInSection key={plan.id} delay={index * 0.08}>
                <motion.article
                  whileHover={{
                    y: -6
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`relative h-full rounded-3xl p-7 sm:p-8 transition-shadow ${isRecommended
                      ? 'bg-finper-dark border-2 border-finper-primary shadow-glow hover:shadow-[0_0_0_1px_rgba(0,168,150,0.6),0_25px_70px_-10px_rgba(2,195,154,0.6)]'
                      : 'bg-white border border-finper-dark/10 shadow-sm hover:shadow-xl hover:shadow-finper-primary/10'
                    } ${isSelected && !isRecommended ? 'ring-2 ring-finper-primary/30' : ''}`}>
                  {isRecommended &&
                    <span className="absolute -top-3 right-8 inline-flex items-center gap-1 rounded-full bg-finper-accent px-3 py-1 text-[11px] font-bold text-finper-dark">
                      <Sparkles className="w-3 h-3" />
                      Recomendado
                    </span>
                  }

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-xl font-extrabold ${isRecommended ? 'text-white' : 'text-finper-dark'}`}>
                        {plan.name}
                      </h3>
                      <p className={`mt-2 text-xs font-semibold uppercase tracking-widest ${isRecommended ? 'text-finper-accent' : 'text-finper-primary'}`}>
                        Plan mensual
                      </p>
                    </div>
                    {isSelected &&
                      <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${isRecommended ? 'bg-white/10 text-white' : 'bg-finper-primary/10 text-finper-primary'}`}>
                        Seleccionado
                      </span>
                    }
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold tracking-tight ${isRecommended ? 'text-white' : 'text-finper-dark'}`}>
                      {plan.price}
                    </span>
                    {plan.cadence &&
                      <span className={`text-sm ${isRecommended ? 'text-white/55' : 'text-finper-dark/50'}`}>
                        {plan.cadence}
                      </span>
                    }
                  </div>

                  {/* <div className={`mt-6 space-y-4 text-sm leading-relaxed ${isRecommended ? 'text-white/70' : 'text-finper-dark/65'}`}>
                    <p>
                      <span className={`font-bold ${isRecommended ? 'text-white' : 'text-finper-dark'}`}>Propósito: </span>
                      {plan.purpose}
                    </p>
                    <p>
                      <span className={`font-bold ${isRecommended ? 'text-white' : 'text-finper-dark'}`}>Justificación: </span>
                      {plan.justification}
                    </p>
                  </div> */}

                  <a
                    href="#descargar"
                    onClick={() => handlePlanClick(plan)}
                    className={`mt-7 block text-center rounded-full py-3 text-sm font-semibold transition-colors ${isRecommended
                        ? 'bg-finper-primary text-white hover:bg-finper-accent'
                        : 'border border-finper-dark/15 text-finper-dark hover:border-finper-primary hover:text-finper-primary'
                      }`}>
                    {plan.cta}
                  </a>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) =>
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${isRecommended ? 'text-white/80' : 'text-finper-dark/70'}`}>
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isRecommended ? 'text-finper-accent' : 'text-finper-primary'}`} />
                        {feature}
                      </li>
                    )}
                  </ul>
                </motion.article>
              </FadeInSection>
            );
          })}
        </div>

      </div>
    </section>);

}
