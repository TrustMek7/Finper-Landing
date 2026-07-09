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
  label: 'El problema',
  href: '#problema'
},
{
  label: 'Características',
  href: '#caracteristicas'
},
{
  label: 'La app',
  href: '#app'
},
{
  label: 'Cómo funciona',
  href: '#como-funciona'
},
{
  label: 'Precios',
  href: '#precios'
}];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);
  const elevated = scrolled || mobileOpen;
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

  // En móvil, cerramos el menú y desplazamos manualmente después del cierre
  // para evitar que la animación interrumpa el toque.
  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      }
    }, 0);
  };

  return (
    <motion.header
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4 pointer-events-none">

      <div className="pointer-events-auto relative max-w-6xl mx-auto">
        <div
          className={`overflow-hidden rounded-full border transition-colors duration-300 ${elevated ? 'border-white/70 bg-white/80 shadow-lg shadow-finper-dark/10 backdrop-blur-xl' : 'border-white/20 bg-white/10 backdrop-blur-md'}`}>
          <nav className="relative flex items-center justify-between px-5 sm:px-8 h-16">
            <a href="#top" className="flex items-center gap-2 shrink-0">
              <div className="w-11 h-11 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/Logo.jpeg"
                  alt="Logo de FinPer"
                  className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-finper-dark">
                FinPer
              </span>
            </a>

            <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) =>
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-finper-dark/70 transition-colors hover:text-finper-accent">

                  {link.label}
                </a>
              )}
            </div>

            <a
              href="#descargar"
              onClick={() => handleWaitlistClick('navbar_desktop')}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-finper-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-finper-accent transition-colors shrink-0">

              <ArrowRight className="w-4 h-4" />
              Probar
            </a>

            <button
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setMobileOpen((o) => !o)}
              className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${mobileOpen ? 'text-white' : 'text-finper-dark'}`}>

              {mobileOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </nav>
        </div>

        <AnimatePresence>
          {mobileOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              height: 0
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              y: -8,
              height: 0
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="md:hidden mt-3 overflow-hidden rounded-3xl border border-white/15 bg-finper-dark/95 px-5 py-4 shadow-xl shadow-finper-dark/20 backdrop-blur-lg">

              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) =>
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNav(link.href);
                }}
                className="text-sm font-medium text-white/80 hover:text-finper-accent transition-colors">

                    {link.label}
                  </a>
              )}
                <a
                href="#descargar"
                onClick={(e) => {
                  e.preventDefault();
                  handleWaitlistClick('navbar_mobile');
                  handleMobileNav('#descargar');
                }}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-finper-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-finper-accent transition-colors">

                  <ArrowRight className="w-4 h-4" />
                  Probar
                </a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

}