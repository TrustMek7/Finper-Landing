import React from 'react';
import { Smartphone } from 'lucide-react';
const LINKS = [
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
},
{
  label: 'Lista de espera',
  href: '#descargar'
}];

export function Footer() {
  return (
    <footer className="bg-finper-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src="/Logo.jpeg"
                  alt="Logo de FinPer"
                  className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                FinPer
              </span>
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Controla tus finanzas hablando. La app pensada para el día a día
              de los peruanos, simple y sin complicaciones.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/60">
              <Smartphone className="w-3.5 h-3.5" />
              Disponible para Android
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-finper-accent">
              Navegación
            </h3>
            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {LINKS.map((link) =>
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors">

                  {link.label}
                </a>
              )}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 FinPer · Todos los derechos reservados
          </p>
          <p className="text-xs text-white/40">
            DevGarden Team · UNSA Arequipa
          </p>
        </div>
      </div>
    </footer>);

}
