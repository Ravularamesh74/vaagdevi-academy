import { ArrowRight, Sparkles, Star } from "lucide-react";
import students from "@/assets/students-hero.png";
import pattern from "@/assets/pattern-bg.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Students Mentored" },
  { value: "95%", label: "Success Rate" },
  { value: "4", label: "Classes 7–10" },
];

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <img
        src={pattern}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        {/* Copy */}
        <div className="text-primary-foreground animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-glow">
            <Sparkles className="h-3.5 w-3.5" />
            Admissions Open · Limited Seats
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Strong <span className="text-gradient-gold">Foundation</span>,
            <br />
            Brighter <span className="text-gradient-gold">Future</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Vaagdevi Tuitions mentors students from <strong className="text-accent-glow">7th to 10th Class</strong> across SSC, CBSE & ICSE — with personal attention,
            daily practice, and 15+ years of teaching expertise. Learn Today… Lead Tomorrow.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="shine group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-bold text-accent-foreground shadow-gold transition-bounce hover:scale-105"
            >
              Enroll Now
              <ArrowRight className="h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 glass px-7 py-4 text-base font-semibold text-primary-foreground transition-smooth hover:border-accent hover:text-accent-glow"
            >
              Explore Curriculum
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl glass p-4 text-center animate-scale-in"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <p className="font-display text-3xl font-bold text-gradient-gold">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Decorative ring */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-gold opacity-25 blur-3xl animate-glow-pulse" />
          <div className="absolute -inset-6 -z-10 rounded-[3rem] border-2 border-accent/30 animate-spin-slow" style={{ borderStyle: "dashed" }} />

          <img
            src={students}
            alt="Confident Vaagdevi Tuitions students with books"
            width={1024}
            height={1024}
            className="relative animate-float drop-shadow-2xl"
          />

          {/* Floating badges */}
          <div className="absolute -left-4 top-10 rounded-2xl glass-light p-4 shadow-elegant animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Rated</p>
                <p className="text-sm font-bold text-primary">4.9 / 5</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-12 rounded-2xl glass-light p-4 shadow-elegant animate-float-slow" style={{ animationDelay: "1.2s" }}>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">Curriculum</p>
            <p className="mt-1 font-display text-base font-bold text-primary">SSC · CBSE · ICSE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
