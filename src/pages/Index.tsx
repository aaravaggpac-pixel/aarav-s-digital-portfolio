import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  const quickNavCards = [
    {
      title: "Urban Heat Stress",
      subtitle: "Roof of Hope & Cool Play",
      desc: "Founded Roof of Hope & Cool Play to counter urban heat stress; 100 cool roofs in Delhi scaling to 4,000; 60+ cooling jackets for youth athletes.",
      path: "/urban-heat-stress",
      badge: "Climate Impact",
    },
    {
      title: "Engineering & Technology",
      subtitle: "M&TSI, Mynzo, DataPitch & Bio-Cell",
      desc: "Penn M&TSI program, MobileNetV2 leaf identification (~85% accuracy), IPL predictive ML model, and bio-cell battery patent.",
      path: "/engineering-technology",
      badge: "Hardware & AI",
    },
    {
      title: "Research",
      subtitle: "Publications & Patents",
      desc: "NHSJS IPL batting archetypes paper, IC2UHI 2026 conference presentation, Aloe Vera bio-cell battery design patents, and acoustic metamaterials study.",
      path: "/research",
      badge: "Peer-Reviewed & Patents",
    },
    {
      title: "Leadership & Mentoring",
      subtitle: "Plaksha YTS TA & VP Read to Lead",
      desc: "TA invited by Prof. Ravi Jasuja at Plaksha University (80 students), VP leading literacy drives for 100+ readers with NLB Singapore.",
      path: "/leadership-mentoring",
      badge: "Community & TA",
    },
    {
      title: "Cricket",
      subtitle: "National U16 / U19 & Stumps & Stories",
      desc: "Singapore U16 National Squad Runner-Up (ACC 2025), SCA Men's League Div 1, and Stumps & Stories tournament honoring migrant workers.",
      path: "/cricket",
      badge: "National Athlete",
    },
    {
      title: "Awards & Recognition",
      subtitle: "International & Academic Honors",
      desc: "CREST Gold Award, IC2UHI Invited Presenter, Elaine Hobson Essay Winner, TIMO Bronze Medalist, and PADI Scuba Diver.",
      path: "/awards-recognition",
      badge: "Honors & Medals",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero — text left, image right */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
          {/* Hero copy (left) */}
          <div className="text-center md:text-left space-y-4 flex-1 order-2 md:order-1">
            <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30 uppercase tracking-wider">
              High School Researcher & Innovator
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Aarav Aggarwal
            </h1>
            <p className="text-base sm:text-lg text-blue-200 font-medium max-w-2xl">
              Student Researcher | Engineer | Climate Innovator
            </p>

            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
              I am Aarav Aggarwal, a high school student at Singapore American School driven by a passion for leveraging technology, engineering research, and community action to solve complex real-world challenges. From founding Roof of Hope (scaling cool-roof interventions across 4,000 homes in India) to conducting machine learning internships and representing Singapore in international cricket, I strive for excellence across research, sports, and societal impact.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/15 inline-block text-xs sm:text-sm text-blue-100 font-medium">
              SAT: 1570/1600 · AP Scholar (CS-A: 5, Macro: 5, Micro: 5) · GPA: 4.43
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="/AaravResumeJan-17-2026.pdf"
                download="AaravResumeJan-17-2026.pdf"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md hover:shadow-blue-500/25"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/aarav-aggarwal-085b21357/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium px-4 py-2.5 rounded-lg text-sm border border-slate-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:aaravagg.pac@gmail.com"
                className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium px-4 py-2.5 rounded-lg text-sm border border-slate-700 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Photo frame (right) */}
          <div className="relative shrink-0 mx-auto md:mx-0 order-1 md:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl border border-blue-400/40 bg-slate-900 p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-center overflow-hidden border border-slate-700 p-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-white text-5xl sm:text-6xl font-extrabold mb-4">
                  AA
                </div>
                <span className="text-lg sm:text-xl font-bold text-white leading-tight">Aarav Aggarwal</span>
                <span className="text-sm text-blue-300 font-medium mt-1">SAS High School</span>
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 bg-blue-600 text-white text-xs sm:text-sm px-4 py-1.5 rounded-full font-semibold border border-blue-400 shadow-md whitespace-nowrap">
              High School Researcher & Innovator
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore Focus Areas
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Click on any card below to navigate directly to detailed projects, publications, and initiatives.
          </p>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickNavCards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {card.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-1">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-blue-800 mb-3">
                  {card.subtitle}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 group-hover:gap-3 transition-all border-t border-slate-100 pt-4">
                <span>Explore Page</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
