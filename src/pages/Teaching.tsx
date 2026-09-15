export default function Teaching() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Teaching & Mentoring</h1>
      <div className="w-32 h-1 bg-primary mb-10" />

      <div className="space-y-12">
        <section className="bg-card border rounded-lg p-8">
          <h2 className="text-xl font-bold text-primary mb-1">Teaching Assistant, Young Tech Scholars</h2>
          <p className="text-sm text-muted-foreground mb-4">Plaksha University, Chandigarh · June 2024</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Attending the Young Tech Scholars program at Plaksha University was a great learning experience. I was able to learn complex technical topics, and also apply them immediately through hands-on experimentation — tinkering with breadboards, sensors, motors, and chassis.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The following summer, when I was invited back as a Teaching Assistant, I was tasked with mentoring 80+ students. I taught them about the complexities of ESP-32 micro-controllers and transmission of signals for teleoperation bots. When students asked thought-provoking questions, it forced me to deepen my own understanding.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I had to tailor my approach to different students: some with textbooks, some with videos, and some by doing and failing. Guiding students through this process instilled in me a lifelong love for mentoring and reinforced my commitment to making technology more accessible to others.
          </p>
        </section>

        <section className="bg-card border rounded-lg p-8">
          <h2 className="text-xl font-bold text-primary mb-1">Read to Lead | Vice President</h2>
          <p className="text-sm text-muted-foreground mb-4">Singapore American School · Aug 2024 – Present</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I partnered with the Singapore National Library Board to launch monthly literacy workshops, reaching 100+ young readers through interactive sessions. I co-designed a curriculum and initiated a book drive to provide underprivileged children with access to 500+ books.
          </p>
        </section>
      </div>
    </div>
  );
}
