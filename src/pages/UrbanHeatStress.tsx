import { useState } from "react";
import { ExternalLink, Flame, ShieldCheck, Award, FileText } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

export default function UrbanHeatStress() {
  useScrollToHash();
  const [activeTab, setActiveTab] = useState<"roofofhope" | "coolplay">("roofofhope");

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-600" /> Climate Action & Innovation
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Urban Heat Stress Initiative & Research
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Addressing microclimate heat stress in low-income settlements and youth athletics through scalable cool-roof materials, empirical research, and community cooling interventions.
          </p>
          <div className="w-24 h-1.5 bg-blue-900 rounded" />
        </div>

        {/* Sub-tabs Selection Header */}
        <div className="flex border-b border-slate-200 mb-8 bg-white p-1.5 rounded-xl shadow-sm border max-w-md">
          <button
            onClick={() => setActiveTab("roofofhope")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "roofofhope"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Roof of Hope
          </button>
          <button
            onClick={() => setActiveTab("coolplay")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "coolplay"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Cool Play
          </button>
        </div>

        {/* TAB 1: Roof of Hope */}
        {activeTab === "roofofhope" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded border border-blue-100 mb-2">
                  Founded Dec 2024 – Present · India
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  <a
                    href="https://www.roofofhope.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                  >
                    Roof of Hope <ExternalLink className="w-5 h-5 text-blue-500" />
                  </a>
                </h2>
              </div>
              <a
                href="https://www.roofofhope.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors self-start sm:self-auto"
              >
                roofofhope.org <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>
                Founded <strong>Roof of Hope</strong> in 2024 to counter urban heat stress in low-income communities. Collaborated with <strong>Mahila Housing Trust</strong>, <strong>Indorama Ventures Center for Clean Energy</strong>, and <strong>Plaksha University</strong> to pilot and test solutions for building thermal resilience in Delhi.
              </p>
              <p>
                Installed cool roofs across <strong>100 low-income homes</strong> in Bakkarwala Resettlement Colony, Delhi, to provide relief during extreme summer months and collect empirical sensor data for policy planning on urban heat stress relief.
              </p>
            </div>

            {/* Results Grid */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Empirical Findings & Reductions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-blue-600">~20 °C</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Over-deck Surface Temp Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-blue-600">4–11 °C</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Under-deck Ceiling Temp Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-emerald-600">1–3 °C</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Indoor Wall Temp Reduction</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2">
                Structured surveys and qualitative interviews confirm substantial improvements (reported by <strong>95% of surveyed households</strong>) in thermal comfort, sleep quality, daily activities, and self-reported health.
              </p>
            </div>

            {/* Partners */}
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Partners</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collaborating organizations supporting cool-roof deployment, research, and community outreach.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://plaksha.edu.in/center-for-clean-energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white transition-colors space-y-1.5 group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-800 leading-snug">
                    Indorama Ventures Center for Clean Energy
                  </h4>
                  <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1">
                    plaksha.edu.in <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
                <a
                  href="https://www.mahilahousingtrust.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white transition-colors space-y-1.5 group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-800 leading-snug">
                    Mahila Housing Trust
                  </h4>
                  <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1">
                    mahilahousingtrust.org <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
                <a
                  href="https://www.nagarro.com/en/industries/nonprofit-and-education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white transition-colors space-y-1.5 group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-800 leading-snug">
                    Nagarro Foundation
                  </h4>
                  <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1">
                    nagarro.com <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Media & Conference Highlights */}
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Conference Presentation & National Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                    Conference Invitation
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">
                    7th International Conference on Countermeasures to Urban Heat Islands
                  </h4>
                  <p className="text-xs text-slate-600">
                    Findings from Roof of Hope submitted to IC2UHI 2026 (Nanjing, China · September 22–25, 2026). Invited to present.
                  </p>
                  <a
                    href="https://www.ic2uhi2026.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    ic2uhi2026.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                    Featured Media Coverage
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">
                    Featured Twice in National Media
                  </h4>
                  <div className="space-y-1 text-xs">
                    <a
                      href="https://tech.economictimes.indiatimes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Economic Times Tech Article <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Images & Video */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-slate-900">Deployment Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="https://static.wixstatic.com/media/02b2cd_0ba9a640910746a9bc82ea2a107ed90d~mv2.jpg"
                  alt="Roof of Hope installation"
                  className="w-full h-56 object-cover rounded-xl border border-slate-200"
                />
                <img
                  src="https://static.wixstatic.com/media/02b2cd_d0a9ac65fc9547c896e91b6bec80472c~mv2.jpg"
                  alt="Bakkarwala cool roof"
                  className="w-full h-56 object-cover rounded-xl border border-slate-200"
                />
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: Cool Play */}
        {activeTab === "coolplay" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="inline-block text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded border border-orange-100 mb-2">
                  Founder · 6 – 21 Aug 2025 · Gurgaon / Delhi, India
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Cool Play</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Heat safety initiative providing reusable cooling jackets to underprivileged youth athletes
                </p>
              </div>
              <a
                href="https://www.fueladream.com/home/campaign/92486"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors self-start sm:self-auto"
              >
                Original Fuel A Dream Campaign <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Lead image */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                src="/images/cool-play/lead-cooling-jacket.jpg"
                alt="Young athletes wearing reusable cooling jackets"
                className="w-full max-h-[28rem] object-cover"
              />
            </div>

            {/* Campaign results */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-xl font-extrabold text-orange-600">INR 66,000</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Raised (100% funded)</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-xl font-extrabold text-orange-600">60</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Cooling Jackets Goal</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-xl font-extrabold text-slate-900">16</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Funders</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-xl font-extrabold text-slate-900">12 Clubs</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Adopted Cooling Concept</div>
              </div>
            </div>

            {/* Background / Objective */}
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Background & Objective</h3>
              <p>
                In India, young athletes face a significant challenge when training and playing sports under the blazing sun with little to no protection against extreme heat. With temperatures often soaring above <strong>40°C</strong> during peak summer months, these kids push themselves through practices and matches where heat exhaustion and heatstroke are constant risks.
              </p>
              <p>
                Limited access to shade, hydration, or cooling gear leaves them more vulnerable to heat-related illnesses. Despite their passion and dedication to sports, many lack the basic protective gear needed to play safely. Providing reusable cooling jackets can lower body temperature, reduce heat stress, and let them focus on their game without compromising their health.
              </p>
              <p>
                Through a Fuel A Dream crowdfunding campaign, Cool Play aimed to <strong>purchase and distribute 60 reusable cooling jackets</strong> to children training in extreme heat conditions in Gurgaon, in partnership with the <strong>Mera India Mera Adhikar Foundation (MIMA)</strong> (<a href="https://mima.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mima.org.in</a>).
              </p>
            </div>

            {/* Product design */}
            <div className="bg-orange-50/60 p-5 sm:p-6 rounded-xl border border-orange-100 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Product Design — Cooling Jacket</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                These cooling jackets help lower body temperature, reduce the risk of heatstroke during outdoor sports, and are <strong>lightweight, reusable, and designed for safety in high-heat conditions</strong>.
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1">
                <li>Reusable design suited for repeated outdoor training sessions</li>
                <li>Lightweight build so athletes can move freely during play</li>
                <li>Helps lower body temperature and reduce heat-stress risk</li>
                <li>Each jacket costs <strong>INR 1,100</strong> (including distribution)</li>
              </ul>
            </div>

            {/* Photos of athletes */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Young Athletes Wearing Reusable Cooling Jackets</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "athletes-01.jpg",
                  "athletes-02.jpg",
                  "athletes-03.jpg",
                  "athletes-04.jpg",
                  "athletes-05.jpg",
                  "athletes-06.jpg",
                  "athletes-07.jpg",
                  "athletes-08.jpg",
                ].map((file) => (
                  <img
                    key={file}
                    src={`/images/cool-play/${file}`}
                    alt="Young athletes wearing reusable cooling jackets while training in heat"
                    className="w-full h-40 sm:h-48 object-cover rounded-xl border border-slate-200"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Photos from the Cool Play / Fuel A Dream campaign — athletes training under extreme temperatures with cooling jackets.
              </p>
            </div>

            {/* About MIMA */}
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">About the NGO Partner</h3>
              <p>
                <strong>Mera India Mera Adhikar (MIMA)</strong> uses football as a tool to engage children from deprived localities — offering an alternative to negative influences in slum communities and building education, discipline, and positivity. Over <strong>50% of participants are girls</strong>, and the programme works with groups like DYFA (Delhi Youth Football Academy) and Star Strikers so young athletes can showcase talent on larger platforms.
              </p>
              <p>
                Beyond football skills, MIMA has helped reduce screen time and improve concentration on studies, while providing safe, structured environments for aspirations, confidence, teamwork, leadership, and persistence.
              </p>
            </div>

            {/* Why this project */}
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Why Cool Play</h3>
              <p>
                Growing up in India playing cricket, practices and matches often took place in extreme heat — full days on open grounds with no shade. Friends got sick from the heat; that same exhaustion was familiar. Sports taught discipline, teamwork, and resilience, but also showed how overlooked basic protection can be for kids training without proper support. Cool Play is a way of giving back to that experience — protecting kids who show up every day and ask for nothing more than the chance to play safely.
              </p>
              <p className="text-xs text-slate-500 italic">
                Campaign successfully closed at 100% of the INR 66,000 goal. Content adapted from the{" "}
                <a
                  href="https://www.fueladream.com/home/campaign/92486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline not-italic"
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
