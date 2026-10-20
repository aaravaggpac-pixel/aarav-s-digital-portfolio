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

            <div className="space-y-2.5 border-t border-white/60 pt-5">
              <h3 className="text-sm font-bold text-label">Abstract</h3>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The IPL&rsquo;s rapid evolution into a faster and more competitive format has made traditional batting metrics insufficient for informed team selection. As batting styles become varied, averages and strike rates no longer capture the full range of player roles. This study examines how a team&rsquo;s batting-role composition influences win rates in the Indian Premier League (IPL). Machine learning algorithms were applied to a ball-by-ball dataset of 240,000 deliveries across sixteen seasons (2008&ndash;2023). Nineteen batting features including scoring tempo, consistency, boundary frequency, dot-ball percentage were analysed to identify underlying performance patterns. Principal Component Analysis (PCA) and k-means clustering revealed four batting archetypes: low baseline contributors, stable accumulators, explosive accelerators, and solid contributors. Season-level team success was evaluated by projecting meaningful player-season records (&ge;50 balls faced) into the PCA&ndash;cluster space to quantify each team&rsquo;s archetype composition. This was then regressed against win percentage using Ordinary Least Squares (OLS). Although explanatory power was modest (R² = 0.143 in-sample, F-statistic of 4.044, p = 0.00447), C1 and C2 players showed positive associations with win percentage (β = 3.06; β = 0.99), while C0 players were negatively associated. Granular analysis of the top predicted team compositions demonstrated a consistent preference for lineups balancing the stability of Cluster 1 players with the explosiveness of Cluster 2 players, supported by adaptable Cluster 3 contributors. This balance emerged as the central insight in effective team composition. Future analyses may integrate additional bowling, fielding, and match-condition variables to achieve more refined evaluations of team performance.
              </p>
            </div>

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
              Evaluating the thermal reductions (~20°C surface, 4-11°C ceiling) and social impacts of cool roof installations in low-income households in Delhi, in collaboration with partners including{" "}
              <a href="https://plaksha.edu.in/center-for-clean-energy" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Indorama Ventures Center for Clean Energy</a>,{" "}
              <a href="https://www.mahilahousingtrust.org/" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Mahila Housing Trust</a>, and{" "}
              <a href="https://www.nagarro.com/en/industries/nonprofit-and-education" target="_blank" rel="noopener noreferrer" className="text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Nagarro</a>.
            </p>

            <div className="space-y-2.5 border-t border-white/60 pt-5">
              <h3 className="text-sm font-bold text-label">Abstract</h3>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                India&rsquo;s rapid urbanization, coupled with intensifying heatwaves, poses critical risks to human health, particularly in low-income informal settlements. These communities face compounded vulnerabilities from climate change and the Urban Heat Island (UHI) effect, resulting in heightened indoor thermal stress. Cool roofs offer a cost-effective and low-carbon solution to reduce heat exposure. This study assesses the thermal and social impacts of cool roof installations in the Bakkarwala Resettlement Colony, a marginalized community in West Delhi.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The study site comprised low-income households where families of about five live in 15&ndash;25&nbsp;m² single-room homes with metal or cement roofs. With indoor wall temperatures frequently exceeding 38&nbsp;°C, average monthly incomes of ₹10,000&ndash;12,000 (USD 115&ndash;130) and no access to air conditioning, residents rely on fans and ventilation, making them highly vulnerable to extreme heat and ideal for assessing low-cost cooling solutions such as cool roofs. A total of 100 homes were equipped with high-reflectivity, UV-resistant, waterproof white tarpaulin sheets in two phases (May and June 2025). Sensors placed over and under ceiling, and on indoor walls, measured thermal readings in 4 selected homes. Data was collected for 10 days pre and post-intervention along with local weather data.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                Findings reveal a significant reduction of &asymp;&nbsp;20&nbsp;°C in over-deck surface temperatures (measured using IR camera), 4&ndash;11&nbsp;°C in under-deck ceiling temperatures, and 1&ndash;3&nbsp;°C in indoor wall temperatures. Structured surveys and qualitative interviews (98% response rate) confirmed improvements in thermal comfort, sleep quality, daily activities, and self-reported health. Over 95% of surveyed households reported positive outcomes, with respondents willing to partially pay for the roof installation.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The results underscore the potential of low-cost cool roofs as an effective climate adaptation strategy for vulnerable populations. The roofs were found to be durable under local weather conditions, with most installation and maintenance handled by community and residents using basic tools. We advocate for integration of cool roofs into climate-resilient urban planning, advancing SDGs 13, 11 and 9.4.
              </p>
            </div>
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

            <div className="space-y-2.5 border-t border-white/60 pt-5">
              <h3 className="text-sm font-bold text-label">Abstract</h3>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The need for sustainable energy storage has prompted the study of bio-derived electrolytes as a substitute for traditional battery systems. This paper compares aloe vera and orange peel extracts as natural electrolytes in a 3-compartment copper-zinc electrochemical cell. Voltage output and stability of the electrolytes were analyzed and compared across five dilution ratios (1:1&ndash;1:5) under constant conditions. Plant extracts were prepared by blending, dilution with distilled water, and filtration to obtain aqueous electrolytes. Voltage output was recorded on a digital multimeter over seven days to check the stability of the system.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The two electrolytes yielded measurable and sustained voltages, which suggested their potential use as natural electrolytes in electrochemical systems. The voltage output was not linearly related to the dilution. The greatest mean voltage was recorded with aloe vera at the 1:1 ratio (1.393&nbsp;V) and at the ratios of 1:2, 1:3, and 1:5 (1.280&ndash;1.294&nbsp;V). Orange peel achieved its best mean voltage with the most dilute 1:5 ratio (1.314&nbsp;V) and similar results at 1:1&ndash;1:3 (1.166&ndash;1.243&nbsp;V). The performance of both electrolytes was found to be lower at a 1:4 ratio.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The results show that the performance of the electrolytes depends on both concentration and properties, including ionic conductivity, viscosity, pH, and interaction with the electrodes. The results support the potential of plant-based electrolytes in Cu-Zn systems and emphasize the need to optimize dilution and composition to improve electrochemical performance.
              </p>
            </div>

            <div className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-tile-lg p-4">
              <div>
                <p className="text-[0.82rem] font-semibold text-label">Published Paper</p>
                <p className="text-[0.78rem] text-label-secondary">oxfordjss.org &middot; Oxford Journal of Scientific Studies, Sept 2026</p>
              </div>
              <a
                href="https://www.oxfordjss.org/sep-2026-vol-11-issue-5/comparative-analysis-of-aloe-vera-and-orange-peel-extracts-as-sustainable-electrolytes-in-a-copper%E2%80%93zinc-bio-electrochemical-cell"
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

        {/* TAB 4: Acoustic Metamaterials */}
        {activeTab === "acoustic" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label-secondary bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Acoustic Metamaterials Study
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-label">
                Impedance Contrast and Layer Geometry Control the Acoustic Bandgap of One-Dimensional Metamaterials for Urban Noise Reduction
              </h2>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              Mentored by Dr. Nishchal Dwivedi, IIT Bombay Postdoctoral Fellow. Modeled 1,020 noise-barrier configurations — concrete-air gap stack outperformed an equal-weight solid wall by 4.3 dB in blocking urban traffic noise.
            </p>

            <div className="space-y-3 border-t border-white/60 pt-5">
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                <strong className="text-label">Background and Objective.</strong> Road traffic noise sits mostly at a low frequency band of 100 and 1000 hertz, which makes it hard to block. Standard barriers mostly rely on mass based sound insulation, which makes them heavy and bulky. This study asked two questions. How do material contrast and layer geometry set the acoustic bandgap of a one-dimensional periodic metamaterial? Which material pairing blocks the urban noise band best?
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                <strong className="text-label">Methods.</strong> A transfer matrix model of a one-dimensional periodic structure consisting a stack of alternating dense and soft layers was written in Python. The model was checked against the analytic mass law, against Bragg reflector theory, and against an independent band structure calculation. It was then used to test 1020 designs across six material pairs, ten cell thicknesses from 5 to 100 millimetres, and seventeen thickness ratios. Each design used ten unit cells. Deep transmission loss was capped at a 60 decibel to maintain practical relevance and avoid unrealistic predictions.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                <strong className="text-label">Results.</strong> Bandgap width increased with impedance contrast with the fractional width rose from 1.22 for concrete &ndash; rubber configuration to 1.94 for concrete &ndash; air gap configuration. Bandgap center frequency fell as the cell grew thicker. A concrete and air gap stack of 114 kilograms per square metre opened a stop band from 173 to 3000 hertz. It exceeded an equal-mass solid wall by 4.3 decibels across the urban band.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                <strong className="text-label">Conclusions.</strong> Contrast and geometry give separate control of bandgap width and position. Light low-frequency blocking favours high-contrast designs. The lowest frequencies will need locally resonant elements in later work.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
