"use client";

/**
 * MapleLeaf Component
 *
 * Sophisticated Canadian maple leaf SVG with multiple variants.
 * Canadian Design System - Phase 3: National Identity
 *
 * Official Canadian flag proportions and styling.
 */

interface MapleLeafProps {
  variant?: 'outlined' | 'filled' | 'geometric';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  color?: 'red' | 'white' | 'aurora' | 'current';
  opacity?: number;
  className?: string;
}

export function MapleLeaf({
  variant = 'outlined',
  size = 'md',
  color = 'red',
  opacity = 1,
  className = '',
}: MapleLeafProps) {
  // Size mappings
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 800, // For watermark
  };

  const dimension = sizeMap[size];

  // Color mappings
  const colorMap = {
    red: 'currentColor', // Will use canadian-red-dark class
    white: '#F8FAFC',
    aurora: '#00C896',
    current: 'currentColor',
  };

  const fillColor = colorMap[color];
  const strokeColor = colorMap[color];

  // Maple leaf path (official proportions from Canadian flag)
  const filledPath = "M12 2l1.5 4.5h4.5l-3.5 3 1.5 4.5-3.5-2.5-3.5 2.5 1.5-4.5-3.5-3h4.5z";

  // More accurate Canadian maple leaf SVG path
  const accuratePath = "M12 2.5c-.3.8-.6 1.5-1 2.3-.3.6-.7 1.2-1 1.7h-3l2.3 2.2-1 3.3 2.7-2 2.7 2-1-3.3 2.3-2.2h-3c-.3-.5-.7-1.1-1-1.7-.4-.8-.7-1.5-1-2.3z";

  // Geometric/modern variant (Toronto Maple Leafs inspired)
  const geometricPath = "M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z";

  const pathData = variant === 'geometric' ? geometricPath : accuratePath;

  if (variant === 'outlined') {
    return (
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathData} />
      </svg>
    );
  }

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill={fillColor}
      opacity={opacity}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathData} />
    </svg>
  );
}
