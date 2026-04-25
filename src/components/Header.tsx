import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#features", label: "Features" },
  { href: "#faculty", label: "Faculty" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "glass-light shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-lg animate-glow-pulse" />
            <img src={logo} alt="Vaagdevi Tuitions logo" width={48} height={48} className="relative h-12 w-12 object-contain" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold text-primary">Vaagdevi</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Tuitions</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-semibold text-primary/85 transition-smooth hover:text-primary"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gradient-gold transition-smooth group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:9640958518"
            className="shine inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-bounce hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            96409 58518
          </a>
          <a
            href="#contact"
            className="shine inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-gold transition-bounce hover:scale-105"
          >
            Enroll Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full bg-primary p-2.5 text-primary-foreground shadow-soft lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-light mx-4 mt-3 rounded-2xl p-5 shadow-elegant lg:hidden animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-semibold text-primary">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 rounded-full bg-gradient-gold px-5 py-3 text-center font-bold text-accent-foreground shadow-gold">
              Enroll Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
