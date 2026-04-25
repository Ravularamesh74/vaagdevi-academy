import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from "lucide-react";
import pamphlet from "@/assets/pamphlet.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import students from "@/assets/students-hero.png";

type Item = {
  src: string;
  title: string;
  caption: string;
  tag: string;
  span: string; // tailwind classes for grid span
};

const items: Item[] = [
  { src: g1, title: "Live Classroom", caption: "Concept-driven teaching with daily interaction.", tag: "Classroom", span: "sm:col-span-2 sm:row-span-2" },
  { src: g2, title: "Group Practice", caption: "Peer learning during daily practice sessions.", tag: "Practice", span: "" },
  { src: pamphlet, title: "Official Pamphlet", caption: "Our admissions brochure — everything in one page.", tag: "Brochure", span: "row-span-2" },
  { src: g3, title: "Top Scorers", caption: "Celebrating board exam achievers.", tag: "Achievers", span: "" },
  { src: g4, title: "1-on-1 Mentoring", caption: "Personal attention from senior faculty.", tag: "Mentoring", span: "sm:col-span-2" },
  { src: students, title: "Our Students", caption: "Confident learners ready for tomorrow.", tag: "Students", span: "" },
  { src: g5, title: "Daily Practice", caption: "Worksheets, drills and weekly tests.", tag: "Practice", span: "" },
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % items.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-secondary/40 py-24">
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            <ImageIcon className="h-3.5 w-3.5" /> Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            A Glimpse Inside <span className="text-gradient-primary">Vaagdevi</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real classrooms. Real students. Real results. Click any image to view it in full.
          </p>
        </div>

        {/* Mosaic */}
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {items.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant focus:outline-none focus:ring-4 focus:ring-accent/40 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-70 transition-smooth group-hover:opacity-90" />
              {/* Tag */}
              <span className="absolute left-3 top-3 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-soft">
                {item.tag}
              </span>
              {/* Zoom icon */}
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full glass text-primary-foreground opacity-0 transition-bounce group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-left text-primary-foreground">
                <p className="font-display text-lg font-bold leading-tight">{item.title}</p>
                <p className="mt-1 line-clamp-2 text-xs text-primary-foreground/80 opacity-0 transition-smooth group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
              {/* Bottom accent line */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-gold transition-smooth group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-md animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full glass text-primary-foreground transition-bounce hover:scale-110 hover:bg-accent hover:text-accent-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass text-primary-foreground transition-bounce hover:scale-110 hover:bg-accent hover:text-accent-foreground sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass text-primary-foreground transition-bounce hover:scale-110 hover:bg-accent hover:text-accent-foreground sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Content */}
          <div
            className="relative mx-4 max-h-[88vh] w-full max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-elegant sm:flex-row">
              <div className="relative flex-1 bg-primary/95">
                <img
                  src={items[active].src}
                  alt={items[active].title}
                  className="mx-auto max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="flex w-full shrink-0 flex-col justify-between p-6 sm:w-72">
                <div>
                  <span className="inline-block rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {items[active].tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-primary">
                    {items[active].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {items[active].caption}
                  </p>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {active + 1} / {items.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
