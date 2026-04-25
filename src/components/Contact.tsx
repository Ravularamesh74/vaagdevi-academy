import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Enquiry received! We'll call you within 2 hours.");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Admissions Open</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            Enroll Your Child <span className="text-gradient-primary">Today</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Limited seats. Reserve a spot for the new academic batch.</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant lg:col-span-2">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <h3 className="font-display text-2xl font-bold">Get in Touch</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Speak to our mentors directly.</p>

            <div className="relative mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Call Us</p>
                  <a href="tel:9640958518" className="text-base font-bold hover:text-accent-glow">96409 58518</a>
                  <p className="text-sm text-primary-foreground/80">V. Praveen · D. Manjula</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Visit</p>
                  <p className="text-sm leading-relaxed">
                    H.No. 17-22/3, Vishnupuri Colony, Road No. 21,<br />
                    Peerzadiguda, Mdl. Medipally,<br />
                    Medchal-Malkajgiri Dist., Hyderabad - 500098
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Hours</p>
                  <p className="text-sm">Mon – Sat · 4:00 PM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="relative rounded-3xl bg-card p-8 shadow-card lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Student Name" name="name" placeholder="Full name" required />
              <Field label="Phone Number" name="phone" placeholder="10-digit mobile" type="tel" required />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/80">Class / Grade</label>
                <select
                  required
                  name="class"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/40"
                >
                  <option value="">Select class</option>
                  <option>7th Class</option>
                  <option>8th Class</option>
                  <option>9th Class</option>
                  <option>10th Class</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/80">Curriculum</label>
                <select
                  required
                  name="board"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/40"
                >
                  <option value="">Select board</option>
                  <option>SSC</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                </select>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-primary/80">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your child's needs…"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="shine mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-bold text-accent-foreground shadow-gold transition-bounce hover:scale-[1.02] disabled:opacity-70"
            >
              {submitting ? "Sending…" : (
                <>
                  Request Free Demo <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              100% Free · No commitment · Callback within 2 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold uppercase tracking-widest text-primary/80">{label}</label>
    <input
      {...props}
      className="rounded-xl border border-input bg-background px-4 py-3 text-sm font-medium outline-none transition-smooth focus:border-accent focus:ring-2 focus:ring-accent/40"
    />
  </div>
);

export default Contact;
