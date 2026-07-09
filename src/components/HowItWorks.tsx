import React from 'react';
import { Download, Mic2, LineChart } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
const STEPS = [
{
  icon: Download,
  title: 'Descarga FinPer',
  description: 'Instala la app en tu celular Android en menos de un minuto.'
},
{
  icon: Mic2,
  title: 'Habla o escribe tu gasto',
  description: 'Cuéntale a la IA lo que gastaste o ganaste, así de simple.'
},
{
  icon: LineChart,
  title: 'Ve tu situación financiera al instante',
  description:
  'FinPer organiza y muestra todo en gráficos fáciles de entender.'
}];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-finper-bg py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-finper-primary">
            Cómo funciona
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-finper-dark tracking-tight">
            Tres pasos y listo
          </h2>
        </FadeInSection>

        <div className="relative grid sm:grid-cols-3 gap-10">
          <div className="hidden sm:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-finper-primary/20" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeInSection
                key={step.title}
                delay={i * 0.15}
                className="relative flex flex-col items-center text-center">
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-finper-primary text-white flex items-center justify-center shadow-lg shadow-finper-primary/25">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="mt-5 text-xs font-bold text-finper-primary">
                  PASO {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold text-finper-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-finper-dark/60 max-w-[220px]">
                  {step.description}
                </p>
              </FadeInSection>);

          })}
        </div>
      </div>
    </section>);

}