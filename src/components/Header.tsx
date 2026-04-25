import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#features", label: "Features" },
  { href: "#faculty", label: "Faculty" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  /* 🔥 SCROLL EFFECT + PROGRESS */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / height) * 100);

      // detect active section
      links.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(l.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 TOP PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-yellow-400 to-orange-400 z-[60]"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0b0f19]/80 shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-lg opacity-0 group-hover:opacity-100 transition" />
              <img src={logo} className="h-12 w-12 relative" />
            </div>

            <div>
              <p className="font-bold text-white text-lg">Vaagdevi</p>
              <p className="text-[10px] uppercase tracking-widest text-yellow-400">
                Tuitions
              </p>
            </div>
          </a>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-semibold transition ${
                  active === l.href
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {l.label}

                {/* underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-yellow-400 transition-all ${
                    active === l.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:9640958518"
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition"
            >
              <Phone size={16} />
              96409 58518
            </a>

            <a
              href="#contact"
              className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition"
            >
              Enroll Now
            </a>
          </div>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full bg-white/10"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-3 rounded-2xl bg-[#121826] p-5 shadow-xl">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-gray-300 hover:text-yellow-400"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-3 bg-yellow-400 text-black py-3 rounded-full text-center font-bold"
              >
                Enroll Now
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;