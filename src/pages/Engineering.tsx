
export default function Engineering() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Engineering & Technology Experience</h1>
      <div className="w-32 h-1 bg-primary mb-8 sm:mb-10" />

      <div className="space-y-10 sm:space-y-12">
        {/* Mynzo Carbon */}
        <section id="mynzo" className="border-l-4 border-primary pl-4 sm:pl-6">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">AI & Climate-Tech Internship — Mynzo Carbon</h2>
          <p className="text-sm text-muted-foreground mb-3">Climate-tech Startup · July 2025</p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Mynzo Carbon is a firm that develops tailored forest intelligence solutions using satellite remote sensing and machine learning for use by enterprises and individuals for accurate and impact-driven carbon assessments. I was tasked with automating the identification of tree species to calculate biomass with higher accuracy.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-3">
            <li>Built and trained a Convolutional Neural Network (CNN) using TensorFlow and Keras with transfer learning (ResNet50), fine-tuned on a dataset of indigenous Indian flora</li>
            <li>Achieved 85% validation accuracy, significantly reducing the manual labor required for carbon project site assessments</li>
            <li>Assisted in integrating the model into a mobile interface, allowing field agents to photograph a plant and receive an instant estimate of its carbon sequestration potential</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            While I learned a lot about machine learning in this internship, I also learned how to go about mapping out and solving a problem independently, creating a structure that worked, collaborating with others, and documenting my work in a way anyone can understand.
          </p>
          <a href="/docs/Inspirit_AI_Certificate.pdf" target="_blank" className="text-primary text-sm hover:underline">View Certificate →</a>
        </section>

        {/* M&TSI */}
        <section id="mtsi" className="border-l-4 border-primary pl-4 sm:pl-6">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">M&TSI — Management & Technology Summer Institute (Summer 2026)</h2>
          <p className="text-sm text-muted-foreground mb-3">University of Pennsylvania · Summer 2026</p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Selected for the highly competitive M&TSI program at the University of Pennsylvania, which brings together students at the intersection of management, technology, and innovation. The program focuses on entrepreneurial thinking, venture design, and the application of emerging technologies to real-world challenges.
          </p>
          <h3 className="font-bold text-foreground text-sm mb-2">Related Activities & Roles</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-3">
            <li><strong>Founder, Roof of Hope (2025–Present):</strong> Designed and deployed cool-roof solutions across 100 homes in Delhi; scaling to 1,000 with CSR partnerships. Invited to present at IC2UHI 2026.</li>
            <li><strong>Developer, DataPitch (2025):</strong> Built an end-to-end ML pipeline predicting IPL outcomes through player archetypes using PCA, K-means clustering, and OLS regression. Paper under review at NHSJS.</li>
            <li><strong>Researcher, Sustainable Energy Systems:</strong> Investigated organic electrolytes (aloe vera gel, orange peel extract) for low-cost bio-electrochemical cells targeting IoT agricultural sensors.</li>
            <li><strong>Young Tech Scholars, Plaksha University (2023):</strong> Designed and built a hand-controlled teleoperation robot using ESP32, gyroscope sensors, and multiple wireless protocols (Wi-Fi/MQTT, Bluetooth, RF).</li>
            <li><strong>AI Intern, Mynzo Carbon (2025):</strong> Built a CNN model (ResNet50 transfer learning) for automated tree species identification achieving 85% accuracy.</li>
          </ul>
          <h3 className="font-bold text-foreground text-sm mb-2">Community Leadership & Civic Engagement</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-3">
            <li>Led a team of 15 local volunteers for Roof of Hope deployment, partnering with Indorama Ventures Center for Clean Energy for data collection</li>
            <li>Launched Cool Play: raised USD 1,000+ and distributed 60+ cooling jackets to underprivileged athletes</li>
            <li>Teaching Assistant at Plaksha University — mentored 80+ students on robotics and embedded programming</li>
            <li>Vice President, Read to Lead — partnered with Singapore National Library Board for monthly literacy workshops reaching 100+ young readers</li>
            <li>Head of Logistics, Stumps & Stories — organized cricket tournament honouring 100+ migrant workers, contributed to $5,000 fundraising effort</li>
          </ul>
          <h3 className="font-bold text-foreground text-sm mb-2">Academic Honors & Awards</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
            <li>National Athlete, U16 Singapore Cricket Team — ACC Championship Runner-Up (10 nations)</li>
            <li>MUN: Best Delegate (×2), Most Diplomatic (×2)</li>
            <li>Invited presenter at IC2UHI 2026 International Conference</li>
            <li>TA, Young Tech Scholars 2024 — position usually reserved for university-level students</li>
            <li>Rho Kappa (National Social Sciences Honor Society) inductee</li>
            <li>TIMO Silver (2022), Bronze (2023)</li>
            <li>Elaine Hobson Essay Competition Winner (2024) — "Ripple Effect"</li>
            <li>Scholars List (Grades 9, 10, 11) — GPA 4.0+</li>
            <li>AP Scholar Award</li>
          </ul>
        </section>

        {/* DataPitch */}
        <section id="datapitch" className="border-l-4 border-primary pl-4 sm:pl-6">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">DataPitch — Predicting IPL Outcomes through Player Archetypes</h2>
          <p className="text-sm text-muted-foreground mb-3">Developer — Data Preprocessing, ML Algorithms · Oct 2024 – Present</p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Cricket and data have shaped my thinking from an early age. I started DataPitch to combine these two passions — using data science to answer strategic questions about cricket that traditional statistics fail to address. I focused my analysis on the Indian Premier League (IPL), one of the most competitive and data-rich T20 leagues globally.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-3">
            <li>Used IPL ball-by-ball and match-level data spanning 16 seasons (2008–2023), comprising over 240,000 recorded deliveries</li>
            <li>Engineered 20+ batting performance variables capturing scoring tempo, boundary frequency, dot-ball control, volatility, and phase-specific effectiveness</li>
            <li>Applied PCA to reduce dimensionality while preserving variance and interpretability</li>
            <li>Used K-means clustering (validated via silhouette analysis and elbow method) to reveal distinct batting archetypes</li>
            <li>Aggregated player-season archetypes into team-season role compositions linked to win percentage using OLS regression</li>
            <li>Paper authored under supervision of a Yale University alumnus — under peer review at The National High School Journal of Science (NHSJS)</li>
          </ul>
        </section>

        {/* Teleoperation Robot */}
        <section id="yts" className="border-l-4 border-primary pl-4 sm:pl-6">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">Teleoperation Robot Prototype — Young Tech Scholars (2023)</h2>
          <p className="text-sm text-muted-foreground mb-3">Young Tech Scholars, Plaksha University · Summer 2023</p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Selected for the highly competitive YTS program at Plaksha University. I designed and built a hand-controlled remote teleoperation robot that moves in response to human hand movements using a four-wheel chassis with four motors, a motor driver, multiple battery packs, and an ESP32 board.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-3">
            <li>Gyroscope sensor captured 3D orientation data from a handheld controller, translated into directional robot movement</li>
            <li>Worked extensively on breadboard connections, motor integration, and power management for stable operation</li>
            <li>Programmed using Arduino language and C++ for the ESP32, with focus on reading gyroscope values and calibrating control parameters</li>
            <li>Explored multiple transmission methods: Wi-Fi (MQTT), Bluetooth, and radio frequency communication</li>
            <li>Applications in hazardous site access, remote inspection, and assistive robotics</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            Invited back as Teaching Assistant in 2024, mentoring 80+ students by helping debug hardware circuits and optimize embedded C++ code for performance and stability.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/docs/YTS_Plaksha_Certificate_2023.pdf" target="_blank" className="text-primary text-sm hover:underline">View Certificate →</a>
            <a href="/docs/YTS_Plaksha_June2023.pdf" target="_blank" className="text-primary text-sm hover:underline">View Letter →</a>
          </div>
        </section>

        {/* GreenCharge */}
        <section id="greencharge" className="border-l-4 border-primary pl-4 sm:pl-6">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">GreenCharge: Sustainable Energy Systems (Aloe Vera Bio-Cell)</h2>
          <p className="text-sm text-muted-foreground mb-3">Researcher · Ongoing</p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Investigating non-toxic environmental alternatives to commonly used toxic battery electrolytes. The goal is to address the environmental toxicity of traditional lead-acid or lithium-ion components and provide a blueprint for a self-sustaining "smart farm" ecosystem.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-3">
            <li>Constructed a bio-cell prototype using zinc and copper electrodes with organic electrolytes</li>
            <li>Experimented with different concentrations of citric acid and polysaccharides to optimize ion flow</li>
            <li>Measured voltage stability over time and internal resistance</li>
            <li>Aloe vera-based electrolytes offered a more stable discharge curve due to high mucilage content acting as a natural polymer matrix</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm">
            <strong>Future direction:</strong> Transitioning from liquid-state to solid-state bio-electrolytes by cross-linking aloe vera polysaccharides with natural binders to enhance energy density and prevent leakage. Exploring integration of these cells into low-power IoT agricultural sensors to validate practical utility in creating a truly circular, self-sustaining "smart farm" ecosystem.
          </p>
        </section>
      </div>
    </div>
  );
}
