import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent } from
'framer-motion';
import { Download, Menu, X } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12);
  });
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${mobileOpen ? 'bg-finper-dark/85 backdrop-blur-lg shadow-lg shadow-finper-dark/10' : 'bg-transparent'}`}>

      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
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

        <div
          className={`hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-finper-dark/10 px-7 py-2.5' : 'px-0 py-0'}`}>
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
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-finper-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-finper-accent transition-colors shrink-0">

          <Download className="w-4 h-4" />
          Descargar
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
          className="md:hidden bg-finper-dark/95 backdrop-blur-lg border-t border-white/10 overflow-hidden">

            <div className="flex flex-col px-5 py-4 gap-4">
              {NAV_LINKS.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-white/80 hover:text-finper-accent transition-colors">

                  {link.label}
                </a>
            )}
              <a
              href="#descargar"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-finper-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-finper-accent transition-colors">

                <Download className="w-4 h-4" />
                Descargar
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}