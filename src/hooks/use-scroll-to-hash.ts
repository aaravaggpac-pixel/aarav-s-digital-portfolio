import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    let frame = 0;
    let restoreScrollBehavior: (() => void) | undefined;

    if (hash) {
      const id = hash.replace("#", "");
      frame = window.requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      // Route changes should start at the top before the new page is painted.
      // Temporarily disable the document's smooth scrolling so a long previous
      // page does not visibly race through the next page's content.
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      restoreScrollBehavior = () => {
        root.style.scrollBehavior = previousBehavior;
        restoreScrollBehavior = undefined;
      };
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      frame = window.requestAnimationFrame(() => restoreScrollBehavior?.());
    }

    return () => {
      window.cancelAnimationFrame(frame);
      restoreScrollBehavior?.();
    };
  }, [pathname, hash]);
}
