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
│   ├── ValidationMetrics.tsx
│   ├── Features.tsx
│   ├── Mockups.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── PhoneMockup.tsx
│   ├── FadeInSection.tsx
│   └── AnimatedCounter.tsx
├── lib/
│   ├── analytics.ts
│   └── plans.ts
├── App.tsx
└── index.tsx
public/            # capturas de la app y logo
```

Secciones de la página: Navbar · Hero · Stats · Validación de la idea · Features · Mockups (capturas de la app) · How it works · Pricing · CTA/lista de espera · Footer.

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
4. Ejecutar lint:
   ```
   npm run lint
   ```

---

## Validación de mercado

La landing se usa como herramienta de validación antes de construir o escalar el MVP. Las métricas principales a medir son:

- Visitas totales y usuarios únicos.
- Clics en CTA y registros en lista de espera.
- Tasa de conversión entre visita, clic y registro.
- Fuente de tráfico y dispositivo usado.
- Tiempo en página y profundidad de scroll.

La utilidad `src/lib/analytics.ts` deja preparados estos eventos para conectar luego Google Analytics, Vercel Analytics, Umami, Plausible, Supabase, Tally o Google Forms:

- `cta_click`: clics en CTAs principales, navegación y formulario.
- `waitlist_submit`: envío del formulario de lista de espera.
- `feature_interest`: clics en funcionalidades o enlaces hacia características.
- `pricing_click`: clic en una card/CTA de precios.
- `plan_selected`: selección de plan desde precios o formulario.
- `download_click`: clics históricos de descargar/probar, ahora orientados a lista de espera.
- `mockup_click`: interacción con capturas de la app.
- `scroll_depth`: avance de scroll al 25%, 50%, 75% y 90%.
- `page_engagement`: tiempo en página y scroll máximo al salir.

## Planes de validación

Los precios no procesan pagos reales desde la landing; son una propuesta inicial para medir interés y disposición de pago.

- **Free — S/ 0:** valida adopción inicial y reduce la barrera de entrada para usuarios con bajos ingresos. Incluye registro básico, offline, categorías principales, resumen mensual básico, 1 meta de ahorro y datos locales.
- **Básico — S/ 9.90 / mes:** plan recomendado para validar monetización individual. El precio es bajo y razonable para trabajadores independientes o personas con ingresos variables, similar a un gasto cotidiano pequeño, sin alejar al público objetivo.
- **Emprendedor — S/ 29.90 / mes:** valida valor para pequeños negocios. El precio se justifica por separación de finanzas personales/negocio, múltiples cajas, reportes más completos, historial ampliado y soporte inicial.

---

## Sobre FinPer (la app)

- **Stack:** Kotlin + Jetpack Compose (MVVM), Firebase Auth + Cloud Firestore, Gemini AI para registro de gastos por voz, Biometric API, AdMob.
- **Diferenciador:** registro de transacciones por voz con IA, categorías locales y sin necesidad de cuenta bancaria.
- **Problema que resuelve:** el 73% de la PEA peruana es informal (INEI 2022) y no tiene acceso a herramientas financieras adaptadas a su realidad.
- Repo de la app: [github.com/AdMu2838/Finper](https://github.com/AdMu2838/Finper)
