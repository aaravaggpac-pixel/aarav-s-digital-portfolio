import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in ms, so a row of tiles arrives in sequence rather than together. */
  delay?: number;
};

/** A stable layout wrapper retained for the home-page composition. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div className={cn(className)} data-reveal-delay={delay || undefined}>
      {children}
    </div>
  );
}
