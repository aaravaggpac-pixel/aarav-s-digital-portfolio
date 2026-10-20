import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Urban Heat Stress", path: "/urban-heat-stress" },
  { label: "Engineering & Technology", path: "/engineering-technology" },
  { label: "Research", path: "/research" },
  { label: "Leadership & Mentoring", path: "/leadership-mentoring" },
  { label: "Cricket", path: "/cricket" },
  { label: "Awards & Recognition", path: "/awards-recognition" },
];

/* "Define which items move to the overflow menu as the toolbar becomes
   narrower" (toolbars.md › Best practices). Below xl the last three
   collapse into More rather than disappearing. */
const PRIMARY = navItems.slice(0, 4);
const OVERFLOW = navItems.slice(4);

const itemClass = "whitespace-nowrap py-2 text-[0.84rem] transition-opacity duration-200 hover:opacity-70";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overflowActive = OVERFLOW.some((i) => i.path === location.pathname);

  return (
    /* The floating functional layer — the only surface that carries Liquid
       Glass (liquid-glass.md › The two layers). */
    <div className="pointer-events-none sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div aria-hidden className="nav-edge" />
      <nav
        className={cn(
          "nav-island pointer-events-auto relative mx-auto max-w-6xl rounded-[1.75rem] transition-[background-color,box-shadow] duration-300",
          scrolled && "nav-island-scrolled",
        )}
      >
        <div className="px-5 sm:px-6">
          <div className="flex h-[4.25rem] items-center justify-between gap-6">
          {/* Identity */}
          <Link
            to="/"
            className="group -my-2 mr-2 flex min-h-[44px] shrink-0 items-center gap-3 py-2"
            aria-label="Aarav Aggarwal — Home"
          >
            <span
              className="app-icon grid h-[32px] w-[32px] shrink-0 place-items-center bg-gradient-to-b from-[#2E2E30] to-[#000000] text-[0.72rem] font-semibold tracking-[-0.03em] text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.28)]"
              aria-hidden
            >
              AA
            </span>
            <span className="whitespace-nowrap text-[1.18rem] font-semibold tracking-[-0.025em] text-label transition-opacity duration-200 group-hover:opacity-70">
              Aarav Aggarwal
            </span>
          </Link>

          {/* Full set — wide windows only */}
          <div className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    itemClass,
                    isActive ? "font-semibold text-label" : "text-label-secondary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className={cn(itemClass, "font-semibold text-label")}
            >
              Resume
            </a>
          </div>

          {/* Narrower windows: the tail folds into More */}
          <div className="hidden items-center gap-6 lg:flex xl:hidden">
            {PRIMARY.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    itemClass,
                    isActive ? "font-semibold text-label" : "text-label-secondary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  itemClass,
                  "inline-flex items-center gap-1 outline-none",
                  overflowActive ? "font-semibold text-label" : "text-label-secondary",
                )}
              >
                More
                <ChevronDown className="h-3 w-3" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[13rem]">
                {OVERFLOW.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      to={item.path}
                      aria-current={location.pathname === item.path ? "page" : undefined}
                      className={cn(
                        "cursor-pointer text-[0.82rem]",
                        location.pathname === item.path && "font-semibold",
                      )}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className={cn(itemClass, "font-semibold text-label")}
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle — 44pt target (accessibility.md › Controls) */}
          <button
            className="-mr-2 grid h-11 w-11 place-items-center text-label lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/50 px-5 pb-5 pt-1 sm:px-6 lg:hidden">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-h-[44px] items-center border-b border-separator text-[1.05rem] transition-opacity duration-200 hover:opacity-70",
                    isActive ? "font-semibold text-label" : "text-label",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className="flex min-h-[44px] items-center text-[1.05rem] font-semibold text-label transition-opacity duration-200 hover:opacity-70"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
