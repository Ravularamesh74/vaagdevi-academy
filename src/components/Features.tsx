import { GraduationCap, BookOpen, Presentation, ClipboardCheck, UserCheck, Trophy, Users, BarChart3, Target, Lightbulb } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "All Subjects", desc: "Maths, Science, Social, English & languages — under one roof." },
  { icon: BookOpen, title: "Homework Help", desc: "Daily guided support so no question goes unanswered." },
  { icon: Presentation, title: "15+ Years Experience", desc: "Seasoned teachers with proven board-result records." },
  { icon: ClipboardCheck, title: "Daily Practice", desc: "Concept drills, worksheets and weekly revision tests." },
  { icon: UserCheck, title: "Individual Attention", desc: "Small batches so every student is heard and mentored." },
  { icon: Trophy, title: "Exam Preparation", desc: "Structured strategy for SSC, CBSE and ICSE board exams." },
];

const pillars = [
  { icon: Users, title: "Personalized Learning" },
  { icon: BarChart3, title: "Concept Clarity" },
  { icon: Target, title: "Better Results" },
  { icon: Lightbulb, title: "Bright Future" },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Special Features</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            Why Parents Choose <span className="text-gradient-primary">Vaagdevi</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything your child needs to build a rock-solid academic foundation — delivered with care, discipline and proven results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-2 hover:shadow-elegant"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-gold opacity-0 blur-2xl transition-smooth group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant transition-bounce group-hover:rotate-6 group-hover:scale-110">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-gold transition-smooth group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Pillars strip */}
        <div className="mt-16 grid gap-4 rounded-3xl bg-gradient-primary p-8 shadow-elegant sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="flex items-center gap-4 text-primary-foreground">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-lg font-bold">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
