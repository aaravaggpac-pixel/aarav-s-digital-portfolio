import { useState } from "react";
import { Users, ExternalLink } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { ytsPhotos } from "@/lib/galleries";

type LeadTab = "yts" | "readtolead";

export default function LeadershipMentoring() {
  const [activeTab, setActiveTab] = useState<LeadTab>("yts");

  return (
    <div className="relative isolate min-h-screen py-12 text-label sm:py-16">
      <div data-reveal-root className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-label/[0.05] border border-separator text-label text-[0.76rem] font-medium min-h-[44px]">
            <Users className="w-3.5 h-3.5 text-label-secondary" /> Teaching & Leadership Initiatives
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-label">
            Leadership & Mentoring
          </h1>
          <p className="text-label-secondary text-sm sm:text-base max-w-3xl leading-relaxed">
            Academic mentoring, university teaching assistantship, literacy campaigns, and community education.
          </p>
          <div className="w-24 h-1.5 bg-accent rounded" />
        </div>

        {/* Sub-tabs Selection Header */}
        <div className="mb-8 flex max-w-md flex-wrap gap-2 rounded-xl border border-white/70 p-1.5 glass-card">
          <button
            onClick={() => setActiveTab("yts")}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "yts"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            Plaksha YTS Teaching Assistant
          </button>
          <button
            onClick={() => setActiveTab("readtolead")}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === "readtolead"
                ? "bg-accent text-white "
                : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
            }`}
          >
            Read to Lead (VP)
          </button>
        </div>

        {/* TAB 1: Plaksha YTS */}
        {activeTab === "yts" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Teaching Assistant · Plaksha University & Harvard Medical School Faculty Invitation
                </span>
                <h2 className="text-2xl font-bold text-label">
                  Plaksha University | Teaching Assistant, Young Tech Scholars
                </h2>
                <p className="text-xs text-label-secondary font-medium mt-1">Jun 2024 · Chandigarh, India</p>
              </div>
              <a
                href="https://plaksha.edu.in/hs/young-technology-scholars"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto min-h-[44px]"
              >
                YTS Program <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4 text-label-secondary text-sm leading-relaxed">
              <p>
                Attending the{" "}
                <a
                  href="https://plaksha.edu.in/hs/young-technology-scholars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label font-semibold underline underline-offset-[3px] decoration-label/25 hover:decoration-label"
                >
                  Young Tech Scholars
                </a>{" "}
                program at Plaksha University was a great learning experience for me. I was able to learn complex technical topics, and also apply them immediately through hands-on experimentation—tinkering with breadboards, sensors, motors, and chassis.
              </p>
              <p>
                The following summer, when I was invited back as a Teaching Assistant, I was tasked with mentoring 80+ students. I taught them about the complexities of ESP-32 micro-controllers and transmission of signals for teleoperation bots, which proved far more challenging than I first expected. When students asked me thought-provoking questions, it forced me to go to the depths of my understanding. I also had to tailor my approach to different students: some with textbooks, some with videos, and some by doing and failing. Guiding students through this process instilled in me a lifelong love for mentoring and reinforced my commitment to making technology more accessible to others.
              </p>
            </div>
            <div className="border-t border-white/60 pt-7">
              <Gallery title="From the cohort" images={ytsPhotos} aspect="portrait" />
            </div>
          </section>
        )}

        {/* TAB 2: Read to Lead */}
        {activeTab === "readtolead" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Aug 2024 – Present · Singapore American School
              </span>
              <h2 className="text-2xl font-bold text-label">
                Read to Lead | Vice President
              </h2>
            </div>

            <p className="text-label-secondary text-sm leading-relaxed">
              Within my immediate school community, I served as Vice President of Read to Lead, where I partnered with the Singapore National Library Board to launch monthly literacy workshops, reaching 100+ young readers through interactive sessions. I co-designed a curriculum and initiated a book drive to provide underprivileged children with access to 500+ books.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
