import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
/* import { ValidationMetrics } from './components/ValidationMetrics'; */
import { Mockups } from './components/Mockups';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { initEngagementTracking } from './lib/analytics';
import type { PlanId } from './lib/plans';

export function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('basic');

  useEffect(() => initEngagementTracking(), []);

  return (
    <div className="w-full min-h-full bg-finper-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        {/* <ValidationMetrics /> */}
        <Features />
        <Mockups />
        <HowItWorks />
        <Pricing selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
        <CTA selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
      </main>
      <Footer />
      <Analytics />
    </div>);

}
