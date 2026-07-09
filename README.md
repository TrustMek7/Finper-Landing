# FinPer — Landing Page

Landing page oficial de **FinPer**, la app móvil de finanzas personales para trabajadores informales y emprendedores del Perú. Permite registrar ingresos y gastos por voz (con IA), visualizar análisis financiero y organizar categorías adaptadas al contexto peruano.

Este repositorio contiene solo el sitio web de presentación de la app (no la app Android en sí).

**Equipo:** DevGarden — Chino Pari Joel Antonio, Cusilayme García José Luis, Mamani Mamani Alexis Baltazar, Mamani Uscamayta Agustín David.

**Curso:** Gestión de Emprendimiento de Software — UNSA Arequipa, 2026.

---

## Stack técnico

- React 18 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (íconos)
- Deploy en Vercel

---

## Estructura

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Features.tsx
│   ├── Mockups.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── PhoneMockup.tsx
│   ├── FadeInSection.tsx
│   └── AnimatedCounter.tsx
├── App.tsx
└── index.tsx
public/            # capturas de la app y logo
```

Secciones de la página: Navbar · Hero · Stats · Features · Mockups (capturas de la app) · How it works · Pricing · CTA · Footer.

---

## Getting Started

1. Instalar dependencias:
   ```
   npm install
   ```
2. Levantar el servidor de desarrollo:
   ```
   npm run dev
   ```
3. Compilar para producción:
   ```
   npm run build
   ```

---

## Sobre FinPer (la app)

- **Stack:** Kotlin + Jetpack Compose (MVVM), Firebase Auth + Cloud Firestore, Gemini AI para registro de gastos por voz, Biometric API, AdMob.
- **Diferenciador:** registro de transacciones por voz con IA, categorías locales y sin necesidad de cuenta bancaria.
- **Problema que resuelve:** el 73% de la PEA peruana es informal (INEI 2022) y no tiene acceso a herramientas financieras adaptadas a su realidad.
- Repo de la app: [github.com/AdMu2838/Finper](https://github.com/AdMu2838/Finper)
