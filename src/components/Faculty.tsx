import praveen from "@/assets/founder.jpg";
import manjula from "@/assets/image.png";
import { Phone } from "lucide-react";
import { useState } from "react";

const PHONE = "9640958518";

const faculty = [
  {
    name: "V. Praveen",
    qual: "M.Sc., B.Ed.",
    role: "Founder",
    subjects: ["Mathematics", "Science"],
    exp: "15+ Years Experience",
    bio: "Specialist in building strong fundamentals and producing top board rankers.",
    img: praveen,
  },
  {
    name: "D. Manjula",
    qual: "M.Sc., B.Ed.",
    role: "Co-founder",
    subjects: ["English", "Social"],
    exp: "12+ Years Experience",
    bio: "Expert in improving student confidence and communication skills.",
    img: manjula,
  },
];

const Faculty = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faculty" className="py-24 bg-[#0b0f19] text-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
            Meet the Mentors
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Faculty Who <span className="text-yellow-400">Build Achievers</span>
          </h2>

          <p className="mt-4 text-gray-400">
            We don’t just teach — we transform students into achievers.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {faculty.map((f, i) => {
            const isActive = active === i;

            return (
              <div
                key={f.name}
                onClick={() => setActive(isActive ? null : i)}
                className="group cursor-pointer rounded-3xl p-[1px] bg-gradient-to-br from-yellow-400/30 to-transparent hover:from-yellow-400 transition"
              >
                <div className="rounded-3xl bg-[#121826] overflow-hidden">

                  <div className="grid sm:grid-cols-5">

                    {/* IMAGE */}
                    <div className="relative sm:col-span-2">
                      <img
                        src={f.img}
                        alt={f.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* OVERLAY BADGE */}
                      <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                        {f.exp}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 sm:col-span-3">

                      <p className="text-xs text-gray-400 uppercase">
                        {f.role}
                      </p>

                      <h3 className="text-xl font-bold mt-1">
                        {f.name}
                        <span className="text-sm text-gray-400 ml-2">
                          {f.qual}
                        </span>
                      </h3>

                      {/* SUBJECT TAGS */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {f.subjects.map((s) => (
                          <span
                            key={s}
                            className="text-xs bg-white/5 px-3 py-1 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-gray-400 mt-3">
                        {f.bio}
                      </p>

                      {/* EXPANDABLE */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isActive ? "max-h-32 mt-3" : "max-h-0"
                        }`}
                      >
                        <p className="text-xs text-gray-500">
                          ✔ Personalized mentoring <br />
                          ✔ Weekly progress tracking <br />
                          ✔ Board-focused strategy
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-3 mt-5">
                        <a
                          href={`tel:${PHONE}`}
                          className="flex-1 text-center bg-yellow-400 text-black font-semibold py-2 rounded-xl"
                        >
                          📞 Call
                        </a>

                        <a
                          href={`https://wa.me/91${PHONE}`}
                          target="_blank"
                          className="flex-1 text-center bg-green-500 text-black font-semibold py-2 rounded-xl"
                        >
                          💬 WhatsApp
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faculty;