import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Urban Heat Stress", path: "/urban-heat-stress" },
  { label: "Engineering & Technology", path: "/engineering-technology" },
  { label: "Research", path: "/research" },
  { label: "Leadership & Mentoring", path: "/leadership-mentoring" },
  { label: "Cricket", path: "/cricket" },
  { label: "Awards & Recognition", path: "/awards-recognition" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className="sticky top-0 z-50 w-full shadow-md border-b border-blue-900/50"
      style={{ backgroundColor: "hsl(var(--nav-bg))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-400 group-hover:border-white transition-colors">
              <span className="text-white font-extrabold text-sm tracking-wider">AA</span>
            </div>
            <span className="text-white font-bold text-base leading-tight group-hover:text-blue-200 transition-colors">
              Aarav Aggarwal
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 text-xs font-medium transition-all rounded ${
                    isActive
                      ? "text-blue-300 bg-white/10 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Direct Resume Download Button */}
            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className="ml-2 px-4 py-2 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all shadow-sm bg-blue-600 text-white hover:bg-blue-500 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Medium Desktop / Tablet Compact Nav */}
          <div className="hidden md:flex xl:hidden items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-2 py-1.5 text-xs font-medium transition-all rounded ${
                  location.pathname === item.path ? "text-blue-300 bg-white/10" : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className="ml-1 px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-500 cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-1 shadow-inner" style={{ backgroundColor: "hsl(var(--nav-bg))" }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/AaravResumeJan-17-2026.pdf"
            download="AaravResumeJan-17-2026.pdf"
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Download Resume (PDF)
          </a>
        </div>
      )}
    </nav>
  );
}
