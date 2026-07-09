# FinPer — Contexto del Proyecto

## ¿Qué es FinPer?

App móvil Android de gestión de finanzas personales orientada a **trabajadores informales y emprendedores del Perú**. Permite registrar ingresos y gastos manual o por voz (Gemini AI), visualizar análisis financiero y organizar por categorías adaptadas al contexto peruano.

**Equipo:** DevGarden — Chino Pari Joel Antonio, Cusilayme García José Luis, Mamani Mamani Alexis Baltazar, Mamani Uscamayta Agustín David.

**Curso:** Gestión de Emprendimiento de Software — UNSA Arequipa 2026.

**Repo:** `https://github.com/AdMu2838/Finper`

---

## Stack técnico

| Capa | Tecnología | Versión |
|---|---|---|
| Lenguaje | Kotlin | 1.9+ |
| UI | Jetpack Compose + Material 3 | 1.5+ |
| Navegación | Navigation Compose | 2.7+ |
| Backend/DB | Cloud Firestore | 34.4.0 |
| Auth | Firebase Authentication | 34.4.0 |
| IA / Voz | Google Gemini AI | 0.9.0 |
| Biometría | Biometric API | 1.1.0 |
| Ads | Google AdMob | 23.5.0 |
| Async | Coroutines | 1.7.3 |

**Package:** `com.devgarden.finper`

---

## Arquitectura — MVVM

```
UI Layer (Jetpack Compose)
        ↓
ViewModel Layer
  ├── UserViewModel
  ├── TransactionsViewModel
  ├── AuthViewModel
  ├── CategoriesViewModel
  └── VoiceTransactionViewModel
        ↓
Data Layer
  ├── AuthRepository
  ├── Firebase Authentication
  ├── Cloud Firestore
  └── SharedPreferences
```

---

## Estructura del proyecto

```
finper/
├── app/src/main/java/com/devgarden/finper/
│   ├── data/                    # Repositorios y modelos
│   ├── navigation/              # Sistema de navegación
│   ├── ui/
│   │   ├── components/          # Componentes reutilizables
│   │   ├── features/
│   │   │   ├── auth/            # Login, registro, biometría
│   │   │   ├── home/            # Dashboard principal
│   │   │   ├── transactions/    # Registro manual + voz
│   │   │   ├── analysis/        # Gráficos financieros
│   │   │   ├── categories/      # Gestión de categorías
│   │   │   └── profile/         # Perfil + seguridad
│   │   ├── theme/               # Temas y estilos
│   │   └── viewmodel/           # ViewModels
│   ├── utils/                   # Utilidades
│   └── MainActivity.kt
├── app/build.gradle.kts
└── google-services.json
```

---

## Modelo de datos (Firestore)

### `users`
```kotlin
uid: String
fullName: String
email: String
phone: String
birthDate: Timestamp
balance: Double
createdAt: Timestamp
```

### `transactions`
```kotlin
id: String
userId: String
amount: Double
category: String
date: Timestamp
description: String
isExpense: Boolean
createdAt: Timestamp
```

### `categories`
```kotlin
id: String
name: String   // Comida, Transporte, Medicina, Comestibles, Alquiler, Regalos, Ahorros, Entretenimiento, Otros
icon: String
```

### `fixedIncomes`
```kotlin
id: String
userId: String
amount: Double
description: String
createdAt: Timestamp
```

---

## Reglas de Firestore

```javascript
match /users/{userId} {
  allow read, write: if request.auth.uid == userId;
}
match /transactions/{transactionId} {
  allow read, write: if resource.data.userId == request.auth.uid;
}
match /categories/{categoryId} {
  allow read: if request.auth != null;
  allow write: if false; // solo admin
}
```

---

## Módulo de voz — Gemini AI

El usuario habla en lenguaje natural. Gemini extrae automáticamente:
- `amount: Double`
- `category: String`
- `description: String`
- `isExpense: Boolean`

**Ejemplos:**
- "Gasté 50 soles en comida" → amount: 50, category: Comida, isExpense: true
- "Ingreso de 1000 soles por salario" → amount: 1000, category: Trabajo, isExpense: false
- "Pago de 200 en transporte" → amount: 200, category: Transporte, isExpense: true

El ViewModel encargado es `VoiceTransactionViewModel`. El flujo es:
1. Grabación de audio
2. Transcripción a texto
3. Prompt a Gemini con el texto + contexto de categorías
4. Parse del JSON de respuesta
5. Pantalla de confirmación antes de guardar en Firestore

---

## Autenticación

- **Email/contraseña:** Firebase Auth estándar
- **Google Sign-In:** OAuth 2.0 — Web Client ID en `strings.xml`
- **Biométrica:** Biometric API — huella dactilar como segundo factor local
- **Recuperación:** reset por email vía Firebase

---

## Modelo de negocio

| Stream | Precio | Plazo |
|---|---|---|
| Freemium → Premium | S/9.90/mes | Corto |
| AdMob | CPM variable | Corto |
| Alianzas B2B (microfinancieras) | Comisión/API fee | Mediano |
| FinPer Pro PYME | S/29.90/mes | Largo |

---

## Pantallas implementadas (19 total)

1. Splash / Onboarding
2. Login
3. Registro
4. Recuperar contraseña
5. Configuración biométrica
6. Home / Dashboard (semanal/diario/mensual)
7. Transacciones — listado con filtros
8. Agregar transacción (manual)
9. Agregar transacción por voz (Gemini)
10. Confirmación de transacción por voz
11. Análisis financiero — gráficos D/S/M/A
12. Categorías — grid 3x3
13. Crear categoría personalizada
14. Perfil
15. Editar perfil
16. Seguridad (biometría)
17. Ajustes
18. Ayuda
19. Cerrar sesión

---

## Landing page (en desarrollo)

**Stack:** React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React

**Deploy:** Vercel

**Mockups disponibles en** `public/mockups/`:
- `home.png` — Dashboard principal
- `transacciones.png` — Pantalla de transacciones con voz
- `analisis.png` — Análisis financiero
- `categorias.png` — Grid de categorías
- `perfil.png` — Perfil de usuario

**Secciones:** Navbar · Hero · Stats · Features · Mockups · How it works · Pricing · CTA · Footer

---

## Convenciones de código

- **Branches:** `feature/nombre-feature`
- **Commits:** mensajes cortos en español o inglés, descriptivos
- **ViewModels:** uno por feature, exponen `StateFlow`
- **Repositorios:** abstraen la fuente de datos — nunca llames Firestore directamente desde la UI
- **Coroutines:** usar `viewModelScope.launch` en ViewModels, `Dispatchers.IO` para operaciones de red/DB

---

## Contexto de negocio

- **Problema:** 73% de la PEA peruana es informal (INEI 2022). No tienen acceso a herramientas financieras adaptadas a su realidad.
- **Diferenciador clave:** Registro por voz con IA + categorías locales + sin necesidad de cuenta bancaria.
- **Early adopters:** Vendedores ambulantes, microempresarios, estudiantes con ingresos variables.
- **TAM:** ~12 millones de trabajadores informales en Perú.
