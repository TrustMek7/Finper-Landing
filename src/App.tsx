import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Mockups } from './components/Mockups';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="w-full min-h-full bg-finper-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Mockups />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>);

}