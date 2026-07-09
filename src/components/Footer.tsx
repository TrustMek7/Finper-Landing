import React from 'react';
const LINKS = [
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

export function Footer() {
  return (
    <footer className="bg-finper-bg border-t border-finper-dark/10 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src="/Logo.jpeg"
              alt="Logo de FinPer"
              className="w-full h-full object-contain" />
          </div>
          <span className="font-extrabold text-finper-dark">FinPer</span>
        </div>

        <nav className="flex items-center gap-6">
          {LINKS.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-finper-dark/60 hover:text-finper-primary transition-colors">
            
              {link.label}
            </a>
          )}
        </nav>

        <p className="text-xs text-finper-dark/40 text-center sm:text-right">
          DevGarden Team · UNSA Arequipa · 2026
        </p>
      </div>
    </footer>);

}
