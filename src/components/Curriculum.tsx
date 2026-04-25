import { Check } from "lucide-react";

const grades = [
  { class: "7th", focus: "Foundation building — strong basics in Maths & Science." },
  { class: "8th", focus: "Concept clarity, transition into board-style learning." },
  { class: "9th", focus: "Pre-board preparation, deep subject mastery." },
  { class: "10th", focus: "Board exam strategy, full revision & mock tests." },
];

const boards = ["SSC", "CBSE", "ICSE"];

const Curriculum = () => {
  return (
    <section id="curriculum" className="relative overflow-hidden bg-secondary/40 py-24">
      <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Curriculum</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              Classes <span className="text-gradient-gold">7th to 10th</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Specialised coaching aligned to State (SSC), CBSE and ICSE syllabi — with structured study plans for every grade.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {boards.map((b) => (
              <span
                key={b}
                className="rounded-full border-2 border-accent bg-card px-5 py-2 text-sm font-bold text-primary shadow-soft"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grades.map((g, i) => (
            <div
              key={g.class}
              className="group relative overflow-hidden rounded-3xl bg-card p-7 shadow-card transition-bounce hover:-translate-y-3 hover:shadow-elegant"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute right-4 top-4 font-display text-7xl font-black text-secondary transition-smooth group-hover:text-accent/30">
                {String(i + 7).padStart(2, "0")}
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Class {g.class}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-primary">{g.class} Grade</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.focus}</p>
                <div className="mt-5 space-y-2">
                  {["Concept Mastery", "Daily Practice", "Doubt Clearing"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium text-primary/85">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
