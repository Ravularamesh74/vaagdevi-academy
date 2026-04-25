import {
  Users,
  BarChart3,
  Target,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

import books from "@/assets/books.jpg";
import homework from "@/assets/study-hall.jpg";
import experience from "@/assets/gallery-1.jpg";
import practice from "@/assets/gallery-5.jpg";
import attention from "@/assets/gallery-4.jpg";
import exam from "@/assets/10th-class.jpg";

const features = [
  {
    image: books,
    title: "All Subjects",
    desc: "Maths, Science, Social, English & languages — under one roof.",
    tag: "Complete Coverage",
  },
  {
    image: homework,
    title: "Homework Help",
    desc: "Daily guided support so no question goes unanswered.",
    tag: "Daily Support",
  },
  {
    image: experience,
    title: "15+ Years Experience",
    desc: "Seasoned teachers with proven board-result records.",
    tag: "Trusted Faculty",
  },
  {
    image: practice,
    title: "Daily Practice",
    desc: "Concept drills, worksheets and weekly revision tests.",
    tag: "Consistency",
  },
  {
    image: attention,
    title: "Individual Attention",
    desc: "Small batches so every student is mentored.",
    tag: "Personal Focus",
  },
  {
    image: exam,
    title: "Exam Preparation",
    desc: "Structured strategy for SSC, CBSE and ICSE.",
    tag: "Result Driven",
  },
];

const pillars = [
  { icon: Users, title: "Personalized Learning" },
  { icon: BarChart3, title: "Concept Clarity" },
  { icon: Target, title: "Better Results" },
  { icon: Lightbulb, title: "Bright Future" },
];

const Features = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-24 bg-[#0b0f19] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
            Special Features
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Why Parents Choose <span className="text-yellow-400">Vaagdevi</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Everything your child needs to build strong academic success.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const isActive = active === i;

            return (
              <div
                key={f.title}
                onClick={() => setActive(isActive ? null : i)}
                className="group cursor-pointer rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400/30 to-transparent hover:from-yellow-400 transition"
              >
                <div className="h-full rounded-3xl bg-[#121826] p-6 relative overflow-hidden">

                  {/* TAG */}
                  <span className="text-xs bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
                    {f.tag}
                  </span>

                  {/* IMAGE */}
                  <div className="mt-4 h-40 w-full overflow-hidden rounded-xl">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-lg font-bold">{f.title}</h3>

                  {/* DESC */}
                  <p className="text-sm text-gray-400 mt-2">
                    {f.desc}
                  </p>

                  {/* EXPANDABLE */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-32 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-xs text-gray-500">
                      ✔ Weekly tests<br />
                      ✔ Performance tracking<br />
                      ✔ Personal mentoring
                    </p>
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* PILLARS STRIP */}
        <div className="mt-20 rounded-3xl p-[1px] bg-gradient-to-r from-yellow-400/40 to-transparent">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#121826] rounded-3xl p-8">

            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-yellow-400 group-hover:text-black transition">
                  <p.icon size={20} />
                </div>

                <p className="font-semibold text-sm">
                  {p.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Enroll Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default Features;