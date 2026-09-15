import { useState } from "react";
import { BookOpen, ExternalLink, FileText, Download } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

type ResTab = "ipl" | "roof" | "biocell" | "acoustic";

export default function Research() {
  useScrollToHash();
  const [activeTab, setActiveTab] = useState<ResTab>("ipl");

  const tabs: { id: ResTab; label: string }[] = [
    { id: "ipl", label: "IPL Batting Archetypes (NHSJS)" },
    { id: "roof", label: "Roof of Hope (IC2UHI 2026)" },
    { id: "biocell", label: "Plant-extract based bio-battery" },
    { id: "acoustic", label: "Acoustic Metamaterials" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" /> Peer-Reviewed Publications & Patents
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Research & Publications
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Published research papers, conference presentations, design patents, and physics modeling.
          </p>
          <div className="w-24 h-1.5 bg-blue-900 rounded" />
        </div>

        {/* Sub-tabs Selection Header */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-blue-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: IPL Batting Archetypes */}
        {activeTab === "ipl" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100 mb-2 inline-block">
                  Published Paper · NHSJS 2026
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Batting Archetypes and Team Success: Analyzing the Role Composition of Teams in Indian Premier League Using Machine Learning
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">Author: Aarav Aggarwal</p>
              </div>
              <a
                href="https://nhsjs.com/2026/batting-archetypes-and-team-success-analyzing-the-role-composition-of-teams-in-indian-premier-league-using-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors self-start sm:self-auto shrink-0"
              >
                View Published Paper <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Published at <strong>The National High School Journal of Science (NHSJS)</strong>. Analyzed IPL player performance using K-Means clustering, Principal Component Analysis (PCA), and Linear Regression models to evaluate role composition and squad balance in T20 cricket.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
              <span className="font-bold text-slate-900">Direct Link:</span>
              <p className="break-all font-mono text-blue-600">
                https://nhsjs.com/2026/batting-archetypes-and-team-success-analyzing-the-role-composition-of-teams-in-indian-premier-league-using-machine-learning
              </p>
            </div>
          </section>
        )}

        {/* TAB 2: Roof of Hope IC2UHI Conference */}
        {activeTab === "roof" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 mb-2 inline-block">
                  Invited Conference Presentation · Sept 2026
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7th International Conference on Countermeasures to Urban Heat Islands
                </h2>
              </div>
              <a
                href="https://www.ic2uhi2026.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors self-start sm:self-auto shrink-0"
              >
                ic2uhi2026.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Findings from Roof of Hope were submitted to the{" "}
              <a href="https://www.ic2uhi2026.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                7th International Conference on Countermeasures to Urban Heat Islands (IC2UHI 2026)
              </a>
              , Nanjing, China · September 22–25, 2026. Invited to present findings.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Evaluating the thermal reductions (~20°C surface, 4-11°C ceiling) and social impacts of cool roof installations across 100 low-income households in Delhi, in collaboration with partners including{" "}
              <a href="https://plaksha.edu.in/center-for-clean-energy" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Indorama Ventures Center for Clean Energy</a>,{" "}
              <a href="https://www.mahilahousingtrust.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Mahila Housing Trust</a>, and{" "}
              <a href="https://www.nagarro.com/en/industries/nonprofit-and-education" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Nagarro</a>.
            </p>
          </section>
        )}

        {/* TAB 3: Aloe Vera Bio-Cell Patent */}
        {activeTab === "biocell" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mb-2 inline-block">
                Design Patent Application Filed
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Plant-extract based bio-battery
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Zinc-Copper Bio-Cell Battery Using Aloe Vera Polysaccharide Electrolyte
              </p>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Research on eco-friendly battery systems utilizing plant-extract (natural Aloe Vera gel) electrolyte matrices in a Zinc-Copper galvanic cell.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs font-mono text-slate-800">
              <p className="font-bold text-slate-900 font-sans">Patent Numbers:</p>
              <p>Design Application: 497516-001</p>
              <p>Design Application: 497539–001</p>
              <p>Design Application: 497540-001</p>
            </div>
          </section>
        )}

        {/* TAB 4: Acoustic Metamaterials */}
        {activeTab === "acoustic" && (
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100 mb-2 inline-block">
                Acoustic Metamaterials Study
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Acoustic Metamaterials Noise-Barrier Modeling
              </h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Mentored by Dr. Nishchal Dwivedi, IIT Bombay Postdoctoral Fellow. Modeled 1,020 noise-barrier configurations — concrete-air gap stack outperformed an equal-weight solid wall by 4.3 dB in blocking urban traffic noise.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
