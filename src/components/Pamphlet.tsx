import pamphlet from "@/assets/pamphlet.png";

const Pamphlet = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Official Brochure</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              Everything in <span className="text-gradient-gold">One Page</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our full programme — features, faculty, contact and address — beautifully designed in our official admissions pamphlet.
            </p>

            <ul className="mt-6 space-y-3 text-primary/85">
              {[
                "Classes 7th to 10th — SSC, CBSE & ICSE",
                "All subjects under one roof",
                "Daily practice & exam preparation",
                "Individual attention with 15+ years experienced faculty",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-gold" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="shine mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-elegant transition-bounce hover:scale-105"
            >
              Reserve Your Seat
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" />
              <div className="rotate-2 rounded-3xl bg-card p-3 shadow-elegant transition-bounce hover:rotate-0 hover:scale-[1.02]">
                <img
                  src={pamphlet}
                  alt="Vaagdevi Tuitions official admissions pamphlet"
                  loading="lazy"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pamphlet;
