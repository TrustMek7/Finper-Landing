import React from 'react';
import { motion } from 'framer-motion';
import { Download, PlayCircle, Sparkles } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-finper-bg pt-32 pb-20 sm:pt-40 sm:pb-28">
      
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-finper-accent/10 blur-3xl" />
      <div className="absolute top-40 -left-24 w-72 h-72 rounded-full bg-finper-primary/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}>
          
          <span className="inline-flex items-center gap-2 rounded-full bg-finper-primary/10 px-4 py-1.5 text-xs font-semibold text-finper-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Hecho en Perú, con IA
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-finper-dark leading-[1.08] tracking-tight">
            Controla tus finanzas con solo{' '}
            <span className="text-finper-primary">hablar</span>
          </h1>

          <p className="mt-6 text-lg text-finper-dark/70 max-w-lg">
            La app de finanzas para trabajadores informales del Perú. Powered by
            Gemini AI.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#descargar"
              className="inline-flex items-center gap-2 rounded-full bg-finper-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-finper-primary/25 hover:bg-finper-accent hover:-translate-y-0.5 transition-all">
              
              <Download className="w-4 h-4" />
              Descargar APK
            </a>
            <a
              href="#caracteristicas"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-finper-dark hover:text-finper-primary transition-colors">
              
              <PlayCircle className="w-4 h-4" />
              Ver características
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-finper-dark/50">
            <span>100% gratis para empezar</span>
            <span className="w-1 h-1 rounded-full bg-finper-dark/30" />
            <span>Sin tarjeta de crédito</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{
            opacity: 0,
            scale: 0.92
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1]
          }}>
          
          <motion.div
            animate={{
              y: [0, -16, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
            
            <PhoneMockup
              src="/Inicio.jpeg"
              alt="Pantalla principal de FinPer" />
            
          </motion.div>
        </motion.div>
      </div>
    </section>);

}