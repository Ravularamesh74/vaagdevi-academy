import pamphlet from "@/assets/pamphlet.png";
import { Download, ZoomIn } from "lucide-react";
import { useState } from "react";

const Pamphlet = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 bg-[#0b0f19] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
              Official Brochure
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
              Everything in <span className="text-yellow-400">One Page</span>
            </h2>

            <p className="mt-4 text-gray-400 max-w-md">
              Explore our full programme — subjects, faculty, results, and contact — all in one beautifully designed brochure.
            </p>

            {/* URGENCY */}
            <p className="mt-3 text-green-400 text-sm font-semibold">
              🔥 Admissions closing soon
            </p>

            {/* FEATURES */}
            <ul className="mt-6 space-y-3 text-gray-300">
              {[
                "Classes 7th–10th (SSC, CBSE, ICSE)",
                "All subjects covered",
                "Daily practice & tests",
                "15+ years expert faculty",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="mt-1 w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/pamphlet.pdf"
                download
                className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                <Download size={16} />
                Download PDF
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
              >
                Reserve Seat
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto max-w-md">

            {/* GLOW */}
            <div className="absolute -inset-6 bg-yellow-400/20 blur-3xl rounded-3xl animate-pulse" />

            {/* CARD */}
            <div
              onClick={() => setOpen(true)}
              className="relative cursor-pointer rounded-3xl overflow-hidden bg-[#121826] p-3 shadow-2xl group"
            >
              <img
                src={pamphlet}
                className="rounded-2xl transition duration-500 group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <ZoomIn size={28} />
              </div>

              {/* FLOAT BADGE */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                Official
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={pamphlet}
            className="max-h-[90vh] rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export default Pamphlet;