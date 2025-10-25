"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * CountUp Component
 *
 * Animates numbers counting up when scrolled into view.
 * Uses Framer Motion springs for smooth Canadian feel.
 *
 * Canadian Design System - Phase 2: Interactive Stats
 */

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export function CountUp({
  value,
  duration = 2,
  suffix = '',
  className = '',
  decimals = 0,
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  const display = useTransform(spring, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals);
    }
    return Math.floor(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [spring, value, isInView]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
