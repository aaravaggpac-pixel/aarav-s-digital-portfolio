import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Urban Heat Stress", path: "/urban-heat-stress" },
  { label: "Engineering & Technology", path: "/engineering-technology" },
  { label: "Research", path: "/research" },
];

const exploreLinks = [
  { label: "Leadership & Mentoring", path: "/leadership-mentoring" },
  { label: "Cricket", path: "/cricket" },
  { label: "Awards & Recognition", path: "/awards-recognition" },
];

const linkClass =
  "inline-flex min-h-[44px] items-center text-[0.76rem] text-label-secondary transition-opacity duration-200 hover:opacity-70 sm:min-h-[32px]";

const headingClass = "mb-2 text-[0.76rem] font-semibold text-label";

export default function Footer() {
  return (
    <footer className="relative border-t border-separator px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          <div>
            <h2 className={headingClass}>Aarav Aggarwal</h2>
            <p className="text-[0.76rem] leading-relaxed text-label-secondary">
              Student Researcher | Engineer | Climate Innovator
            </p>
          </div>

          <nav aria-label="Navigation">
            <h2 className={headingClass}>Navigation</h2>
            <ul className="flex flex-col">
              {navigationLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore and profile">
            <h2 className={headingClass}>Explore &amp; Profile</h2>
            <ul className="flex flex-col">
              {exploreLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/AaravResumeJan-17-2026.pdf"
                  download="AaravResumeJan-17-2026.pdf"
                  className={linkClass}
                >
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Connect &amp; Resume</h2>
            <ul className="flex flex-col">
              <li>
                <a href="mailto:aaravagg.pac@gmail.com" className={linkClass}>
                  aaravagg.pac@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aarav-aggarwal-085b21357/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="/AaravResumeJan-17-2026.pdf"
                  download="AaravResumeJan-17-2026.pdf"
                  className={linkClass}
                >
                  Download Resume PDF
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-9 border-t border-separator pt-5 text-[0.71rem] text-label-secondary">
          © 2026 Aarav Aggarwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
