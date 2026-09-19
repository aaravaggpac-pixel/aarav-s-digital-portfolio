import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type RailProps = {
  /** Rendered as the section heading when present. */
  title?: string;
  /** Names the scrollable region for screen readers. */
  ariaLabel: string;
  children: ReactNode;
  className?: string;
};

/**
 * Horizontal rail shared by the photo galleries and the award grids.
 *
 * The next item is left peeking rather than ending flush — that is the cue
 * there is more to the side (scroll-views.md › Best practices).
 */
export function Rail({ title, ariaLabel, children, className }: RailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const page = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  const btn =
    "glass-card grid h-9 w-9 place-items-center rounded-full text-label transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-35";

  return (
    <section className={cn("space-y-4", className)}>
      {title && (
        <div className="flex items-end justify-between gap-6">
          <h3 className="text-[1.05rem] font-semibold text-label">{title}</h3>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => page(-1)}
              disabled={atStart}
              aria-label={`Scroll ${ariaLabel} backward`}
              className={btn}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => page(1)}
              disabled={atEnd}
              aria-label={`Scroll ${ariaLabel} forward`}
              className={btn}
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      )}

      <div
        ref={railRef}
        tabIndex={0}
        role="group"
        aria-label={ariaLabel}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {children}
      </div>
    </section>
  );
}
