import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export function Section({ children, className = "", padding = "lg" }: SectionProps) {
  const paddingStyles = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-24 lg:py-32",
  };

  return (
    <section className={`${paddingStyles[padding]} ${className}`}>
      {children}
    </section>
  );
}
