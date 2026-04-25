import { useEffect, useRef, useState } from "react";

/* ================= COUNTER ================= */

const Counter = ({
  target,
  suffix = "",
  duration = 1500,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
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
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ================= STATS ================= */

const stats = [
  { value: 1000, label: "Students Trained", suffix: "+" },
  { value: 95, label: "Success Rate", suffix: "%" },
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 50, label: "Top Rankers", suffix: "+" },
];

const Stats = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0b0f19] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
            Our Impact
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Proven <span className="text-yellow-400">Results</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Numbers that reflect our commitment to excellence and student success.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="group rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400/30 to-transparent hover:from-yellow-400 transition"
            >
              <div className="rounded-3xl bg-[#121826] p-8 text-center relative overflow-hidden">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-yellow-400 blur-2xl transition" />

                {/* NUMBER */}
                <h3 className="text-4xl font-bold text-yellow-400">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </h3>

                {/* LABEL */}
                <p className="mt-3 text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;