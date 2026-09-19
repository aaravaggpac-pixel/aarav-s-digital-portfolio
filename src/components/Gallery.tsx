import { useState } from "react";
import { Play } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import { Rail } from "@/components/Rail";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  /** Still frame. For a video item this is the poster. */
  src: string;
  /** Describes what the frame shows — never decorative (accessibility.md › Alt text). */
  alt: string;
  caption: string;
  w: number;
  h: number;
  /**
   * When present the tile is a clip: the poster stands in until someone opens
   * it, so no video bytes are fetched on page load.
   */
  video?: string;
};

type GalleryProps = {
  title: string;
  images: GalleryImage[];
  /** Match the frame to the source so `object-cover` isn't discarding half
      the photo. Portrait sets (bench shots, documents) need a tall frame. */
  aspect?: "landscape" | "portrait";
  className?: string;
};

const ASPECT = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
} as const;

/**
 * A horizontal photo rail.
 *
 * Follows scroll-views.md › Best practices — "displaying partial content at
 * the edge of a view indicates that there's more content in that direction" —
 * so the rail deliberately lets the next frame peek rather than ending flush.
 *
 * Intrinsic width/height are set on every image so the row reserves its space
 * before the file loads and nothing shifts (Core Web Vitals: CLS).
 */
export function Gallery({ title, images, aspect = "landscape", className }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <Rail title={title} ariaLabel={title} className={className}>
        {images.map((img, i) => (
          <figure key={img.src} className="w-[15rem] shrink-0 snap-start sm:w-[17.5rem]">
            <button
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={img.video ? `Play: ${img.alt}` : `Enlarge: ${img.alt}`}
              className="glass-card glass-card-link block w-full overflow-hidden rounded-tile-lg p-1.5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative block">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  decoding="async"
                  className={cn("w-full rounded-[0.8rem] object-cover", ASPECT[aspect])}
                />
                {img.video && (
                  <span
                    aria-hidden
                    className="absolute inset-0 grid place-items-center rounded-[0.8rem] bg-black/15"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/85 shadow-[0_2px_10px_-4px_rgb(0_0_0/0.4)] backdrop-blur-sm">
                      <Play className="ml-0.5 h-5 w-5 fill-black text-black" />
                    </span>
                  </span>
                )}
              </span>
            </button>
            <figcaption className="mt-2.5 px-1 text-[0.82rem] leading-snug text-label-secondary">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </Rail>

      {lightbox !== null && (
        <Lightbox
          items={images.map((m) => ({
            src: m.src,
            alt: m.alt,
            caption: m.caption,
            title,
            video: m.video,
          }))}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndex={setLightbox}
        />
      )}
    </>
  );
}
