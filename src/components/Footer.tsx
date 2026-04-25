import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE = "9640958518";
const WHATSAPP = "919640958518";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f19] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 py-20 relative">

        {/* 🔥 TRUST STRIP */}
        <div className="mb-12 grid sm:grid-cols-3 gap-4 text-center">
          {[
            "1000+ Students Trained",
            "15+ Years Experience",
            "95% Success Rate",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-xl py-3 text-sm text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <img src={logo} className="w-14 h-14 object-contain" />
              <div>
                <h2 className="text-2xl font-bold">Vaagdevi Tuitions</h2>
                <p className="text-xs tracking-widest text-yellow-400 uppercase">
                  Learn Today · Lead Tomorrow
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-400 max-w-md text-sm leading-relaxed">
              Hyderabad’s trusted tuition centre for Classes 7–10. We focus on
              concept clarity, discipline, and consistent results.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
              >
                📞 Call Now
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi, I want to enquire about admissions`}
                target="_blank"
                className="bg-green-500 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-bold text-lg text-yellow-400">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {["Home", "Curriculum", "Features", "Faculty", "Contact"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="hover:text-yellow-400 transition"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-lg text-yellow-400">Contact</h3>

            <div className="mt-4 space-y-4 text-sm text-gray-400">

              <div className="flex gap-3">
                <Phone className="text-yellow-400" size={16} />
                <a href={`tel:${PHONE}`} className="hover:text-white">
                  {PHONE}
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-400" size={16} />
                <a
                  href="mailto:vaagdevituitions@gmail.com"
                  className="hover:text-white break-all"
                >
                  vaagdevituitions@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-yellow-400" size={16} />
                <span>
                  Vishnupuri Colony,<br />
                  Peerzadiguda, Hyderabad – 500098
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">

          <p>
            © {new Date().getFullYear()} Vaagdevi Tuitions. All rights reserved.
          </p>

          <p className="text-center">
            Built for student success 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;