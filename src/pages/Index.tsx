import { Link } from "react-router-dom";
import {
  ChevronRight,
  CircuitBoard,
  Flame,
  FlaskConical,
  Medal,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Apple's identity mark, as an app icon (app-icons.md): a continuous-corner
   squircle, layered fill, content centered, no text beyond the monogram. */
function AppIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "app-icon relative grid shrink-0 place-items-center overflow-hidden",
        "bg-gradient-to-b from-[#2E2E30] to-[#000000]",
        "shadow-[inset_0_1px_0_0_rgb(255_255_255/0.28),0_6px_16px_-6px_rgb(0_0_0/0.45)]",
        className,
      )}
      aria-hidden
    >
      <span className="relative font-semibold leading-none tracking-[-0.04em] text-white">
        AA
      </span>
    </span>
  );
}

export default function Index() {
  const roles = ["Student Researcher", "Engineer", "Climate Innovator"];

  const quickNavCards = [
    {
      title: "Urban Heat Stress",
      subtitle: "Roof of Hope & Cool Play",
      desc: "Founded Roof of Hope & Cool Play to counter urban heat stress; cool roofs scaling to 1,000+ homes in Delhi; 60+ cooling jackets for youth athletes.",
      path: "/urban-heat-stress",
      badge: "Climate Impact",
      icon: Flame,
    },
    {
      title: "Engineering & Technology",
      subtitle: "M&TSI, Mynzo, DataPitch & Bio-Cell",
      desc: "Penn M&TSI program, MobileNetV2 leaf identification (~85% accuracy), IPL predictive ML model, and bio-cell battery patent.",
      path: "/engineering-technology",
      badge: "Hardware & AI",
      icon: CircuitBoard,
    },
    {
      title: "Research",
      subtitle: "Publications & Patents",
      desc: "NHSJS IPL batting archetypes paper, IC2UHI 2026 conference presentation, Aloe Vera bio-cell battery design patents, and acoustic metamaterials study.",
      path: "/research",
      badge: "Peer-Reviewed & Patents",
      icon: FlaskConical,
    },
    {
      title: "Leadership & Mentoring",
      subtitle: "Plaksha YTS TA & VP Read to Lead",
      desc: "TA invited by Prof. Ravi Jasuja at Plaksha University (80 students), VP leading literacy drives for 100+ readers with NLB Singapore.",
      path: "/leadership-mentoring",
      badge: "Community & TA",
      icon: Users,
    },
    {
      title: "Cricket",
      subtitle: "National U16 / U19 & Stumps & Stories",
      desc: "Singapore U16 National Squad Runner-Up (ACC 2025), SCA Men's League Div 1, and Stumps & Stories tournament honoring migrant workers.",
      path: "/cricket",
      badge: "National Athlete",
      icon: Trophy,
    },
    {
      title: "Awards & Recognition",
      subtitle: "International & Academic Honors",
      desc: "CREST Gold Award, IC2UHI Invited Presenter, Elaine Hobson Essay Winner, TIMO Bronze Medalist, and PADI Scuba Diver.",
      path: "/awards-recognition",
      badge: "Honors & Medals",
      icon: Medal,
    },
  ];

  return (
    <div className="text-label">
      {/* ─────────────────────────  HERO  ───────────────────────── */}
      <section className="relative isolate flex min-h-[calc(100svh-5.5rem)] items-center px-5 py-14 sm:px-8">

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <Reveal className="lg:col-span-7">
            <p className="text-[0.82rem] font-semibold text-label-secondary">
              High School Researcher &amp; Innovator
            </p>

            <h1 className="mt-3 text-[clamp(2.6rem,6vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-label">
              Aarav Aggarwal
            </h1>

            <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[1.18rem] leading-snug text-label-secondary">
              {roles.map((role, i) => (
                <span key={role} className="inline-flex items-center gap-2.5">
                  {i > 0 && (
                    <span aria-hidden className="text-separator">
                      |
                    </span>
                  )}
                  {role}
                </span>
              ))}
            </p>

            <p className="mt-6 max-w-[60ch] text-[1rem] leading-[1.6] text-label-secondary text-pretty">
              I am Aarav Aggarwal, a high school student at Singapore American School driven by a passion for leveraging technology, engineering research, and community action to solve complex real-world challenges. From founding Roof of Hope (scaling cool-roof interventions across 1,000+ homes in India) to conducting machine learning internships and representing Singapore in international cricket, I strive for excellence across research, sports, and societal impact.
            </p>

            {/* One filled action, two glass ones — style, not size, separates
               them (buttons.md › Style) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/AaravResumeJan-17-2026.pdf"
                download="AaravResumeJan-17-2026.pdf"
                className="pill inline-flex min-h-[44px] items-center bg-accent px-6 text-[1rem] text-accent-foreground transition-colors duration-200 hover:bg-accent-hover"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/aarav-aggarwal-085b21357/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-link pill group inline-flex min-h-[44px] items-center px-6 text-[1rem] text-label transition-all duration-200"
              >
                LinkedIn
                <ChevronRight
                  className="ml-0.5 h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>

              <a
                href="mailto:aaravagg.pac@gmail.com"
                className="glass-card glass-card-link pill group inline-flex min-h-[44px] items-center px-6 text-[1rem] text-label transition-all duration-200"
              >
                Email Me
                <ChevronRight
                  className="ml-0.5 h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </div>

          </Reveal>

          {/* Identity card — the App Store product header, applied to a person */}
          <Reveal className="lg:col-span-5" delay={140}>
            <div className="glass-card mx-auto w-full max-w-sm rounded-tile-lg p-3 lg:max-w-none">
              {/* Eager + fetchPriority: this is the hero image, so it should not
                  wait behind lazy assets (performance › image-optimization) */}
              <img
                src="/images/aarav-portrait.jpg"
                alt="Aarav Aggarwal in Singapore national cricket kit at an ACC fixture"
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full rounded-[0.95rem] object-cover"
              />

              <div className="flex items-center gap-3.5 px-3 pb-1 pt-4">
                <AppIcon className="h-[42px] w-[42px] text-[0.95rem]" />
                <div className="min-w-0">
                  <p className="truncate text-[1.12rem] font-semibold leading-tight tracking-[-0.02em] text-label">
                    Aarav Aggarwal
                  </p>
                  <p className="mt-0.5 text-[0.88rem] text-label-secondary">Singapore American School</p>
                </div>
              </div>

              <p className="mx-3 mt-3.5 border-t border-white/60 pb-1 pt-3.5 text-[0.82rem] font-semibold text-label">
                High School Researcher &amp; Innovator
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────  EXPLORE FOCUS AREAS  ────────────────── */}
      <section className="relative isolate px-5 pb-24 pt-6 sm:px-8">

        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
            <h2 className="text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-label text-balance">
              Explore Focus Areas
            </h2>
            <p className="max-w-md text-[0.94rem] leading-snug text-label-secondary md:text-right">
              Click on any card below to navigate directly to detailed projects, publications, and initiatives.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickNavCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={60 * i}>
                  <Link
                    to={card.path}
                    className="glass-card glass-card-link group flex h-full flex-col justify-between rounded-tile-lg p-7 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-5">
                        <Icon className="h-6 w-6 text-label" strokeWidth={1.5} aria-hidden />
                        <span className="text-[0.82rem] text-label-secondary">{card.badge}</span>
                      </div>

                      <h3 className="mt-7 text-[1.29rem] font-semibold leading-[1.15] tracking-[-0.025em] text-label">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-[0.94rem] text-label-secondary">{card.subtitle}</p>
                      <p className="mt-4 text-[0.94rem] leading-[1.6] text-label-secondary text-pretty">
                        {card.desc}
                      </p>
                    </div>

                    <span className="mt-7 inline-flex items-center text-[0.94rem] font-medium text-label">
                      Explore Page
                      <ChevronRight
                        className="ml-0.5 h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
