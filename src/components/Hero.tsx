import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import students from "@/assets/students-hero.png";
import pattern from "@/assets/pattern-bg.jpg";

/* ================= COUNTER ================= */
const Counter = ({ target, suffix = "" }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const update = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* ================= DATA ================= */
const stats = [
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 500, label: "Students Mentored", suffix: "+" },
  { value: 95, label: "Success Rate", suffix: "%" },
  { value: 4, label: "Classes 7–10", suffix: "" },
];

/* ================= HERO ================= */
const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <img
        src={pattern}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />

      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">

        {/* LEFT */}
        <div className="text-white">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            <Sparkles size={14} />
            Admissions Open
          </div>

          {/* URGENCY */}
          <p className="mt-3 text-green-400 font-semibold text-sm">
            🔥 Limited seats available
          </p>

          {/* HEADING */}
          <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold leading-tight">
            Strong <span className="text-yellow-400">Foundation</span>, <br />
            Brighter <span className="text-yellow-400">Future</span>
          </h1>

          {/* DESC */}
          <p className="mt-6 max-w-xl text-gray-300 text-lg">
            Vaagdevi Tuitions mentors students from <b>7th–10th</b> across SSC, CBSE & ICSE with
            personal attention, daily practice, and 15+ years of teaching excellence.
          </p>

          {/* TRUST */}
          <p className="mt-2 text-xs text-gray-400">
            ✔ Trusted by 1000+ parents in Hyderabad
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* MAIN CTA */}
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-yellow-400 px-7 py-4 font-bold text-black shadow-lg transition hover:scale-105"
            >
              Enroll Now
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </a>

            {/* SECONDARY */}
            <a
              href="#curriculum"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Explore Curriculum
            </a>
          </div>

          {/* WHATSAPP + CALL */}
          <div className="mt-4 flex gap-3 flex-wrap">
            <a
              href="https://wa.me/919640958518?text=Hi, I want to enquire about admissions"
              target="_blank"
              className="bg-green-500 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              💬 WhatsApp
            </a>

            <a
              href="tel:9640958518"
              className="bg-white/10 px-5 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              📞 Call Now
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-4 text-center backdrop-blur"
              >
                <p className="text-2xl font-bold text-yellow-400">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src={students}
            className="relative drop-shadow-2xl animate-float"
          />

          {/* BADGE 1 */}
          <div className="absolute top-10 left-0 bg-white/10 backdrop-blur p-4 rounded-xl">
            <Star className="text-yellow-400" />
            <p className="text-sm font-bold">4.9 Rating</p>
          </div>

          {/* BADGE 2 */}
          <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur p-4 rounded-xl">
            <p className="text-xs">Boards</p>
            <p className="font-bold text-yellow-400">SSC · CBSE · ICSE</p>
          </div>

          {/* NEW BADGE */}
          <div className="absolute top-1/2 -right-6 bg-white/10 backdrop-blur p-3 rounded-xl">
            <p className="text-xs">Results</p>
            <p className="font-bold text-yellow-400">Top Rankers</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;