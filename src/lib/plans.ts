export type PlanId = 'free' | 'basic' | 'entrepreneur';

export const PLAN_LABELS: Record<PlanId, string> = {
  free: 'Free',
  basic: 'Básico',
  entrepreneur: 'Emprendedor',
};

export const PLAN_SELECT_OPTIONS: Array<{
  id: PlanId;
  label: string;
}> = [
  {
    id: 'free',
    label: 'Free - S/ 0',
  },
  {
    id: 'basic',
    label: 'Básico - S/ 9.90 / mes',
  },
  {
    id: 'entrepreneur',
    label: 'Emprendedor - S/ 29.90 / mes',
  },
];

export function getPlanLabel(planId: PlanId) {
  return PLAN_SELECT_OPTIONS.find((plan) => plan.id === planId)?.label ?? PLAN_LABELS[planId];
}
