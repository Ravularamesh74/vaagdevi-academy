import { Quote } from "lucide-react";

const quotes = [
  {
    text: "My son's confidence in Maths transformed in just 3 months. The personal attention is unmatched.",
    name: "Anitha R.",
    role: "Parent · Class 9",
  },
  {
    text: "I went from struggling in Science to scoring 92% in my SSC boards. Praveen sir made everything click.",
    name: "Rohit K.",
    role: "Student · Class 10",
  },
  {
    text: "Manjula ma'am turned English from my weakest subject into my favourite. Forever grateful.",
    name: "Sneha P.",
    role: "Student · Class 8",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-24 text-primary-foreground">
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-glow">Voices of Parents & Students</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Stories of <span className="text-gradient-gold">Real Growth</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className="relative rounded-3xl glass p-7 transition-smooth hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-accent" />
              <blockquote className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-lg font-bold text-accent-glow">{q.name}</p>
                <p className="text-xs text-primary-foreground/70">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
