import { useState } from "react";
import { Trophy, ExternalLink, Heart } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { cricketPhotos } from "@/lib/galleries";

type CricketTab = "national" | "club" | "stumps";

export default function Cricket() {
  const [activeTab, setActiveTab] = useState<CricketTab>("national");

  return (
    <div className="relative isolate min-h-screen pb-20 text-label">
      {/* Hero Cricket Banner */}
      <section className="relative bg-accent text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/75 border border-white/20 text-[0.76rem] font-medium min-h-[44px]">
              <Trophy className="w-3.5 h-3.5 text-white/75" /> National Athlete & Community Lead
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Cricket Career & Initiatives
            </h1>
            <p className="text-white/80 text-sm max-w-2xl leading-relaxed">
              Playing competitive cricket since age 8. Representing Singapore in international competition, competing in Men's Division 1 league, and leading community sports drives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div data-reveal-root className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
        {/* Sub-tabs Selection Header */}
        <div className="mb-8 flex w-fit max-w-full flex-wrap gap-2 rounded-xl border border-white/70 p-1.5 glass-card">
          <button
            onClick={() => setActiveTab("national")}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "national"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            National Team (U16 & U19)
          </button>
          <button
            onClick={() => setActiveTab("club")}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "club"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            School Cricket Club
          </button>
          <button
            onClick={() => setActiveTab("stumps")}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "stumps"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            Stumps & Stories
          </button>
        </div>

        {/* TAB 1: National Team */}
        {activeTab === "national" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Singapore Cricket Association · Jan 2018 – Present
                </span>
                <h2 className="text-2xl font-bold text-label">
                  Singapore U16 National Team & U19 High-Performance Squad
                </h2>
              </div>
              <a
                href="https://www.asiancricket.org/match/234/1993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto shrink-0 min-h-[44px]"
              >
                ACC Match Official Link <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3 text-label-secondary text-sm leading-relaxed">
              <p>
                Playing cricket since the age of 8. Joined the school cricket club and selected to represent the <strong>Singapore U16 National Cricket Team</strong> at the Asian Cricket Council (ACC) U16 Championship.
              </p>
              <p>
                Achieved <strong>Runner-Up finish</strong> in the 10-country ACC tournament in 2025.
              </p>
              <p>
                Train 6 days a week with the National High-Performance Squad, competing in <strong>Division 1 of the SCA Men's League</strong> against adult international players.
              </p>
            </div>

            <div className="glass-card rounded-tile-lg p-4 text-xs text-label-secondary">
              <span className="font-semibold text-label">Official Asian Cricket Council Match Record:</span>
              <p className="pt-1">
                <a
                  href="https://www.asiancricket.org/match/234/1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill mt-2 inline-flex min-h-[44px] items-center gap-2 bg-accent px-5 text-[0.82rem] font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
                >
                  View match record on asiancricket.org
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </p>
            </div>
            <div className="border-t border-white/60 pt-7">
              <Gallery title="Match photos" images={cricketPhotos} />
            </div>
          </section>
        )}

        {/* TAB 2: School Cricket Club */}
        {activeTab === "club" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                May 2024 – Present · Singapore American School
              </span>
              <h2 className="text-2xl font-bold text-label">
                Cricket Club | Officer
              </h2>
            </div>
            <ul className="list-disc list-inside text-label-secondary space-y-2 text-sm leading-relaxed">
              <li>Led organization of 5+ inter-school events and 2 international tours (Philippines, Malaysia) to grow cricket participation and cross-border engagement.</li>
              <li>Raised funds and implemented structured training upgrades, including permanent nets and a development program benefiting 40+ student athletes.</li>
            </ul>
          </section>
        )}

        {/* TAB 3: Stumps & Stories */}
        {activeTab === "stumps" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Oct 2024 – Present · Head of Logistics
              </span>
              <h2 className="text-2xl font-bold text-label">
                School Community Impact: Stumps & Stories
              </h2>
              <p className="text-sm text-label-secondary mt-1">
                Singapore American School — Inclusion and Community Engagement through Sports
              </p>
            </div>
            <div className="space-y-4 text-label-secondary text-sm leading-relaxed">
              <p>
                As an Indian cricketer in Singapore, I saw how cricket connects people across cultures. In my school community, I saw that migrant workers and staff are essential to daily school life but often overlooked and not fully integrated into the community. My friends and I started Stumps and Stories to leverage cricket to bridge this gap, enable these workers to tell their stories, and thus foster a sense of community and appreciation.
              </p>
              <p>
                As Head of Logistics, I co-led the planning and execution of a cricket tournament for 100+ migrant workers and staff. I was responsible for awareness campaigns and also contributed to a <strong>$5,000 fundraising effort</strong> to support event operations, refreshments, and thank-you kits.
              </p>
              <p>
                The event saw huge participation and was a great success, and we plan to continue the event every year.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
