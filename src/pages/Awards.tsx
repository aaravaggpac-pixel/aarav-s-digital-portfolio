import { Award, Globe, Mic, GraduationCap, Trophy, Medal } from "lucide-react";

export default function Awards() {
  const certificateDocs = [
    {
      href: "/docs/OxBright_Certificate.pdf",
      label: "Oxford Scholastica Certificate (2023)",
      imageSrc: "/images/OxBright_Certificate.png",
    },
    {
      href: "/docs/OxBright_Recommendation.pdf",
      label: "OxBright Letter of Recommendation",
      imageSrc: "/images/OxBright_Recommendation_page1_img1.jpeg",
    },
    {
      href: "/docs/Inspirit_AI_Certificate.pdf",
      label: "Inspirit AI Scholars Certificate",
      imageSrc: "/images/Inspirit_AI_Certificate_page1_img1.jpeg",
    },
    {
      href: "/docs/YTS_Plaksha_Certificate_2023.pdf",
      label: "YTS Plaksha Certificate (2023)",
      imageSrc: "/images/YTS_Plaksha_Certificate_2023_page1_img1.jpeg",
    },
    {
      href: "/docs/YTS_Plaksha_June2023.pdf",
      label: "YTS Plaksha Letter (June 2023)",
      imageSrc: "/images/YTS_Plaksha_June2023_page1_img1.jpeg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Awards & Honors</h1>
      <div className="w-32 h-1 bg-primary mb-8 sm:mb-10" />

      {/* Certificates Grid */}
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Certificates & Documents</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mb-10 sm:mb-12">
        {certificateDocs.map((doc) => (
          <a key={doc.href} href={doc.href} target="_blank" className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card group">
            <div className="h-24 sm:h-40 bg-muted flex items-center justify-center overflow-hidden">
              <img src={doc.imageSrc} alt={doc.label} className="w-full h-full object-cover" />
            </div>
            <p className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">{doc.label}</p>
          </a>
        ))}
      </div>

      {/* International Recognition */}
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">International Recognition</h2>
      <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
        {[
          {
            icon: <Globe className="w-5 h-5" />,
            title: "National Athlete, U16 Singapore Cricket Team (2025)",
            desc: "Represented Singapore at the Asian Cricket Council (ACC) Tournament. Runner-Up among 10 participating nations. Competing at this level required rigorous mental conditioning and high-stakes teamwork under intense international scrutiny.",
          },
          {
            icon: <Mic className="w-5 h-5" />,
            title: "Invited Presenter, IC2UHI 2026",
            desc: "Selected to present original research findings on high-reflectivity tarpaulin performance in low-income urban settings at the 7th International Conference on Countermeasures to Urban Heat Islands. A global professional conference — being selected as a high school researcher highlights the empirical validity and societal importance of the work.",
          },
          {
            icon: <Medal className="w-5 h-5" />,
            title: "Thailand International Mathematical Olympiad (TIMO)",
            desc: "Silver Medalist (2022); Bronze Medalist (2023). Achieved high-ranking placements demonstrating strong problem-solving skills and mathematical intuition.",
          },
        ].map((a, i) => (
          <div key={i} className="flex gap-3 sm:gap-4 items-start border rounded-lg p-4 sm:p-5 bg-card hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              {a.icon}
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm sm:text-base">{a.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MUN */}
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Model United Nations Excellence</h2>
      <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
        {[
          {
            title: "Best Delegate (×2)",
            desc: "SASMUN (Singapore American School MUN) VII and SAISUMUN (Stamford American International School MUN) 2025.",
          },
          {
            title: "Most Diplomatic Award (×2)",
            desc: "SASMUN VIII and SASMUN VI. Recognized for consistent excellence in diplomacy and negotiation across multiple circuits.",
          },
        ].map((a, i) => (
          <div key={i} className="flex gap-3 sm:gap-4 items-start border rounded-lg p-4 sm:p-5 bg-card hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm sm:text-base">{a.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Honors */}
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Academic Honors</h2>
      <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
        {[
          { title: "SAT: 1570/1600", desc: "Top standardized test performance." },
          { title: "AP Scholar Award", desc: "Earned scores of 5 in AP Computer Science A, AP Macroeconomics, AP Microeconomics." },
          { title: "Scholars List (Grades 9, 10, 11)", desc: "Maintained GPA of 4.0+ throughout high school, consistently placing in the top percentile across all disciplines." },
          { title: "Rho Kappa (National Social Sciences Honor Society)", desc: "Inducted into the Singapore American School chapter for sustained academic excellence in Social Sciences and deep understanding of historical and social contexts." },
          { title: "Elaine Hobson Essay Competition Winner (2024)", desc: 'Winning essay, "Ripple Effect," selected for publication. Recognizes exceptional narrative voice and the ability to articulate complex themes with clarity and emotional resonance.' },
        ].map((a, i) => (
          <div key={i} className="flex gap-3 sm:gap-4 items-start border rounded-lg p-4 sm:p-5 bg-card hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm sm:text-base">{a.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership & Mentoring */}
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Leadership & Mentoring</h2>
      <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
        {[
          {
            title: "Teaching Assistant, Young Tech Scholars (2024)",
            desc: "After completing the rigorous YTS program, uniquely selected to return as a TA — a position usually reserved for university-level students. Evaluated technical projects and mentored 80+ students on robotics and embedded C++/Python.",
          },
          {
            title: "Vice President, Read to Lead",
            desc: "Partnered with Singapore National Library Board to launch monthly literacy workshops reaching 100+ young readers. Co-designed curriculum and initiated a book drive providing underprivileged children access to 500+ books.",
          },
          {
            title: "Head of Logistics, Stumps & Stories",
            desc: "Co-led planning and execution of a cricket tournament honouring 100+ migrant workers and staff. Designed awareness campaigns and contributed to a $5,000 fundraising effort.",
          },
          {
            title: "Oxford Scholastica — Political Science & Public Speaking (2023)",
            desc: "Two-week program exploring political systems, identity politics, democracy, and persuasive writing. Received certificate and letter of recommendation.",
          },
        ].map((a, i) => (
          <div key={i} className="flex gap-3 sm:gap-4 items-start border rounded-lg p-4 sm:p-5 bg-card hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm sm:text-base">{a.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
