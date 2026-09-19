import { useState } from "react";
import { Globe, Medal, ExternalLink, Download, Eye, X, Award } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { useAutoReveal } from "@/components/Reveal";

export default function AwardsRecognition() {
  useAutoReveal();
  useScrollToHash();
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const internationalHonors = [
    {
      id: "acc-cricket",
      title: "Singapore U16 National Cricket Team — Runner-Up",
      org: "Asian Cricket Council (ACC) Tournament (10 Countries)",
      year: "2025",
      desc: "Represented Singapore U16 National team, finishing Runner-Up in 10-country international championship.",
      badge: "INTERNATIONAL SPORTS",
      link: "https://www.asiancricket.org/match/234/1993",
      actionText: "Official Link",
    },
    {
      id: "crest-gold",
      title: "CREST Gold Award",
      org: "British Science Association",
      year: "2025",
      desc: "Secured CREST Gold Award by the British Science Association for high-impact STEM innovation.",
      badge: "INTERNATIONAL STEM",
      actionText: "Verified Honor",
    },
    {
      id: "ic2uhi-conf",
      title: "IC2UHI 2026 Conference Invited Presenter",
      org: "7th International Conference on Countermeasures to Urban Heat Islands",
      year: "2026",
      desc: "Research findings from Roof of Hope accepted; invited to present at IC2UHI 2026 in Nanjing, China (September 22–25, 2026).",
      badge: "RESEARCH PUBLICATION",
      link: "https://www.ic2uhi2026.com/",
      actionText: "Conference Site",
    },
    {
      id: "elaine-hobson",
      title: "Elaine Hobson Essay Competition Winner",
      org: "Published Author — Essay 'Ripple Effect'",
      year: "July 2024",
      desc: "Winning essay published in Empathy in Action (Virtual School Australia July 2024 anthology), exploring community climate action and systemic social impact.",
      badge: "INTERNATIONAL WRITING",
      pdf: "/docs/Elaine-Hobson-Essay-Newsletter-July-2024.pdf",
      actionText: "Download PDF",
    },
    {
      id: "timo-math",
      title: "TIMO International Math Olympiad — Bronze Medalist",
      org: "Thailand International Mathematical Olympiad",
      year: "2024",
      desc: "Awarded Bronze Medal in international competitive mathematics.",
      badge: "MATH OLYMPIAD",
      pdf: "/new-content/TIMO-Apr2024.pdf",
      actionText: "Download PDF",
    },
    {
      id: "ceew-nomination",
      title: "Council on Energy, Environment and Water (CEEW) Nomination",
      org: "CEEW Sustainability Award",
      year: "2025",
      desc: "Nominated for environmental innovation award by CEEW council leadership.",
      badge: "CLIMATE NOMINATION",
      link: "https://www.ceew.in/",
      actionText: "ceew.in",
    },
    {
      id: "padi-diving",
      title: "Certified Open Water Diver (PADI)",
      org: "Professional Association of Diving Instructors",
      year: "2024",
      desc: "Certified open water diver credential for marine exploration and conservation.",
      badge: "PADI DIVING",
      pdf: "/new-content/Jr Open Water Diver.pdf",
      actionText: "Download PDF",
    },
  ];

  const nationalAwards = [
    {
      title: "Grade 9 & Grade 10 Scholars List",
      org: "Singapore American School",
      year: "2023 – 2024",
      desc: "Awarded to top performing students maintaining a sustained GPA of 4.0+.",
      badge: "ACADEMIC EXCELLENCE",
    },
    {
      title: "Rho Kappa National Social Studies Honor Society",
      org: "Singapore American School Chapter",
      year: "Dec 2025 – Present",
      desc: "Selected based on sustained academic excellence in the Social Sciences and public policy.",
      badge: "HONOR SOCIETY",
    },
    {
      title: "SAT: 1570 / 1600 & AP Scholar with Distinction",
      org: "College Board",
      year: "2024",
      desc: "AP CS-A (5), AP Microeconomics (5), AP Macroeconomics (5). Pursuing AP Calculus BC, AP Physics 1, AP Chemistry, AP Psychology, AP African American Studies.",
      badge: "STANDARDIZED TESTING",
    },
  ];

  const certificatesList = [
    {
      id: "sasmun-vi",
      title: "SASMUN VI Certificate (2023)",
      category: "Model United Nations",
      img: "/new-content/SASMUN_VI_2023.jpeg",
      downloadPath: "/new-content/SASMUN_VI_2023.jpeg",
      desc: "SASMUN VI DISEC Committee Certificate of Attendance.",
    },
    {
      id: "sasmun-vii",
      title: "SASMUN VII Certificate (2024)",
      category: "Model United Nations",
      img: "/new-content/SASMUN_VII-2024.jpeg",
      downloadPath: "/new-content/MUN-Gr9.pdf",
      desc: "SASMUN VII Certificate of Attendance & Grade 9 MUN distinction.",
    },
    {
      id: "oxbright-cert",
      title: "Oxford Scholastica Certificate (2023)",
      category: "Political Science",
      img: "/images/OxBright_Certificate.png",
      downloadPath: "/images/OxBright_Certificate.png",
      desc: "Oxford Scholastica Politics & Debate course completion.",
    },
    {
      id: "oxbright-rec",
      title: "OxBright Letter of Recommendation",
      category: "Faculty Recommendation",
      img: "/images/OxBright_Recommendation_page1_img1.jpeg",
      downloadPath: "/new-content/Aarav Aggarwal - OxBright Letter of Recommendation - 18-07-2023-14-05.pdf",
      desc: "Oxford Scholastica faculty letter of recommendation.",
    },
    {
      id: "plaksha-cert",
      title: "YTS Plaksha Certificate (2023)",
      category: "Robotics & Hardware",
      img: "/images/YTS_Plaksha_Certificate_2023_page1_img1.jpeg",
      downloadPath: "/new-content/YTS-Plaksha-certificate_jun2023.pdf",
      desc: "Distinction award in teleoperation robotics prototyping at Plaksha University.",
    },
    {
      id: "plaksha-letter",
      title: "YTS Plaksha Letter (June 2023)",
      category: "Robotics & Faculty Letter",
      img: "/images/YTS_Plaksha_June2023_page1_img1.jpeg",
      downloadPath: "/new-content/YTS-Plaksha-June2023.pdf",
      desc: "Official YTS Plaksha University cohort commendation letter.",
    },
  ];

  const selectedCertObj = certificatesList.find((c) => c.id === activeCert);

  return (
    <div className="relative isolate min-h-screen py-12 text-label sm:py-16">
      <div data-reveal-root className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-label/[0.05] border border-separator text-label text-[0.76rem] font-medium min-h-[44px]">
            <Award className="w-3.5 h-3.5 text-label-secondary" /> Honors, Medals & Verified Credentials
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-label">
            Awards & Recognition
          </h1>
          <p className="text-label-secondary text-sm sm:text-base max-w-3xl leading-relaxed">
            International conference invitations, athletic runner-up medals, CREST Gold Award, publication honors, and verified certificates.
          </p>
          <div className="w-24 h-1.5 bg-accent rounded" />
        </div>

        {/* First Section: International Recognition (Matching Screenshot 1) */}
        <section className="bg-accent text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/15 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-white/15 pb-4">
            <Globe className="w-6 h-6 text-white/75" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              International Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalHonors.map((item) => (
              <div
                key={item.id}
                className="bg-white/[0.07] backdrop-blur-md rounded-xl p-5 border border-white/15 flex flex-col justify-between space-y-4 hover:border-white/25 transition-all "
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/75 bg-white/10 px-2.5 py-1 rounded border border-white/25">
                      {item.badge}
                    </span>
                    <span className="text-xs text-white/75 font-semibold">{item.year}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/80 font-medium leading-tight">
                    {item.org}
                  </p>
                  <p className="text-xs text-white/75 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/75 underline underline-offset-[3px] decoration-label/25 hover:decoration-label inline-flex items-center gap-1 min-h-[44px]"
                    >
                      {item.actionText} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : item.pdf ? (
                    <a
                      href={item.pdf}
                      download
                      className="text-white/75 underline underline-offset-[3px] decoration-label/25 hover:decoration-label inline-flex items-center gap-1 min-h-[44px]"
                    >
                      <Download className="w-3.5 h-3.5" /> {item.actionText}
                    </a>
                  ) : (
                    <span className="text-label-secondary text-[11px] font-medium">{item.actionText}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Second Section: National & Academic Honors */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/70 space-y-6">
          <div className="flex items-center gap-2 border-b border-white/60 pb-4">
            <Medal className="w-5 h-5 text-label" />
            <h2 className="text-xl sm:text-2xl font-bold text-label">
              National & Academic Honors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nationalAwards.map((item) => (
              <div
                key={item.title}
                className="bg-label/[0.03] rounded-xl p-5 border border-white/70 space-y-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-label bg-label/[0.05] px-2 py-0.5 rounded border border-separator">
                  {item.badge}
                </span>
                <h3 className="text-sm font-bold text-label leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-label-secondary font-medium">
                  {item.org} ({item.year})
                </p>
                <p className="text-xs text-label-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Third Section: Certificates & Documents (Matching Screenshot 2) */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/70 space-y-6">
          <div className="border-b border-white/60 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-label">
              Certificates & Documents
            </h2>
            <p className="text-xs text-label-secondary mt-1">
              Official horizontally oriented certificate previews matching credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificatesList.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl border border-white/70 overflow-hidden transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 bg-label/[0.04] border-b border-white/70 overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xs font-bold text-label leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3 border-t border-white/60 bg-label/[0.03] grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveCert(cert.id)}
                    className="inline-flex items-center justify-center gap-1 glass-card hover:bg-label/[0.04] text-label text-[11px] font-semibold py-1.5 rounded-lg border border-white/70 transition-colors min-h-[44px]"
                  >
                    <Eye className="w-3.5 h-3.5 text-label" /> Open
                  </button>
                  <a
                    href={cert.downloadPath}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 bg-accent hover:bg-accent text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors min-h-[44px]"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Certificate Modal Viewer */}
      {selectedCertObj && (
        <div className="fixed inset-0 z-50 bg-accent/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl max-w-3xl w-full overflow-hidden shadow-[0_12px_40px_-12px_hsl(0_0%_0%/0.28)] space-y-4 p-6 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-label/[0.04] hover:bg-label/[0.06] text-label-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-1">
              <span className="text-xs font-bold text-label uppercase tracking-wider">
                {selectedCertObj.category}
              </span>
              <h3 className="text-lg font-bold text-label">
                {selectedCertObj.title}
              </h3>
            </div>

            <div className="max-h-[60vh] overflow-auto rounded-xl border border-white/70 bg-label/[0.04] p-2">
              <img
                src={selectedCertObj.img}
                alt={selectedCertObj.title}
                className="w-full h-auto object-contain max-h-[50vh] mx-auto rounded"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-label-secondary">{selectedCertObj.desc}</p>
              <a
                href={selectedCertObj.downloadPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shrink-0 min-h-[44px]"
              >
                <Download className="w-4 h-4" /> Download File / Document
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
