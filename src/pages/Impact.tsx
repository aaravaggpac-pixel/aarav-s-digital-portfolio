import { ExternalLink } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

export default function Impact() {
  useScrollToHash();
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Urban Heat Stress Initiative & Research</h1>
      <div className="w-32 h-1 bg-primary mb-8 sm:mb-10" />

      {/* Roof of Hope */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
          <a href="https://www.roofofhope.org/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
            Roof of Hope <ExternalLink className="w-4 h-4" />
          </a>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
          Delhi's Urban Heat Island effect disproportionately impacts low-income families living in homes with metal or cement roofs. Indoor temperatures regularly exceed 40 °C during summer, creating sustained heat exposure.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
          I founded Roof of Hope to design and implement a scalable, evidence-driven cool-roof solution. We used high-reflectivity, UV-resistant, white tarpaulin sheets as cool roofs. I led end-to-end deployment across <strong>100 households</strong> in Bakkarwala Resettlement Colony, West Delhi.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
          Partnered with <strong>Indorama Ventures Center for Clean Energy</strong> for scientific data collection — installing temperature sensors and a centralized weather station for pre- and post-intervention comparisons.
        </p>
        <div className="bg-muted rounded-lg p-4 sm:p-6 mb-4">
          <h3 className="font-bold text-foreground mb-2">Key Results</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs sm:text-sm">
            <li>~20 °C reduction in roof surface temperatures</li>
            <li>4–11 °C reduction in ceiling temperatures</li>
            <li>1–3 °C reduction in indoor wall temperatures</li>
            <li>95%+ of households reported improved comfort and well-being</li>
          </ul>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
          Now scaling to <strong>4,000 homes</strong> with corporate CSR support. Invited to present at the 7th International Conference on Countermeasures to Urban Heat Islands (IC2UHI), 2026.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <img
            src="https://static.wixstatic.com/media/02b2cd_0ba9a640910746a9bc82ea2a107ed90d~mv2.jpg"
            alt="Roof of Hope cool-roof installation in Bakkarwala, Delhi"
            loading="lazy"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
          <img
            src="https://static.wixstatic.com/media/02b2cd_d0a9ac65fc9547c896e91b6bec80472c~mv2.jpg"
            alt="Community deployment of reflective tarpaulin roofs"
            loading="lazy"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
        </div>
        <video
          src="https://video.wixstatic.com/video/02b2cd_0c918a20920f4a3d868143b86fd85cf4/480p/mp4/file.mp4"
          controls
          playsInline
          className="w-full rounded-lg"
        />
      </section>

      {/* Cool Play */}
      <section className="mb-10 sm:mb-12" id="coolplay">
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
          <a href="https://www.fueladream.com/home/campaign/92486" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
            Cool Play <ExternalLink className="w-4 h-4" />
          </a>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
          As a young cricketer training in extreme heat, I witnessed an unfair reality: while elite academies had access to cooling infrastructure, underprivileged athletes trained in unsafe conditions.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
          I launched Cool Play in partnership with the MIMA Foundation. Led a fundraising campaign that raised over <strong>USD 1,000</strong> to procure and distribute <strong>60+ cooling jackets</strong> to young athletes from low-income backgrounds.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          The initiative cascaded to nearby schools and sports academies, creating a ripple effect beyond direct beneficiaries.
        </p>
      </section>

      {/* Teaching */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Teaching & Mentoring</h2>

        <div className="space-y-6 sm:space-y-8">
          <div className="border-l-4 border-primary pl-4 sm:pl-6">
            <h3 className="font-bold text-foreground text-sm sm:text-base">Plaksha University | Teaching Assistant</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Chandigarh, India · June 2024</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs sm:text-sm">
              <li>Invited to be a Teaching Assistant at Young Tech Scholars program</li>
              <li>Assisted 80+ students on a Teleoperation project through live lessons, instructional videos and hands-on demonstrations</li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-4 sm:pl-6">
            <h3 className="font-bold text-foreground text-sm sm:text-base">Read to Lead | Vice President</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Singapore American School · Aug 2024 – Present</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs sm:text-sm">
              <li>Partnered with the Singapore National Library Board to launch monthly literacy workshops, reaching 100+ young readers</li>
              <li>Co-designed curriculum and initiated a book drive providing underprivileged children access to 500+ books</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
