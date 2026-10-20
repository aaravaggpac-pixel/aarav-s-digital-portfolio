import { useState } from "react";
import { Cpu, ExternalLink, FileText, Download } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { bioCellPhotos, mtsiPhotos } from "@/lib/galleries";

type TabType = "datapitch" | "mtsi" | "biocell" | "acoustic" | "plaksha" | "mynzo" | "ceew";

export default function EngineeringTechnology() {
  const [activeTab, setActiveTab] = useState<TabType>("datapitch");

  const projectTabs: { id: TabType; label: string }[] = [
    { id: "datapitch", label: "DataPitch ML" },
    { id: "mtsi", label: "Penn M&TSI" },
    { id: "biocell", label: "Plant-extract based bio-battery" },
    { id: "acoustic", label: "Acoustic Metamaterials" },
    { id: "plaksha", label: "Teleoperation Robot" },
  ];

  const internshipTabs: { id: TabType; label: string }[] = [
    { id: "mynzo", label: "Mynzo Carbon Internship" },
    { id: "ceew", label: "CEEW Internship" },
  ];

  const tabButtonClass = (id: TabType) =>
    `px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
      activeTab === id
        ? "bg-accent text-white "
        : "text-label-secondary hover:text-label hover:bg-label/[0.04]"
    }`;

  return (
    <div className="relative isolate min-h-screen py-12 text-label sm:py-16">
      <div data-reveal-root className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-label/[0.05] border border-separator text-label text-[0.76rem] font-medium min-h-[44px]">
            <Cpu className="w-3.5 h-3.5 text-label" /> Engineering & Tech Projects
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-label">
            Engineering & Technology
          </h1>
          <p className="text-label-secondary text-sm sm:text-base max-w-3xl leading-relaxed">
            Machine learning computer vision pipelines, robotics teleoperation prototypes, bio-electrochemical energy storage patents, and acoustic noise-barrier simulations.
          </p>
          <div className="w-24 h-1.5 bg-accent rounded" />
        </div>

        {/* Row 1: Projects */}
        <div className="mb-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-label-secondary mb-2 px-1">Projects</p>
          <div className="flex flex-wrap gap-2 glass-card p-1.5 rounded-xl border border-white/70 ">
            {projectTabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={tabButtonClass(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Internships */}
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-label-secondary mb-2 px-1">Internships</p>
          <div className="flex flex-wrap gap-2 glass-card p-1.5 rounded-xl border border-white/70 ">
            {internshipTabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={tabButtonClass(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB: DataPitch */}
        {activeTab === "datapitch" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Oct 2024 – Present · Innovation Project
                </span>
                <h2 className="text-2xl font-bold text-label">
                  DataPitch | Developer — Data Preprocessing, Visualizing, ML Algorithms
                </h2>
              </div>
              <a
                href="https://nhsjs.com/2026/batting-archetypes-and-team-success-analyzing-the-role-composition-of-teams-in-indian-premier-league-using-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto min-h-[44px]"
              >
                NHSJS Publication Link <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-label-secondary text-sm leading-relaxed">
              I started DataPitch, a data science research project to predict team win percentage in the Indian Premier League (IPL), one of the world’s largest professional T20 cricket leagues, by analyzing team composition and batting archetypes rather than individual star performance.
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm text-label-secondary leading-relaxed">
              <li>Scraped, cleaned, and engineered features from 240k+ ball-by-ball deliveries (2008–2023)</li>
              <li>Applied Principal Component Analysis (PCA) to reduce 19 batting metrics into interpretable style dimensions and k-means clustering to identify four data-driven batting archetypes</li>
              <li>Modeled the relationship between team archetype composition and seasonal win percentage using OLS regression, revealing that balanced combinations of stable and explosive roles are consistently associated with higher team success</li>
            </ul>

            <div className="bg-label/[0.03] p-4 rounded-xl border border-white/70 space-y-2">
              <h3 className="text-[0.76rem] font-medium text-label-secondary">Publication Details</h3>
              <p className="text-xs text-label-secondary leading-relaxed">
                Research paper <em>“Batting Archetypes and Team Success: Analyzing the Role Composition of Teams in Indian Premier League Using Machine Learning”</em> published at The National High School Journal of Science.
              </p>
              <a
                href="https://nhsjs.com/2026/batting-archetypes-and-team-success-analyzing-the-role-composition-of-teams-in-indian-premier-league-using-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-label underline underline-offset-[3px] decoration-label/25 hover:decoration-label flex items-center gap-1"
              >
                Read Paper on NHSJS <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        )}

        {/* TAB: Penn M&TSI */}
        {activeTab === "mtsi" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  University of Pennsylvania · Summer Institute
                </span>
                <h2 className="text-2xl font-bold text-label">
                  Management and Technology Summer Institute (M&TSI)
                </h2>
              </div>
              <a
                href="https://fisher.wharton.upenn.edu/management-technology-summer-institute/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto min-h-[44px]"
              >
                Wharton M&TSI <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              Attended the highly selective{" "}
              <a
                href="https://fisher.wharton.upenn.edu/management-technology-summer-institute/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-label font-semibold underline underline-offset-[3px] decoration-label/25 hover:decoration-label"
              >
                Management and Technology Summer Institute
              </a>{" "}
              at University of Pennsylvania. Worked on interdisciplinary technology prototyping, commercial management, and product launch validation.
            </p>

            <div className="space-y-3 border-t border-white/60 pt-5">
              <h3 className="text-sm font-bold text-label">StayTray</h3>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                StayTray is an active, attachable stabilization platform designed to reduce food and beverage spills in moving vehicles. Our current prototype uses an inertial measurement unit (IMU), a microcontroller, and servo motors to demonstrate two-axis stabilization. The IMU detects changes in acceleration and orientation, while the microcontroller processes this information and commands the servos to adjust the tray. This prototype allows us to test our sensing, control, and stabilization concept, but it is not the final product we intend to commercialize.
              </p>
              <p className="text-label-secondary text-sm leading-relaxed text-pretty">
                The planned commercial version will use a six-servo Stewart-platform design. The six linkages are intended to distribute the supported load and allow smoother, more precise platform corrections than the current prototype. The mechanical components will be enclosed in a compact exterior casing, and the upper platform will support cups, bowls, plates, and takeout containers. A secure cupholder or lap-mounting system and a removable, cleanable upper tray are also planned. Our $79.99 price and go-to-market strategy are based on this planned commercial product. Response speed, stabilization accuracy, supported weight, battery life, and final dimensions will be determined through additional testing rather than presented as validated specifications.
              </p>
            </div>
            <div className="border-t border-white/60 pt-7">
              <Gallery title="Build photos" images={mtsiPhotos} aspect="portrait" />
            </div>
          </section>
        )}

        {/* TAB: Plant-extract based bio-battery */}
        {activeTab === "biocell" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label-secondary uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Design Patent Filed
              </span>
              <h2 className="text-2xl font-bold text-label">
                Plant-extract based bio-battery
              </h2>
              <p className="text-sm text-label-secondary mt-1">
                Zinc-Copper Bio-Cell Battery Using Aloe Vera Polysaccharide Electrolyte
              </p>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              This research was aimed at investigating non-toxic environmental alternatives to commonly used toxic battery electrolytes and examining applicability to low-power systems for sustainable agricultural systems.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-label-secondary leading-relaxed">
              <li>Examined electrochemical properties of organic electrolytes of plant origin such as aloe vera gel and orange peel extract, in terms of ionic conductivity and voltage generation under simple electrochemical cells</li>
              <li>Used zinc and copper as the electrodes to develop a bio-electrochemical cell</li>
              <li>Monitored output voltage and short-term stability over several days and observed qualitative trends based on voltage consistency under identical conditions</li>
              <li>Aloe vera based electrolyte demonstrated relatively more stable voltage patterns, which can be explained by its high mucilage and polysaccharide content that forms a mucous medium in which ions move steadily</li>
            </ul>
            <p className="text-label-secondary text-sm leading-relaxed">
              I aim to carry this forward and investigate replacing liquid electrolytes with semi-solid/solid-state bio-electrolytes to enhance mechanical stability and minimize leakage, by structurally stabilizing the aloe vera polysaccharides on natural binders. Additionally, I will investigate the feasibility of integrating these bio-cells with ultra-low-power IoT-based agricultural sensors to assess their potential application within sustainable farming systems.
            </p>
            <div className="bg-label/[0.03] p-5 rounded-xl border border-white/70 space-y-2 text-xs font-mono text-label">
              <h3 className="font-bold text-label font-sans text-sm">Patent Application Numbers</h3>
              <p>Design Application: 497516-001</p>
              <p>Design Application: 497539–001</p>
              <p>Design Application: 497540-001</p>
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
            <div className="border-t border-white/60 pt-7">
              <Gallery title="Prototype gallery" images={bioCellPhotos} aspect="portrait" />
            </div>
          </section>
        )}

        {/* TAB: Acoustic Metamaterials */}
        {activeTab === "acoustic" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/60 pb-4">
              <span className="text-xs font-bold text-label-secondary uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                Physics & Material Science Research
              </span>
              <h2 className="text-2xl font-bold text-label">
                Researcher — Acoustic Metamaterials
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

        {/* TAB: Teleoperation Robot */}
        {activeTab === "plaksha" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Jun 2023 · Plaksha University, Chandigarh
                </span>
                <h2 className="text-2xl font-bold text-label">
                  Teleoperation Robot — Young Technology Scholars
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 self-start sm:self-auto">
                <a
                  href="https://plaksha.edu.in/hs/young-technology-scholars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors min-h-[44px]"
                >
                  YTS Program <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/docs/YTS_Plaksha_June2023.pdf"
                  download="YTS_Plaksha_June2023_Certificate.pdf"
                  className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors min-h-[44px]"
                >
                  <Download className="w-3.5 h-3.5" /> Download Certificate
                </a>
              </div>
            </div>
            <p className="text-label-secondary text-sm leading-relaxed">
              I was selected for the{" "}
              <a
                href="https://plaksha.edu.in/hs/young-technology-scholars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-label font-semibold underline underline-offset-[3px] decoration-label/25 hover:decoration-label"
              >
                YTS program
              </a>{" "}
              in 2023, which is a highly selective summer program for high school students interested in interdisciplinary hands-on STEM projects.
            </p>
            <p className="text-label-secondary text-sm leading-relaxed">
              I designed and built a hand-controlled remote teleoperation robot designed to move in response to human hand movements. The robot was constructed using a four-wheel chassis with motors, a motor driver, multiple battery packs, and an ESP32 board. A gyroscope sensor captured three-dimensional orientation data from a handheld controller, which was translated into directional movement of the robot. The robot was programmed using Arduino language and C++ for the ESP32, with a focus on reading gyroscope values, calibrating control parameters through trial and error, and transmitting commands wirelessly. I explored multiple transmission methods, including Wi-Fi (MQTT), Bluetooth, and radio frequency communication, to achieve reliable control. The final robot demonstrated smooth motion and good performance.
            </p>
          </section>
        )}

        {/* TAB: Mynzo Carbon Internship */}
        {activeTab === "mynzo" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  Jun – Jul 2025 · Internship
                </span>
                <h2 className="text-2xl font-bold text-label">
                  Mynzo Carbon Internship — Computer Vision, Sustainability Analytics
                </h2>
              </div>
              <a
                href="https://www.mynzocarbon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors self-start sm:self-auto min-h-[44px]"
              >
                mynzocarbon.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-label-secondary text-sm leading-relaxed">
              <a href="https://www.mynzocarbon.com/" target="_blank" rel="noopener noreferrer" className="text-label font-semibold underline underline-offset-[3px] decoration-label/25 hover:decoration-label">Mynzo Carbon</a> is a climate-technology company working at the intersection of carbon sequestration, sustainability analytics, and nature-based climate solutions. I secured an internship with them in June/July.
            </p>

            <div className="bg-label/[0.03] p-5 rounded-xl border border-white/70 space-y-3 text-sm text-label-secondary">
              <h3 className="font-bold text-label">Role and Technical Contributions</h3>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed">
                <li>Tasked with developing an automated approach for tree species identification from leaf images to support more accurate sequestration analysis in forested areas</li>
                <li>Developed a plant species classification pipeline using leaf images, capturing differences in species-level carbon sequestration potential and their relevance to forest-level carbon assessment</li>
                <li>Built a custom image dataset manually, sourcing and validating ~250 leaf images across 10 plant species, ensuring geographic and visual consistency with field samples</li>
                <li>Iteratively trained and tested a Convolutional Neural Network (CNN), ultimately leveraging MobileNetV2 (transfer learning) to achieve high precision</li>
                <li>Refined training parameters, size of dataset, and train/test splits through iterations, achieving ~85% classification accuracy. Applied the trained model to real forest sample images, enabling scalable species identification without manual human intervention</li>
              </ul>
            </div>
          </section>
        )}

        {/* TAB: CEEW Internship */}
        {activeTab === "ceew" && (
          <section className="glass-card rounded-2xl p-6 sm:p-10 border border-white/70 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/60 pb-4">
              <div>
                <span className="text-xs font-bold text-label-secondary uppercase tracking-wider bg-label/[0.04] px-2.5 py-1 rounded border border-separator mb-2 inline-block">
                  15 – 30 Jun 2026 · Climate Resilience Internship
                </span>
                <h2 className="text-2xl font-bold text-label">
                  Council on Energy, Environment and Water (CEEW)
                </h2>
                <p className="text-sm text-label-secondary mt-1">
                  Research Intern · Climate Resilience Programme · New Delhi
                </p>
              </div>
              <div className="flex flex-wrap gap-2 self-start sm:self-auto">
                <a
                  href="https://www.ceew.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors min-h-[44px]"
                >
                  ceew.in <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/docs/CEEW-Internship-Offer-Letter-Aarav-12Jun26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors min-h-[44px]"
                >
                  <FileText className="w-3.5 h-3.5" /> View Offer Letter PDF
                </a>
              </div>
            </div>

            <p className="text-label-secondary text-sm leading-relaxed">
              Selected for a research internship with the{" "}
              <a href="https://www.ceew.in/" target="_blank" rel="noopener noreferrer" className="text-label font-semibold underline underline-offset-[3px] decoration-label/25 hover:decoration-label">
                Council on Energy, Environment and Water (CEEW)
              </a>{" "}
              — one of Asia’s leading not-for-profit policy research institutions and among the world’s top climate think tanks. Working with the <strong>Climate Resilience</strong> team under Programme Associate Mr Shravan Prabhu.
            </p>

            <div className="bg-label/[0.03] p-5 rounded-xl border border-white/70 space-y-3 text-sm text-label-secondary">
              <h3 className="font-bold text-label">Role Focus</h3>
              <p className="text-xs leading-relaxed">
                Supporting field research and data collection that advances India’s heat resilience agenda — designing and administering household and community surveys, cleaning and organising collected data, and conducting basic quantitative analysis to support the team’s research outputs.
              </p>
              <h3 className="font-bold text-label pt-2">Primary Responsibilities</h3>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Assist in designing primary survey instruments on heat exposure, vulnerability, and coping behaviour</li>
                <li>Support field data collection, enumerator coordination, and data-quality checks</li>
                <li>Clean and maintain survey datasets; run descriptive analysis (distributions, cross-tabs, summary stats)</li>
                <li>Contribute desktop research and literature reviews on survey methodology and heat vulnerability indicators</li>
                <li>Help draft research notes, briefs, and presentation materials for team meetings and workshops</li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
