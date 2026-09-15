import { useState } from "react";
import { Trophy, ExternalLink, Heart } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

type CricketTab = "national" | "club" | "stumps";

export default function Cricket() {
  useScrollToHash();
  const [activeTab, setActiveTab] = useState<CricketTab>("national");

  return (
    <div className="bg-slate-50 min-h-screen pb-16 text-slate-800">
      {/* Hero Cricket Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-emerald-400" /> National Athlete & Community Lead
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Cricket Career & Initiatives
            </h1>
            <p className="text-emerald-200 text-sm max-w-2xl leading-relaxed">
              Playing competitive cricket since age 8. Representing Singapore in international competition, competing in Men's Division 1 league, and leading community sports drives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Sub-tabs Selection Header */}
        <div className="flex border-b border-slate-200 mb-8 bg-white p-1.5 rounded-xl shadow-sm border max-w-lg">
          <button
            onClick={() => setActiveTab("national")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "national"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            National Team (U16 & U19)
          </button>
          <button
            onClick={() => setActiveTab("club")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "club"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            School Cricket Club
          </button>
          <button
            onClick={() => setActiveTab("stumps")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "stumps"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Stumps & Stories
          </button>
        </div>

        {/* TAB 1: National Team */}
        {activeTab === "national" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mb-2 inline-block">
                  Singapore Cricket Association · Jan 2018 – Present
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Singapore U16 National Team & U19 High-Performance Squad
                </h2>
              </div>
              <a
                href="https://www.asiancricket.org/match/234/1993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors self-start sm:self-auto shrink-0"
              >
                ACC Match Official Link <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
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

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900">Official Asian Cricket Council Match Record:</span>
              <p className="pt-1">
                <a
                  href="https://www.asiancricket.org/match/234/1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1 font-mono"
                >
                  https://www.asiancricket.org/match/234/1993 <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </section>
        )}

        {/* TAB 2: School Cricket Club */}
        {activeTab === "club" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 mb-2 inline-block">
                May 2024 – Present · Singapore American School
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Cricket Club | Officer
              </h2>
            </div>
            <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm leading-relaxed">
              <li>Led organization of 5+ inter-school events and 2 international tours (Philippines, Malaysia) to grow cricket participation and cross-border engagement.</li>
              <li>Raised funds and implemented structured training upgrades, including permanent nets and a development program benefiting 40+ student athletes.</li>
            </ul>
          </section>
        )}

        {/* TAB 3: Stumps & Stories */}
        {activeTab === "stumps" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mb-2 inline-block">
                Oct 2024 – Present · Head of Logistics
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                School Community Impact: Stumps & Stories
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Singapore American School — Inclusion and Community Engagement through Sports
              </p>
            </div>
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
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
