import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}
export function AnimatedCounter({
  value,
  suffix = '',
  decimals = 0,
  duration = 1.6
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.6
  });
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(latest.toFixed(decimals));
      }
    });
    return () => controls.stop();
  }, [inView, value, duration, decimals]);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>);

}