"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/**
 * FadeIn Component
 *
 * Animates children to fade in when scrolled into view.
 * Uses Framer Motion's useInView hook for performance.
 *
 * Canadian Design System - Phase 2: Scroll Animations
 */

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset: Record<string, { x?: number; y?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  const offset = directionOffset[direction];

  const initial = {
    opacity: 0,
    ...offset,
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : (offset.x ?? 0),
    y: isInView ? 0 : (offset.y ?? 0),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom easing for smooth Canadian feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
