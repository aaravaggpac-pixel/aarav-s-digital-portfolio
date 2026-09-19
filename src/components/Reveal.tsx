import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in ms, so a row of tiles arrives in sequence rather than together. */
  delay?: number;
};

/**
 * Reveals content as it scrolls into view.
 *
 * Two rules from the guidelines shape this (motion.md › Best practices):
 * "Make motion optional" — `prefers-reduced-motion` skips straight to the
 * shown state, and "avoid using it as the only way to communicate" — the
 * motion carries no meaning, it only paces the arrival.
 *
 * The hidden state is applied from JS, never from the initial markup, so the
 * content stays visible if scripting fails rather than disappearing.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  // Arm before paint so there is no flash of the un-hidden state.
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed || shown) return;
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [armed, shown]);

  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
        hidden && "translate-y-3 opacity-0",
        className,
      )}
      style={hidden ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Reveals the direct children of any `[data-reveal-root]` container as they
 * scroll into view, without needing the page's JSX restructured around them.
 *
 * Same two guarantees as `Reveal` (motion.md › Best practices): reduced motion
 * skips the animation entirely, and the hidden state is applied from JS, so
 * content is never hidden by markup alone.
 */
export function useAutoReveal(selector = "[data-reveal-root] > *") {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) return;

    els.forEach((el, i) => {
      el.style.transition =
        "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transitionDelay = `${Math.min(i, 3) * 70}ms`;
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.willChange = "opacity, transform";
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.opacity = "";
          el.style.transform = "";
          el.style.willChange = "";
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
