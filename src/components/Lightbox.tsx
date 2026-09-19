import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  /** Still frame. For a clip this is the poster. */
  src: string;
  alt: string;
  caption?: string;
  title?: string;
  eyebrow?: string;
  video?: string;
  /** Adds a download action to the footer. */
  download?: string;
  downloadLabel?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
};

/**
 * One viewer for every enlarged photo, clip and certificate on the site.
 *
 * A single modal task with an obvious way out (modality.md › Best practices):
 * the close control, the backdrop and Escape all dismiss it, and focus moves
 * into the dialog on open so keyboard users aren't left behind the overlay.
 *
 * Rendered through a portal on purpose. An ancestor carrying `backdrop-filter`
 * — every `.glass-card` panel does — becomes the containing block for its
 * fixed-position descendants, so a lightbox left inside a glass tab panel
 * anchors to that panel instead of the viewport and spills off screen.
 */
export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const item = items[index];
  const many = items.length > 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!many) return;
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);

    // Hold the page still while the modal is up.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cardRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, items.length, many, onClose, onIndex]);

  if (!item) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/65 px-4 pb-5 pt-[5.75rem] backdrop-blur-2xl backdrop-saturate-[0.85]"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-label={item.title ?? item.alt}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="glass-card relative w-full max-w-3xl space-y-4 rounded-tile-lg p-5 outline-none animate-in fade-in zoom-in-95 duration-200 sm:p-6"
      >
        <div className="flex shrink-0 items-start justify-between gap-4">
          <div className="min-w-0">
            {item.eyebrow && (
              <p className="text-[0.72rem] font-medium text-label-secondary">{item.eyebrow}</p>
            )}
            {item.title && (
              <h3 className="mt-0.5 text-[1.05rem] font-semibold leading-snug text-label">
                {item.title}
              </h3>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-label/[0.05] text-label transition-colors duration-200 hover:bg-label/[0.1]"
          >
            <X className="h-[1.1rem] w-[1.1rem]" aria-hidden />
          </button>
        </div>

        <div className="flex justify-center overflow-hidden rounded-[0.9rem] bg-label/[0.04]">
          {item.video ? (
            <video
              key={item.video}
              src={item.video}
              poster={item.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="max-h-[calc(100svh-18rem)] w-auto max-w-full"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[calc(100svh-18rem)] w-auto max-w-full object-contain"
            />
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
          <p className="min-w-0 flex-1 text-[0.82rem] leading-snug text-label-secondary">
            {item.caption}
          </p>

          <div className="flex shrink-0 items-center gap-2">
            {item.download && (
              <a
                href={item.download}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="pill inline-flex min-h-[44px] items-center gap-2 bg-accent px-5 text-[0.8rem] font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                <Download className="h-3.5 w-3.5" aria-hidden />
                {item.downloadLabel ?? "Download"}
              </a>
            )}

            {many && (
              <>
                <button
                  type="button"
                  onClick={() => onIndex((index - 1 + items.length) % items.length)}
                  aria-label="Previous"
                  className="grid h-10 w-10 place-items-center rounded-full bg-label/[0.05] text-label transition-colors duration-200 hover:bg-label/[0.1]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <span className={cn("text-[0.76rem] tabular-nums text-label-secondary")}>
                  {index + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={() => onIndex((index + 1) % items.length)}
                  aria-label="Next"
                  className="grid h-10 w-10 place-items-center rounded-full bg-label/[0.05] text-label transition-colors duration-200 hover:bg-label/[0.1]"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
