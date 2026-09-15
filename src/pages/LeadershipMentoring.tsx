import { useState } from "react";
import { Users, ExternalLink } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

type LeadTab = "yts" | "readtolead";

export default function LeadershipMentoring() {
  useScrollToHash();
  const [activeTab, setActiveTab] = useState<LeadTab>("yts");

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-emerald-600" /> Teaching & Leadership Initiatives
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Leadership & Mentoring
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Academic mentoring, university teaching assistantship, literacy campaigns, and community education.
          </p>
          <div className="w-24 h-1.5 bg-blue-900 rounded" />
        </div>

        {/* Sub-tabs Selection Header */}
        <div className="flex border-b border-slate-200 mb-8 bg-white p-1.5 rounded-xl shadow-sm border max-w-md">
          <button
            onClick={() => setActiveTab("yts")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "yts"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Plaksha YTS Teaching Assistant
          </button>
          <button
            onClick={() => setActiveTab("readtolead")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "readtolead"
                ? "bg-blue-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Read to Lead (VP)
          </button>
        </div>

        {/* TAB 1: Plaksha YTS */}
        {activeTab === "yts" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mb-2 inline-block">
                  Teaching Assistant · Plaksha University & Harvard Medical School Faculty Invitation
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Plaksha University | Teaching Assistant, Young Tech Scholars
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">Jun 2024 · Chandigarh, India</p>
              </div>
              <a
                href="https://plaksha.edu.in/hs/young-technology-scholars"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors self-start sm:self-auto"
              >
                YTS Program <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>
                Attending the{" "}
                <a
                  href="https://plaksha.edu.in/hs/young-technology-scholars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Young Tech Scholars
                </a>{" "}
                program at Plaksha University was a great learning experience for me. I was able to learn complex technical topics, and also apply them immediately through hands-on experimentation—tinkering with breadboards, sensors, motors, and chassis.
              </p>
              <p>
                The following summer, when I was invited back as a Teaching Assistant, I was tasked with mentoring 80+ students. I taught them about the complexities of ESP-32 micro-controllers and transmission of signals for teleoperation bots, which proved far more challenging than I first expected. When students asked me thought-provoking questions, it forced me to go to the depths of my understanding. I also had to tailor my approach to different students: some with textbooks, some with videos, and some by doing and failing. Guiding students through this process instilled in me a lifelong love for mentoring and reinforced my commitment to making technology more accessible to others.
              </p>
            </div>
          </section>
        )}

        {/* TAB 2: Read to Lead */}
        {activeTab === "readtolead" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 mb-2 inline-block">
                Aug 2024 – Present · Singapore American School
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Read to Lead | Vice President
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Within my immediate school community, I served as Vice President of Read to Lead, where I partnered with the Singapore National Library Board to launch monthly literacy workshops, reaching 100+ young readers through interactive sessions. I co-designed a curriculum and initiated a book drive to provide underprivileged children with access to 500+ books.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
