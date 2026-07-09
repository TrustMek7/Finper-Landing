import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ArrowRight, CreditCard, LockKeyhole, ShieldCheck } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { trackEvent } from '../lib/analytics';
import { getPlanLabel, PLAN_SELECT_OPTIONS } from '../lib/plans';
import type { PlanId } from '../lib/plans';

type UserType = 'independent' | 'entrepreneur' | 'student' | 'other';

type WaitlistLead = {
  name: string;
  contact: string;
  userType: UserType;
  planInterest: PlanId;
};

interface CTAProps {
  selectedPlan: PlanId;
  onPlanChange: (plan: PlanId) => void;
}

const USER_TYPES: Array<{ value: UserType; label: string }> = [
  { value: 'independent', label: 'Trabajador independiente' },
  { value: 'entrepreneur', label: 'Emprendedor' },
  { value: 'student', label: 'Estudiante' },
  { value: 'other', label: 'Otro' },
];

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: 'Sin acceso bancario',
    description: 'Para el MVP, FinPer no necesita conectarse a cuentas bancarias.',
  },
  {
    icon: LockKeyhole,
    title: 'Datos básicos',
    description: 'La lista de espera solo pide nombre y un dato de contacto.',
  },
  {
    icon: CreditCard,
    title: 'Sin pagos reales',
    description: 'Los planes validan interés y disposición de pago, no cobran desde la landing.',
  },
];

function inferContactChannel(contact: string) {
  return contact.includes('@') ? 'email' : 'phone_or_other';
}

async function submitWaitlistLead(lead: WaitlistLead) {
  // Conectar aquí con API propia, Google Forms, Tally, Supabase o similar.
  if (import.meta.env.DEV) {
    console.info('[FinPer waitlist prototype]', lead);
  }
}

export function CTA({ selectedPlan, onPlanChange }: CTAProps) {
  const [form, setForm] = useState<WaitlistLead>({
    name: '',
    contact: '',
    userType: 'independent',
    planInterest: selectedPlan,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm((current) => ({
      ...current,
      planInterest: selectedPlan,
    }));
  }, [selectedPlan]);

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSubmitted(false);
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handlePlanChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const planInterest = event.target.value as PlanId;
    setSubmitted(false);
    setForm((current) => ({
      ...current,
      planInterest,
    }));
    onPlanChange(planInterest);
    trackEvent('plan_selected', {
      plan_id: planInterest,
      plan_label: getPlanLabel(planInterest),
      source: 'waitlist_form',
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitWaitlistLead(form);
    trackEvent('waitlist_submit', {
      user_type: form.userType,
      plan_id: form.planInterest,
      plan_label: getPlanLabel(form.planInterest),
      contact_channel: inferContactChannel(form.contact),
    });
    trackEvent('cta_click', {
      location: 'waitlist_form',
      label: 'Unirme a la lista de espera',
      plan_id: form.planInterest,
    });
    setSubmitted(true);
  };

  return (
    <section
      id="descargar"
      className="relative bg-finper-dark py-24 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-finper-primary/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <FadeInSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-finper-accent">
              Lista de espera
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Quiero probar FinPer
            </h2>
            <p className="mt-4 text-white/60 max-w-lg leading-relaxed">
              Deja tus datos y el plan que más te interesa. Esto ayuda a validar
              demanda real, priorizar funcionalidades y medir disposición de pago
              antes de escalar el MVP.
            </p>

            <div className="mt-8 grid gap-4">
              {TRUST_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-finper-primary/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-finper-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{point.title}</h3>
                        <p className="mt-1 text-sm text-white/55 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-finper-primary/10">
              <div>
                <h3 className="text-xl font-extrabold text-finper-dark">
                  Unirme a la lista de espera
                </h3>
                <p className="mt-2 text-sm text-finper-dark/60">
                  Prototipo funcional de frontend. Aún no envía datos a un backend.
                </p>
              </div>

              <div className="mt-7 grid gap-5">
                <label className="grid gap-2 text-sm font-semibold text-finper-dark">
                  Nombre
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleFieldChange}
                    placeholder="Tu nombre"
                    className="rounded-2xl border border-finper-dark/15 px-4 py-3 text-sm font-normal text-finper-dark outline-none transition focus:border-finper-primary focus:ring-2 focus:ring-finper-primary/15" />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-finper-dark">
                  Correo o celular
                  <input
                    required
                    name="contact"
                    value={form.contact}
                    onChange={handleFieldChange}
                    placeholder="correo@ejemplo.com o 999 999 999"
                    className="rounded-2xl border border-finper-dark/15 px-4 py-3 text-sm font-normal text-finper-dark outline-none transition focus:border-finper-primary focus:ring-2 focus:ring-finper-primary/15" />
                </label>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="grid gap-2 text-sm font-semibold text-finper-dark">
                    Tipo de usuario
                    <select
                      required
                      name="userType"
                      value={form.userType}
                      onChange={handleFieldChange}
                      className="rounded-2xl border border-finper-dark/15 px-4 py-3 text-sm font-normal text-finper-dark outline-none transition focus:border-finper-primary focus:ring-2 focus:ring-finper-primary/15">
                      {USER_TYPES.map((type) =>
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                      )}
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-finper-dark">
                    Plan de interés
                    <select
                      required
                      name="planInterest"
                      value={form.planInterest}
                      onChange={handlePlanChange}
                      className="rounded-2xl border border-finper-dark/15 px-4 py-3 text-sm font-normal text-finper-dark outline-none transition focus:border-finper-primary focus:ring-2 focus:ring-finper-primary/15">
                      {PLAN_SELECT_OPTIONS.map((plan) =>
                      <option key={plan.id} value={plan.id}>
                        {plan.label}
                      </option>
                      )}
                    </select>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-finper-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-finper-primary/25 hover:bg-finper-accent hover:-translate-y-0.5 transition-all">
                Unirme a la lista de espera
                <ArrowRight className="w-4 h-4" />
              </button>

              {submitted &&
              <p className="mt-4 rounded-2xl bg-finper-primary/10 px-4 py-3 text-sm font-semibold text-finper-primary">
                Interés registrado en el prototipo. Plan seleccionado: {getPlanLabel(form.planInterest)}.
              </p>
              }

            </form>
          </FadeInSection>
        </div>
      </div>
    </section>);

}
