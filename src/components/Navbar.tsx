import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent } from
'framer-motion';
import { Download, Menu, X } from 'lucide-react';
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
  label: 'Descargar',
  href: '#descargar'
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
  return (
    <motion.header
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4 transition-all duration-300 pointer-events-auto">
      <div
        className={`max-w-6xl mx-auto overflow-hidden rounded-full border transition-colors duration-300 ${elevated ? 'border-white/70 bg-white/80 shadow-lg shadow-finper-dark/10 backdrop-blur-xl' : 'border-white/20 bg-white/10 backdrop-blur-md'}`}>
        <nav className="flex items-center justify-between px-5 sm:px-8 h-16">
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
              className="inline-flex items-center gap-2 rounded-full bg-finper-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-finper-accent transition-colors">
              
              <Download className="w-4 h-4" />
              Descargar
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
            className="md:hidden bg-white/95 border-t border-finper-primary/10 overflow-hidden">
            
              <div className="flex flex-col px-5 py-4 gap-4">
                {NAV_LINKS.map((link) =>
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-finper-dark/80">
                
                    {link.label}
                  </a>
              )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

}