import React from 'react';
import { Users, WifiOff, Smartphone } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { AnimatedCounter } from './AnimatedCounter';
const STATS = [
{
  icon: Users,
  value: 73,
  suffix: '%',
  decimals: 0,
  label: 'fuerza laboral peruana es informal',
  source: 'INEI 2022'
},
{
  icon: Smartphone,
  value: 12,
  suffix: 'M+',
  decimals: 0,
  label: 'trabajadores sin herramienta financiera digital',
  source: ''
},
{
  icon: WifiOff,
  value: 58.4,
  suffix: '%',
  decimals: 1,
  label: 'penetración de internet rural en Perú',
  source: ''
}];

export function Stats() {
  return (
    <section className="bg-finper-dark py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeInSection className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            El problema es real
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            Millones de peruanos trabajan sin acceso a herramientas financieras
            hechas para ellos.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-3 gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeInSection key={stat.label} delay={i * 0.12}>
                <div className="text-center rounded-2xl border border-white/10 bg-white/5 px-6 py-10 h-full">
                  <div className="mx-auto mb-5 w-12 h-12 rounded-full bg-finper-primary/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-finper-accent" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals} />
                    
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {stat.label}
                  </p>
                  {stat.source &&
                  <p className="mt-2 text-xs text-white/30">{stat.source}</p>
                  }
                </div>
              </FadeInSection>);

          })}
        </div>
      </div>
    </section>);

}