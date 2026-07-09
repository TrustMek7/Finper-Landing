import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent } from
'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const NAV_LINKS = [
{
  label: 'Características',
  href: '#caracteristicas'
},
{
  label: 'Precios',
  href: '#precios'
},
{
  label: 'Lista de espera',
  href: '#descargar'
}];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12);
    if (latest < 80) {
      setHidden(false);
    } else if (latest > lastY + 4) {
      setHidden(true);
    } else if (latest < lastY - 4) {
      setHidden(false);
    }
    setLastY(latest);
  });
  useEffect(() => {
    if (mobileOpen) setHidden(false);
  }, [mobileOpen]);

  const handleWaitlistClick = (location: string) => {
    trackEvent('cta_click', {
      location,
      label: 'Unirme a la lista de espera',
    });
    trackEvent('download_click', {
      location,
      action: 'join_waitlist',
    });
  };

  return (
    <motion.header
      animate={{
        y: hidden ? '-100%' : '0%'
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/Logo.jpeg"
              alt="Logo de FinPer"
              className="w-full h-full object-contain" />
          </div>
          <span className="font-extrabold text-lg text-finper-dark tracking-tight">
            FinPer
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(0, 2).map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-finper-dark/70 hover:text-finper-primary transition-colors">
            
              {link.label}
            </a>
          )}
          <a
            href="#descargar"
            onClick={() => handleWaitlistClick('navbar_desktop')}
            className="inline-flex items-center gap-2 rounded-full bg-finper-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-finper-accent transition-colors">
            
            <ArrowRight className="w-4 h-4" />
            Probar
          </a>
        </div>

        <button
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-finper-dark">
          
          {mobileOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-finper-primary/10 overflow-hidden">
          
            <div className="flex flex-col px-5 py-4 gap-4">
              {NAV_LINKS.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                if (link.href === '#descargar') handleWaitlistClick('navbar_mobile');
                setMobileOpen(false);
              }}
              className="text-sm font-medium text-finper-dark/80">
              
                  {link.label}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}
