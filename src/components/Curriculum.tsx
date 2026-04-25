import { Check } from "lucide-react";
import { useState } from "react";

const grades = [
  {
    class: "7th",
    focus: "Foundation building — strong basics in Maths & Science.",
    highlight: "Strong Base",
  },
  {
    class: "8th",
    focus: "Concept clarity, transition into board-style learning.",
    highlight: "Concept Focus",
  },
  {
    class: "9th",
    focus: "Pre-board preparation, deep subject mastery.",
    highlight: "Critical Year",
  },
  {
    class: "10th",
    focus: "Board exam strategy, full revision & mock tests.",
    highlight: "Board Focus",
  },
];

const boards = ["SSC", "CBSE", "ICSE"];

const Curriculum = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="curriculum" className="relative py-24 bg-[#0b0f19] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
              Curriculum
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
              Classes <span className="text-yellow-400">7th to 10th</span>
            </h2>

            <p className="mt-4 text-gray-400 max-w-xl">
              Structured coaching aligned with SSC, CBSE & ICSE — designed for clarity, confidence, and results.
            </p>
          </div>

          {/* BOARDS */}
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {boards.map((b) => (
              <span
                key={b}
                className="px-5 py-2 rounded-full bg-[#121826] border border-white/10 text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grades.map((g, i) => {
            const isActive = active === i;

            return (
              <div
                key={g.class}
                onClick={() => setActive(isActive ? null : i)}
                className="group cursor-pointer relative rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400/30 to-transparent hover:from-yellow-400 transition"
              >
                <div className="h-full rounded-3xl bg-[#121826] p-6 relative overflow-hidden">

                  {/* BIG NUMBER */}
                  <div className="absolute right-4 top-4 text-6xl font-black text-white/5 group-hover:text-yellow-400/20 transition">
                    {g.class}
                  </div>

                  {/* BADGE */}
                  <div className="inline-block px-3 py-1 text-xs font-bold bg-yellow-400 text-black rounded-full">
                    {g.highlight}
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    Class {g.class}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {g.focus}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-5 space-y-2">
                    {["Concept Mastery", "Daily Practice", "Doubt Clearing"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-black">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* EXPANDABLE SECTION */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <div className="text-xs text-gray-400 border-t border-white/10 pt-3">
                      ✔ Weekly tests<br />
                      ✔ Personal mentoring<br />
                      ✔ Performance tracking
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-5 w-full text-sm font-semibold py-2 rounded-xl bg-white/5 hover:bg-yellow-400 hover:text-black transition">
                    View Details
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;