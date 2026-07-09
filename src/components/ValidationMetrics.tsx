import { Activity, Clock3, MousePointerClick, Route, Smartphone, Users } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const METRICS = [
  {
    icon: Activity,
    title: 'Visitas totales',
    description: 'Volumen de llegada a la landing durante campañas y pruebas.',
  },
  {
    icon: Users,
    title: 'Usuarios únicos',
    description: 'Personas reales alcanzadas, sin contar visitas repetidas.',
  },
  {
    icon: MousePointerClick,
    title: 'Clics en CTA',
    description: 'Interes por probar FinPer o unirse a la lista de espera.',
  },
  {
    icon: Users,
    title: 'Registros en lista de espera',
    description: 'Senal directa de demanda para priorizar el MVP.',
  },
  {
    icon: Route,
    title: 'Tasa de conversion',
    description: 'Relacion entre visitas, clics y registros completados.',
  },
  {
    icon: Route,
    title: 'Fuente de tráfico',
    description: 'Campañas, redes, referidos o búsquedas que generan interés.',
  },
  {
    icon: Smartphone,
    title: 'Dispositivo usado',
    description: 'Validación de experiencia móvil para el público objetivo.',
  },
  {
    icon: Clock3,
    title: 'Tiempo en página',
    description: 'Minutos de atencion antes de decidir registrarse o salir.',
  },
  {
    icon: Activity,
    title: 'Profundidad de scroll',
    description: 'Secciones que realmente alcanza a revisar cada visitante.',
  },
];

export function ValidationMetrics() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeInSection className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-xs font-semibold uppercase tracking-widest text-finper-primary">
              Validación de la idea
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-finper-dark tracking-tight">
              Medir interés real antes de escalar el MVP
            </h2>
            <p className="mt-4 text-finper-dark/60 leading-relaxed">
              La landing funciona como experimento de mercado: mide demanda, intención de pago y calidad del tráfico antes de invertir más en producto o adquisición.
            </p>
            <div className="mt-7 rounded-2xl border border-finper-primary/15 bg-finper-bg px-5 py-4 text-sm text-finper-dark/70">
              Los eventos quedan listos para conectarse a Google Analytics, Vercel Analytics, Umami, Plausible, Supabase, Tally o Google Forms.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {METRICS.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <FadeInSection key={metric.title} delay={index * 0.04} y={18}>
                  <article className="h-full rounded-2xl border border-finper-dark/10 bg-finper-bg/70 p-5 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-finper-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-finper-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-finper-dark">{metric.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-finper-dark/60">
                      {metric.description}
                    </p>
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
