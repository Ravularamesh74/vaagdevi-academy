import { Quote, Star, Play } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "My son's confidence in Maths improved drastically in just 3 months.",
    name: "Anitha R.",
    role: "Parent · Class 9",
    result: "Marks improved from 55% → 88%",
    img: "/avatar1.jpg",
  },
  {
    text: "I scored 92% in SSC boards thanks to the structured teaching.",
    name: "Rohit K.",
    role: "Student · Class 10",
    result: "Final Score: 92%",
    img: "/avatar2.jpg",
  },
  {
    text: "English became my strongest subject. Amazing mentoring.",
    name: "Sneha P.",
    role: "Student · Class 8",
    result: "Top in class",
    img: "/avatar3.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-[#0b0f19] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
            Trusted by Parents
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Real <span className="text-yellow-400">Results</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Proven success stories from our students
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="mt-16 max-w-4xl mx-auto relative">

          <div className="rounded-3xl bg-[#121826] p-10 text-center shadow-2xl transition">

            {/* QUOTE ICON */}
            <Quote className="mx-auto text-yellow-400" size={36} />

            {/* TEXT */}
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              "{testimonials[index].text}"
            </p>

            {/* RESULT BADGE */}
            <div className="mt-4 inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-xs font-semibold">
              {testimonials[index].result}
            </div>

            {/* STARS */}
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* PROFILE */}
            <div className="mt-6 flex flex-col items-center">
              <img
                src={testimonials[index].img}
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
              />
              <p className="mt-2 font-bold">{testimonials[index].name}</p>
              <p className="text-xs text-gray-400">{testimonials[index].role}</p>
            </div>

            {/* VIDEO CTA */}
            <button className="mt-6 flex items-center gap-2 mx-auto text-sm text-yellow-400 hover:underline">
              <Play size={16} />
              Watch Video Testimonial
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  index === i ? "bg-yellow-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Enroll Your Child Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;