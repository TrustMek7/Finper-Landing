import React from 'react';
import { motion } from 'framer-motion';
interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}
export function FadeInSection({
  children,
  className = '',
  delay = 0,
  y = 28
}: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.25
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {children}
    </motion.div>);

}