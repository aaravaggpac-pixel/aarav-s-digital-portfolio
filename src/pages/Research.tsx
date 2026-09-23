import { useState } from "react";
import { BookOpen, ExternalLink, FileText, Download } from "lucide-react";

type ResTab = "ipl" | "roof" | "biocell" | "acoustic";

export default function Research() {
  const [activeTab, setActiveTab] = useState<ResTab>("ipl");

  const tabs: { id: ResTab; label: string }[] = [
    { id: "ipl", label: "IPL Batting Archetypes (NHSJS)" },
    { id: "roof", label: "Roof of Hope (IC2UHI 2026)" },
    { id: "biocell", label: "Plant-extract based bio-battery" },
    { id: "acoustic", label: "Acoustic Metamaterials" },
  ];

  return (
    <div className="relative isolate min-h-screen py-12 text-label sm:py-16">
      <div data-reveal-root className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-label/[0.05] border border-separator text-label text-[0.76rem] font-medium min-h-[44px]">
            <BookOpen className="w-3.5 h-3.5 text-label-secondary" /> Peer-Reviewed Publications & Patents
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-label">
            Research & Publications
          </h1>
          <p className="text-label-secondary text-sm sm:text-base max-w-3xl leading-relaxed">
            Published research papers, conference presentations, design patents, and physics modeling.
          </p>
          <div className="w-24 h-1.5 bg-accent rounded" />
        </div>

        {/* Sub-tabs Selection Header */}
        <div className="flex flex-wrap gap-2 mb-8 glass-card p-1.5 rounded-xl border border-white/70 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-accent text-white "
                  : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: IPL Batting Archetypes */}
        {activeTab === "ipl" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Published Paper · NHSJS 2026
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-label">
                  Batting Archetypes and Team Success: Analyzing the Role Composition of Teams in Indian Premier League Using Machine Learning
                </h2>
                <p className="text-xs text-label-secondary font-medium mt-1">Author: Aarav Aggarwal</p>
              </div>
              <a
                href="https://nhsjs.com/2026/batting-archetypes-and-team-success-analyzing-the-role-composition-of-teams-in-indian-premier-league-using-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto shrink-0 min-h-[44px]"
              >
                View Published Paper <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-label-secondary text-sm leading-relaxed">
              Published at <strong>The National High School Journal of Science (NHSJS)</strong>. Analyzed IPL player performance using K-Means clustering, Principal Component Analysis (PCA), and Linear Regression models to evaluate role composition and squad balance in T20 cricket.
            </p>

            <div className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-tile-lg p-4">
              <div>
                <p className="text-[0.82rem] font-semibold text-label">Direct Link</p>
                <p className="text-[0.78rem] text-label-secondary">nhsjs.com · The National High School Journal of Science</p>
              </div>
              <a
                href="https://nhsjs.com/2026/batting-archetypes-and-team-success-analyzing-the-role-composition-of-teams-in-indian-premier-league-using-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="pill inline-flex min-h-[44px] shrink-0 items-center gap-2 bg-accent px-5 text-[0.82rem] font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                Read the paper
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </section>
        )}

        {/* TAB 2: Roof of Hope IC2UHI Conference */}
        {activeTab === "roof" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Invited Conference Presentation · Sept 2026
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-label">
                  7th International Conference on Countermeasures to Urban Heat Islands
                </h2>
              </div>
              <a
                href="https://www.ic2uhi2026.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto shrink-0 min-h-[44px]"
              >
                ic2uhi2026.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              Findings from Roof of Hope were submitted to the{" "}
              <a href="https://www.ic2uhi2026.com/" target="_blank" rel="noopener noreferrer" className="text-label font-semibold underline underline-offset-[3px] decoration-label/25 hover:decoration-label">
                7th International Conference on Countermeasures to Urban Heat Islands (IC2UHI 2026)
              </a>
              , Nanjing, China · September 22–25, 2026. Invited to present findings.
            </p>
            <p className="text-label-secondary text-sm leading-relaxed">
              Evaluating the thermal reductions (~20°C surface, 4-11°C ceiling) and social impacts of cool roof installations across 100 low-income households in Delhi, in collaboration with partners including{" "}
              <a href="https://plaksha.edu.in/center-for-clean-energy" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Indorama Ventures Center for Clean Energy</a>,{" "}
              <a href="https://www.mahilahousingtrust.org/" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Mahila Housing Trust</a>, and{" "}
              <a href="https://www.nagarro.com/en/industries/nonprofit-and-education" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Nagarro</a>.
            </p>
          </section>
        )}

        {/* TAB 3: Aloe Vera Bio-Cell Patent */}
        {activeTab === "biocell" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Design Patent Application Filed
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-label">
                Plant-extract based bio-battery
              </h2>
              <p className="text-xs text-label-secondary mt-1">
                Zinc-Copper Bio-Cell Battery Using Aloe Vera Polysaccharide Electrolyte
              </p>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              Research on eco-friendly battery systems utilizing plant-extract (natural Aloe Vera gel) electrolyte matrices in a Zinc-Copper galvanic cell.
            </p>
            <div className="bg-label/[0.03] p-4 rounded-xl border border-white/70 space-y-1 text-xs font-mono text-label">
              <p className="font-bold text-label font-sans">Patent Numbers:</p>
              <p>Design Application: 497516-001</p>
              <p>Design Application: 497539–001</p>
              <p>Design Application: 497540-001</p>
            </div>
          </section>
        )}

        {/* TAB 4: Acoustic Metamaterials */}
        {activeTab === "acoustic" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Acoustic Metamaterials Study
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-label">
                Acoustic Metamaterials Noise-Barrier Modeling
              </h2>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              Mentored by Dr. Nishchal Dwivedi, IIT Bombay Postdoctoral Fellow. Modeled 1,020 noise-barrier configurations — concrete-air gap stack outperformed an equal-weight solid wall by 4.3 dB in blocking urban traffic noise.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
