import { useState } from "react";
import { ExternalLink, Flame, ShieldCheck, Award, FileText } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { coolPlayPhotos, roofOfHopePhotos } from "@/lib/galleries";

export default function UrbanHeatStress() {
  const [activeTab, setActiveTab] = useState<"roofofhope" | "coolplay">("roofofhope");

  return (
    <div className="relative isolate min-h-screen py-12 text-label sm:py-16">
      <div data-reveal-root className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-label/[0.05] border border-separator text-label text-[0.76rem] font-medium min-h-[44px]">
            <Flame className="w-3.5 h-3.5 text-label-secondary" /> Climate Action & Innovation
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-label">
            Urban Heat Stress Initiative & Research
          </h1>
          <p className="text-label-secondary text-sm sm:text-base max-w-3xl leading-relaxed">
            Addressing microclimate heat stress in low-income settlements and youth athletics through scalable cool-roof materials, empirical research, and community cooling interventions.
          </p>
          <div className="w-24 h-1.5 bg-accent rounded" />
        </div>

        {/* Sub-tabs Selection Header */}
        <div className="flex border-b border-white/70 mb-8 glass-card p-1.5 rounded-xl border max-w-md">
          <button
            onClick={() => setActiveTab("roofofhope")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "roofofhope"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            Roof of Hope
          </button>
          <button
            onClick={() => setActiveTab("coolplay")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "coolplay"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            Cool Play
          </button>
        </div>

        {/* TAB 1: Roof of Hope */}
        {activeTab === "roofofhope" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-6">
              <div>
                <span className="inline-block text-xs font-bold text-label uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2">
                  Founded Dec 2024 – Present · India
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-label">
                  <a
                    href="https://www.roofofhope.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-label transition-colors inline-flex items-center gap-2 min-h-[44px]"
                  >
                    Roof of Hope <ExternalLink className="w-5 h-5 text-label-secondary" />
                  </a>
                </h2>
              </div>
              <a
                href="https://www.roofofhope.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors self-start sm:self-auto min-h-[44px]"
              >
                roofofhope.org <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4 text-label-secondary text-sm leading-relaxed">
              <p>
                Founded <strong>Roof of Hope</strong> in 2024 to counter urban heat stress in low-income communities. Collaborated with <strong>Mahila Housing Trust</strong>, <strong>Indorama Ventures Center for Clean Energy</strong>, and <strong>Plaksha University</strong> to pilot and test solutions for building thermal resilience in Delhi.
              </p>
              <p>
                Installed cool roofs across <strong>100 low-income homes</strong> in Bakkarwala Resettlement Colony, Delhi, to provide relief during extreme summer months and collect empirical sensor data for policy planning on urban heat stress relief.
              </p>
            </div>

            {/* Results Grid */}
            <div className="bg-label/[0.03] rounded-xl p-6 border border-white/70 space-y-4">
              <h3 className="text-sm font-bold text-label flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-label" /> Empirical Findings & Reductions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="glass-card p-4 rounded-lg border border-white/70 text-center">
                  <div className="text-2xl font-semibold text-label">~20 °C</div>
                  <div className="text-xs text-label-secondary font-medium mt-1">Over-deck Surface Temp Reduction</div>
                </div>
                <div className="glass-card p-4 rounded-lg border border-white/70 text-center">
                  <div className="text-2xl font-semibold text-label">4–11 °C</div>
                  <div className="text-xs text-label-secondary font-medium mt-1">Under-deck Ceiling Temp Reduction</div>
                </div>
                <div className="glass-card p-4 rounded-lg border border-white/70 text-center">
                  <div className="text-2xl font-semibold text-label-secondary">1–3 °C</div>
                  <div className="text-xs text-label-secondary font-medium mt-1">Indoor Wall Temp Reduction</div>
                </div>
              </div>
              <p className="text-xs text-label-secondary leading-relaxed pt-2">
                Structured surveys and qualitative interviews confirm substantial improvements (reported by <strong>95% of surveyed households</strong>) in thermal comfort, sleep quality, daily activities, and self-reported health.
              </p>
            </div>

            {/* Partners */}
            <div className="border-t border-white/60 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-label">Partners</h3>
              <p className="text-xs text-label-secondary leading-relaxed">
                Collaborating organizations supporting cool-roof deployment, research, and community outreach.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://plaksha.edu.in/center-for-clean-energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/70 bg-label/[0.03] hover:border-white/30 hover:glass-card transition-colors space-y-1.5 group"
                >
                  <h4 className="text-xs font-bold text-label group-hover:text-label leading-snug">
                    Indorama Ventures Center for Clean Energy
                  </h4>
                  <span className="text-[11px] text-label font-medium inline-flex items-center gap-1 min-h-[44px]">
                    plaksha.edu.in <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
                <a
                  href="https://www.mahilahousingtrust.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/70 bg-label/[0.03] hover:border-white/30 hover:glass-card transition-colors space-y-1.5 group"
                >
                  <h4 className="text-xs font-bold text-label group-hover:text-label leading-snug">
                    Mahila Housing Trust
                  </h4>
                  <span className="text-[11px] text-label font-medium inline-flex items-center gap-1 min-h-[44px]">
                    mahilahousingtrust.org <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
                <a
                  href="https://www.nagarro.com/en/industries/nonprofit-and-education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/70 bg-label/[0.03] hover:border-white/30 hover:glass-card transition-colors space-y-1.5 group"
                >
                  <h4 className="text-xs font-bold text-label group-hover:text-label leading-snug">
                    Nagarro Foundation
                  </h4>
                  <span className="text-[11px] text-label font-medium inline-flex items-center gap-1 min-h-[44px]">
                    nagarro.com <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Media & Conference Highlights */}
            <div className="border-t border-white/60 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-label">Conference Presentation & National Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/70 bg-label/[0.03] space-y-2">
                  <span className="text-[10px] font-bold text-label bg-label/[0.05] px-2 py-0.5 rounded">
                    Conference Invitation
                  </span>
                  <h4 className="text-xs font-bold text-label">
                    7th International Conference on Countermeasures to Urban Heat Islands
                  </h4>
                  <p className="text-xs text-label-secondary">
                    Findings from Roof of Hope submitted to IC2UHI 2026 (Nanjing, China · September 22–25, 2026). Invited to present.
                  </p>
                  <a
                    href="https://www.ic2uhi2026.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label inline-flex items-center gap-1 font-semibold min-h-[44px]"
                  >
                    ic2uhi2026.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="p-4 rounded-xl border border-white/70 bg-label/[0.03] space-y-2">
                  <span className="text-[10px] font-bold text-label-secondary bg-label/[0.05] px-2 py-0.5 rounded">
                    Featured Media Coverage
                  </span>
                  <h4 className="text-xs font-bold text-label">
                    Featured Twice in National Media
                  </h4>
                  <div className="space-y-1 text-xs">
                    <a
                      href="https://tech.economictimes.indiatimes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label flex items-center gap-1"
                    >
                      Economic Times Tech Article <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/60 pt-7">
              <Gallery title="From the field" images={roofOfHopePhotos} />
            </div>
          </section>
        )}

        {/* TAB 2: Cool Play */}
        {activeTab === "coolplay" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-6">
              <div>
                <span className="inline-block text-xs font-bold text-label-secondary uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2">
                  Founder · 6 – 21 Aug 2025 · Gurgaon / Delhi, India
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-label">Cool Play</h2>
                <p className="text-sm text-label-secondary mt-1">
                  Heat safety initiative providing reusable cooling jackets to underprivileged youth athletes
                </p>
              </div>
              <a
                href="https://www.fueladream.com/home/campaign/92486"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-label/[0.05] text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors self-start sm:self-auto min-h-[44px]"
              >
                Original Fuel A Dream Campaign <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Lead image */}
            <figure className="glass-card overflow-hidden rounded-tile-lg p-1.5">
              <img
                src="/images/cool-play/lead-cooling-jacket.jpg"
                alt="Young athletes wearing reusable cooling jackets during training"
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full rounded-[0.8rem] object-cover"
              />
            </figure>

            {/* Campaign results */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-label/[0.03] p-4 rounded-xl border border-white/70 text-center">
                <div className="text-xl font-semibold text-label-secondary">INR 66,000</div>
                <div className="text-xs text-label-secondary font-medium mt-1">Raised (100% funded)</div>
              </div>
              <div className="bg-label/[0.03] p-4 rounded-xl border border-white/70 text-center">
                <div className="text-xl font-semibold text-label-secondary">60</div>
                <div className="text-xs text-label-secondary font-medium mt-1">Cooling Jackets Goal</div>
              </div>
              <div className="bg-label/[0.03] p-4 rounded-xl border border-white/70 text-center">
                <div className="text-xl font-semibold text-label">16</div>
                <div className="text-xs text-label-secondary font-medium mt-1">Funders</div>
              </div>
              <div className="bg-label/[0.03] p-4 rounded-xl border border-white/70 text-center">
                <div className="text-xl font-semibold text-label">12 Clubs</div>
                <div className="text-xs text-label-secondary font-medium mt-1">Adopted Cooling Concept</div>
              </div>
            </div>

            {/* Background / Objective */}
            <div className="space-y-3 text-label-secondary text-sm leading-relaxed">
              <h3 className="text-sm font-bold text-label uppercase tracking-wider">Background & Objective</h3>
              <p>
                In India, young athletes face a significant challenge when training and playing sports under the blazing sun with little to no protection against extreme heat. With temperatures often soaring above <strong>40°C</strong> during peak summer months, these kids push themselves through practices and matches where heat exhaustion and heatstroke are constant risks.
              </p>
              <p>
                Limited access to shade, hydration, or cooling gear leaves them more vulnerable to heat-related illnesses. Despite their passion and dedication to sports, many lack the basic protective gear needed to play safely. Providing reusable cooling jackets can lower body temperature, reduce heat stress, and let them focus on their game without compromising their health.
              </p>
              <p>
                Through a Fuel A Dream crowdfunding campaign, Cool Play aimed to <strong>purchase and distribute 60 reusable cooling jackets</strong> to children training in extreme heat conditions in Gurgaon, in partnership with the <strong>Mera India Mera Adhikar Foundation (MIMA)</strong> (<a href="https://mima.org.in" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">mima.org.in</a>).
              </p>
            </div>

            {/* Product design */}
            <div className="bg-label/[0.03] p-5 sm:p-6 rounded-xl border border-separator space-y-3">
              <h3 className="text-sm font-bold text-label uppercase tracking-wider">Product Design — Cooling Jacket</h3>
              <p className="text-sm text-label-secondary leading-relaxed">
                These cooling jackets help lower body temperature, reduce the risk of heatstroke during outdoor sports, and are <strong>lightweight, reusable, and designed for safety in high-heat conditions</strong>.
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-label-secondary space-y-1">
                <li>Reusable design suited for repeated outdoor training sessions</li>
                <li>Lightweight build so athletes can move freely during play</li>
                <li>Helps lower body temperature and reduce heat-stress risk</li>
                <li>Each jacket costs <strong>INR 1,100</strong> (including distribution)</li>
              </ul>
            </div>

            {/* Photos of athletes */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-label">Young Athletes Wearing Reusable Cooling Jackets</h3>
              <Gallery title="Cool Play in action" images={coolPlayPhotos} />
              <p className="text-xs text-label-secondary">
                Photos from the Cool Play / Fuel A Dream campaign — athletes training under extreme temperatures with cooling jackets.
              </p>
            </div>

            {/* About MIMA */}
            <div className="space-y-3 text-label-secondary text-sm leading-relaxed border-t border-white/60 pt-6">
              <h3 className="text-sm font-bold text-label uppercase tracking-wider">About the NGO Partner</h3>
              <p>
                <strong>Mera India Mera Adhikar (MIMA)</strong> uses football as a tool to engage children from deprived localities — offering an alternative to negative influences in slum communities and building education, discipline, and positivity. Over <strong>50% of participants are girls</strong>, and the programme works with groups like DYFA (Delhi Youth Football Academy) and Star Strikers so young athletes can showcase talent on larger platforms.
              </p>
              <p>
                Beyond football skills, MIMA has helped reduce screen time and improve concentration on studies, while providing safe, structured environments for aspirations, confidence, teamwork, leadership, and persistence.
              </p>
            </div>

            {/* Why this project */}
            <div className="space-y-3 text-label-secondary text-sm leading-relaxed border-t border-white/60 pt-6">
              <h3 className="text-sm font-bold text-label uppercase tracking-wider">Why Cool Play</h3>
              <p>
                Growing up in India playing cricket, practices and matches often took place in extreme heat — full days on open grounds with no shade. Friends got sick from the heat; that same exhaustion was familiar. Sports taught discipline, teamwork, and resilience, but also showed how overlooked basic protection can be for kids training without proper support. Cool Play is a way of giving back to that experience — protecting kids who show up every day and ask for nothing more than the chance to play safely.
              </p>
              <p className="text-xs text-label-secondary italic">
                Campaign successfully closed at 100% of the INR 66,000 goal. Content adapted from the{" "}
                <a
                  href="https://www.fueladream.com/home/campaign/92486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label not-italic"
                >
                  Fuel A Dream campaign page
                </a>
                .
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
