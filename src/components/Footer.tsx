import { Link } from "react-router-dom";
import { Mail, Linkedin, FileText, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(var(--footer-bg))", color: "hsl(var(--footer-foreground))" }} className="border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-400 mx-auto md:mx-0 mb-3">
              <span className="text-white font-extrabold text-base">AA</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Aarav Aggarwal</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Student Researcher | Engineer | Climate Innovator
            </p>
          </div>

          {/* Quick Links Column 1 */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Home", path: "/" },
                { label: "Urban Heat Stress", path: "/urban-heat-stress" },
                { label: "Engineering & Technology", path: "/engineering-technology" },
                { label: "Research", path: "/research" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Explore & Profile</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Leadership & Mentoring", path: "/leadership-mentoring" },
                { label: "Cricket", path: "/cricket" },
                { label: "Awards & Recognition", path: "/awards-recognition" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/AaravResumeJan-17-2026.pdf"
                  download="AaravResumeJan-17-2026.pdf"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 justify-center md:justify-start"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Resume */}
          <div className="text-center md:text-right space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Connect & Resume</h4>
            <div className="flex flex-col items-center md:items-end gap-2.5 text-xs">
              <a
                href="mailto:aaravagg.pac@gmail.com"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10"
              >
                <Mail className="w-3.5 h-3.5 text-blue-300" /> aaravagg.pac@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/aarav-aggarwal-085b21357/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-300" /> LinkedIn Profile <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="/AaravResumeJan-17-2026.pdf"
                download="AaravResumeJan-17-2026.pdf"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-1.5 rounded text-xs transition-colors shadow-sm mt-1"
              >
                <FileText className="w-3.5 h-3.5" /> Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © 2026 Aarav Aggarwal. All rights reserved.
      </div>
    </footer>
  );
}
