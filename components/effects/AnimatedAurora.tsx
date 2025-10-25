"use client";

/**
 * AnimatedAurora Component
 *
 * Creates an animated Northern Lights effect using CSS animations.
 * Pure CSS implementation for performance - no JavaScript animations.
 *
 * Canadian Design System - Phase 2: Advanced Effects
 */

export function AnimatedAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Layer 1 - Purple */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
          animation: 'aurora-1 20s ease-in-out infinite',
        }}
      />

      {/* Aurora Layer 2 - Blue */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 30% -10%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)',
          animation: 'aurora-2 15s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      {/* Aurora Layer 3 - Green */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 45% at 70% -15%, rgba(0, 200, 150, 0.4) 0%, transparent 50%)',
          animation: 'aurora-3 18s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />

      {/* CSS Animations injected via style tag */}
      <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translateX(-10%) translateY(5%) scale(1.1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(5%) translateY(-5%) scale(0.95);
            opacity: 0.25;
          }
          75% {
            transform: translateX(-5%) translateY(3%) scale(1.05);
            opacity: 0.28;
          }
        }

        @keyframes aurora-2 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translateX(8%) translateY(-4%) scale(1.08);
            opacity: 0.28;
          }
          66% {
            transform: translateX(-6%) translateY(6%) scale(0.98);
            opacity: 0.24;
          }
        }

        @keyframes aurora-3 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1);
            opacity: 0.2;
          }
          40% {
            transform: translateX(-8%) translateY(-6%) scale(1.06);
            opacity: 0.26;
          }
          80% {
            transform: translateX(10%) translateY(4%) scale(0.96);
            opacity: 0.22;
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          @keyframes aurora-1,
          @keyframes aurora-2,
          @keyframes aurora-3 {
            0%, 100% {
              transform: none;
              opacity: 0.15;
            }
          }
        }
      `}</style>
    </div>
  );
}
