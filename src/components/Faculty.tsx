import praveen from "@/assets/faculty-praveen.jpg";
import manjula from "@/assets/faculty-manjula.jpg";
import { Phone } from "lucide-react";

const faculty = [
  {
    name: "V. Praveen",
    qual: "M.Sc., B.Ed.",
    role: "Founder · Mathematics & Science",
    bio: "15+ years of mentoring students to top board ranks with patience, precision and a deep love for teaching.",
    img: praveen,
  },
  {
    name: "D. Manjula",
    qual: "M.Sc., B.Ed.",
    role: "Co-founder · English & Social",
    bio: "An empathetic mentor known for unlocking confidence in students and turning average performers into achievers.",
    img: manjula,
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Meet the Mentors</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            Faculty Who <span className="text-gradient-primary">Build Achievers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            "We don't just teach — we build confidence and create achievers."
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {faculty.map((f) => (
            <article
              key={f.name}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition-smooth hover:shadow-elegant"
            >
              <div className="grid sm:grid-cols-5">
                <div className="relative sm:col-span-2">
                  <img
                    src={f.img}
                    alt={`${f.name}, ${f.role}`}
                    width={640}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                </div>
                <div className="p-7 sm:col-span-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">{f.role}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary">
                    {f.name} <span className="text-base font-medium text-muted-foreground">{f.qual}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                  <a
                    href="tel:9640958518"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-bounce hover:scale-105"
                  >
                    <Phone className="h-4 w-4" /> 96409 58518
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
