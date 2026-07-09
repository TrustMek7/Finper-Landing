import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { FadeInSection } from './FadeInSection';

const SHOWCASE = [
{
  src: '/Saldo.jpeg',
  label: 'Saldo',
  title: 'Tu saldo, siempre al día',
  description:
  'Cada movimiento que registras actualiza tu saldo al instante, sin cálculos a mano.'
},
{
  src: '/Transacciones.jpeg',
  label: 'Transacciones',
  title: 'Registra y filtra tus movimientos',
  description:
  'Todo lo que ganas o gastas queda ordenado por fecha y categoría, fácil de encontrar.'
},
{
  src: '/Analisis.jpeg',
  label: 'Análisis',
  title: 'Análisis financiero claro',
  description:
  'Gráficos diarios, semanales, mensuales y anuales para saber en qué se te va la plata.'
},
{
  src: '/Categorias.jpeg',
  label: 'Categorías',
  title: 'Categorías pensadas para ti',
  description:
  'Comida, transporte, mercado, mototaxi, ahorros y más, adaptadas al día a día peruano.'
},
{
  src: '/Login.jpeg',
  label: 'Login',
  title: 'Accede fácil y seguro',
  description:
  'Inicia sesión con tu correo, con Google o con tu huella dactilar en segundos.'
}];

export function Mockups() {
  return (
    <section className="bg-finper-dark py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-finper-accent">
            La app
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diseñada para el día a día
          </h2>
        </FadeInSection>

        <div className="flex flex-col gap-24 sm:gap-28">
          {SHOWCASE.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.label}
                className={`flex flex-col ${reversed ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center gap-10 sm:gap-16`}>

                <FadeInSection className="shrink-0">
                  <PhoneMockup
                    src={item.src}
                    alt={`Pantalla de ${item.label}`} />

                </FadeInSection>

                <FadeInSection
                  delay={0.1}
                  className="max-w-sm text-center sm:text-left">

                  <span className="text-xs font-semibold uppercase tracking-widest text-finper-accent">
                    {item.label}
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </FadeInSection>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
