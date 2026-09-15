import { FileText, Download, Linkedin, Mail, GraduationCap, Briefcase, Award, ExternalLink, Code2 } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

export default function Resume() {
  useScrollToHash();

  const achievements = [
    { label: "SAT Score", val: "1570 / 1600" },
    { label: "AP Scholar Awards", val: "CS-A (5), Macro (5), Micro (5)" },
    { label: "High School GPA", val: "4.43 (Grade 11 Sem 1)" },
    { label: "Address", val: "9 Ardmore Park, Singapore 259955" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-blue-600" /> Official Curriculum Vitae
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Aarav Aggarwal — Resume
            </h1>
            <p className="text-slate-600 text-sm">
              9 Ardmore Park, Singapore 259955 | <a href="mailto:aaravagg.pac@gmail.com" className="text-blue-600 hover:underline">aaravagg.pac@gmail.com</a>
            </p>
          </div>

          {/* Direct Download & Social Triggers */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg text-xs transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Resume PDF
            </a>
            <a
              href="https://www.linkedin.com/in/aarav-aggarwal-085b21357/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-medium px-4 py-2.5 rounded-lg text-xs border border-slate-200 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
            </a>
            <a
              href="mailto:aaravagg.pac@gmail.com"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-medium px-4 py-2.5 rounded-lg text-xs border border-slate-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-600" /> Email
            </a>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {achievements.map((item) => (
            <div key={item.label} className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">{item.label}</div>
              <div className="text-xs sm:text-sm font-extrabold text-blue-900 mt-1">{item.val}</div>
            </div>
          ))}
        </div>

        {/* Detailed Resume Sections Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10">
          {/* EDUCATION */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <GraduationCap className="w-5 h-5 text-blue-600" /> EDUCATION
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Singapore American School, Singapore</span>
                  <span className="text-blue-600 font-semibold">Aug 2021 – Present</span>
                </div>
                <p className="text-xs font-semibold text-slate-600">Grade 7 - Grade 12, American School Diploma with APs and ATs</p>
                <p className="text-xs text-slate-600 pt-1">
                  Grade 11 GPA: 4.43 (Sem 1) · Grade 10 GPA: 4.29 · Grade 9 GPA: 4.18
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>The Shri Ram School Aravali, Gurgaon, India</span>
                  <span className="text-slate-500 font-semibold">Apr 2013 – Jul 2021</span>
                </div>
                <p className="text-xs text-slate-600">Till Grade 6, ICSE Indian Board</p>
              </div>
            </div>
          </section>

          {/* STANDARDIZED TESTS & APS */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Award className="w-5 h-5 text-blue-600" /> STANDARDIZED TESTS & APs
            </h2>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
              <p><strong>SAT:</strong> 1570 / 1600</p>
              <p><strong>Completed APs (Scores):</strong> AP Computer Science A (5), AP Microeconomics (5), AP Macroeconomics (5)</p>
              <p><strong>Currently Pursuing APs:</strong> AP Calculus BC, AP Physics 1, AP Chemistry, AP African American Studies, AP Psychology</p>
            </div>
          </section>

          {/* HONORS & AWARDS */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Award className="w-5 h-5 text-amber-600" /> HONORS & AWARDS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-blue-700">School Honors</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Grade 9 and Grade 10 Scholars List: Top performing students (GPA 4.0+)</li>
                  <li>Singapore American School Rho Kappa Social Studies Honor Society (Dec 2025 - Present)</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-amber-700">International Honors</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Represented Singapore U16 National team at ACC Tournament 2025 (Runner-Up in 10 countries)</li>
                  <li>Research paper "Roof of Hope" accepted to 10th IC2UHI 2026 Conference</li>
                  <li>Published Author, Elaine Hobson Essay Competition: "Ripple Effect" (July 2024)</li>
                  <li>CREST Gold Award by British Science Association</li>
                  <li>Bronze Medal: Thailand International Mathematics Olympiad (TIMO), 2024</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ENGINEERING & TECHNOLOGY EXPERIENCE */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Briefcase className="w-5 h-5 text-blue-600" /> ENGINEERING & TECHNOLOGY EXPERIENCE
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>DataPitch | Developer — Data Preprocessing, Visualizing, ML Algorithms</span>
                  <span className="text-blue-600 font-semibold">Oct 2024 – Present</span>
                </div>
                <p className="text-xs text-slate-600">Built ML model to predict IPL player performance using K-Means clustering, PCA, and Linear Regression. Paper published at The National High School Journal of Science.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Young Technology Scholars | Summer Participant, Plaksha University</span>
                  <span className="text-slate-500 font-semibold">Jun 2023</span>
                </div>
                <p className="text-xs text-slate-600">Built a prototype of Remote Surgery Teleoperation Bot with ESP-32, gyroscope, & motors for a hand-controlled robot.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Mynzo Carbon | Machine Learning Intern — Computer Vision, Sustainability Analytics</span>
                  <span className="text-slate-500 font-semibold">Jun – Aug 2025</span>
                </div>
                <p className="text-xs text-slate-600">Developed leaf-species ID pipeline using MobileNetV2 transfer learning, 250 images across 10 species, ~85% accuracy for carbon projects.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Penn M&TSI | Penn Management & Technology Summer Institute</span>
                  <span className="text-slate-500 font-semibold">Summer 2026</span>
                </div>
                <p className="text-xs text-slate-600">Attended UPenn M&TSI program focusing on technology prototyping and commercial management.</p>
              </div>
            </div>
          </section>

          {/* URBAN HEAT STRESS INITIATIVE & RESEARCH */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Briefcase className="w-5 h-5 text-orange-600" /> URBAN HEAT STRESS INITIATIVE & RESEARCH
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Roof of Hope | Founder, India</span>
                  <span className="text-blue-600 font-semibold">Dec 2024 – Present</span>
                </div>
                <p className="text-xs text-slate-600">Collaborated with Mahila Housing Trust, Indorama Ventures Center for Clean Energy, and Plaksha University. Installed cool roofs in 100 homes in Delhi, achieving ~20°C roof surface, 4-11°C ceiling, and 1-3°C wall temp reductions. 95% thermal comfort improvement reported.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Cool Play | Founder, India</span>
                  <span className="text-orange-600 font-semibold">May – Aug 2025</span>
                </div>
                <p className="text-xs text-slate-600">Partnered with MIMA Foundation, raised $1,000+, distributed 60+ cooling jackets to low-income athletes in Delhi. Idea adopted by 12 local sports clubs.</p>
              </div>
            </div>
          </section>

          {/* TEACHING & MENTORING */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Briefcase className="w-5 h-5 text-emerald-600" /> TEACHING & MENTORING
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Plaksha University | Teaching Assistant, Chandigarh, India</span>
                  <span className="text-emerald-600 font-semibold">Jun 2024</span>
                </div>
                <p className="text-xs text-slate-600">Invited by Prof. Ravi Jasuja (Harvard Medical School & Plaksha University) as TA for Young Tech Scholars. Assisted 80+ students on teleoperation robotics, recorded 10 instructional videos and coding webinar series.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Read to Lead | Vice President, Singapore American School</span>
                  <span className="text-slate-500 font-semibold">Aug 2024 – Present</span>
                </div>
                <p className="text-xs text-slate-600">Partnered with Singapore National Library Board for monthly literacy workshops reaching 100+ young readers, donated 500+ books.</p>
              </div>
            </div>
          </section>

          {/* EXTRACURRICULARS */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Briefcase className="w-5 h-5 text-emerald-600" /> EXTRACURRICULARS & ATHLETICS
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Singapore Cricket Association | U16 National Team & U19 High-Performance Squad</span>
                  <span className="text-slate-500 font-semibold">Jan 2018 – Present</span>
                </div>
                <p className="text-xs text-slate-600">Runner-Up finish at ACC U16 Championship 2025 (10 countries). Train 6 days a week, play Division 1 in SCA Men's League.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Cricket Club | Officer, Singapore American School</span>
                  <span className="text-slate-500 font-semibold">May 2024 – Present</span>
                </div>
                <p className="text-xs text-slate-600">Organized 5+ inter-school events and 2 international tours (Philippines, Malaysia). Permanent nets development for 40+ athletes.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>Stumps and Stories | Head of Logistics, Singapore American School</span>
                  <span className="text-slate-500 font-semibold">Oct 2024 – Present</span>
                </div>
                <p className="text-xs text-slate-600">Led 3 cricket events to raise funds ($5,000 effort) honoring 80+ migrant workers and staff through cricket, meals, and story-sharing.</p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Code2 className="w-5 h-5 text-blue-600" /> SKILLS & INTERESTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h3 className="font-bold text-slate-900">Technical</h3>
                <p className="text-slate-600">Proficient in Python, Java, Familiar with Arduino IDE</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h3 className="font-bold text-slate-900">Languages</h3>
                <p className="text-slate-600">English (Native), Hindi (Native), Spanish (Conversational)</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h3 className="font-bold text-slate-900">Interests</h3>
                <p className="text-slate-600">Deep Sea Diving (PADI Certified Diver), Cricket, Sports, International Politics, Debating</p>
              </div>
            </div>
          </section>

          {/* Download Action Footer */}
          <div className="pt-4 border-t border-slate-100 text-center">
            <a
              href="/AaravResumeJan-17-2026.pdf"
              download="AaravResumeJan-17-2026.pdf"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-md"
            >
              <Download className="w-4 h-4" /> Download Official Resume PDF (AaravResumeJan-17-2026.pdf)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
