import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vaagdevi Tuitions" width={56} height={56} className="h-14 w-14 object-contain" />
              <div>
                <p className="font-display text-2xl font-bold">Vaagdevi Tuitions</p>
                <p className="text-xs uppercase tracking-[0.25em] text-accent">Learn Today · Lead Tomorrow</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Hyderabad's trusted tuition centre for Classes 7th–10th, building strong academic foundations through personalised mentoring.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-primary-foreground/85 transition-smooth hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-display text-lg font-bold text-accent-glow">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Home", "Curriculum", "Features", "Faculty", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/75 transition-smooth hover:text-accent-glow">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-lg font-bold text-accent-glow">Reach Us</p>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:9640958518" className="hover:text-accent-glow">96409 58518</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:vaagdevituitions@gmail.com" className="hover:text-accent-glow break-all">vaagdevituitions@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>Vishnupuri Colony, Peerzadiguda, Hyderabad - 500098</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Vaagdevi Tuitions. All rights reserved.</p>
          <p>Designed with ✨ for brighter futures.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
