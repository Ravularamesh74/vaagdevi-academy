import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const PHONE = "919640958518"; // WhatsApp format (91 + number)
const CALL = "9640958518";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ phone?: string }>({});

  const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone"));

    if (!validatePhone(phone)) {
      setErrors({ phone: "Enter valid 10-digit number" });
      return;
    }

    setSubmitting(true);

    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("✅ Enquiry sent! We’ll contact you soon.");
      form.reset();
    } catch {
      toast.error("Error submitting form");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b0f19] text-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-yellow-400 uppercase text-xs tracking-widest font-bold">
            Admissions Open
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            Enroll Your Child{" "}
            <span className="text-yellow-400">Today</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Limited seats. Trusted mentors. High results.
          </p>
        </div>

       <div className="grid lg:grid-cols-5 gap-10 mt-14">

  {/* ================= INFO PANEL ================= */}
  <div className="lg:col-span-2 relative rounded-3xl p-8 bg-gradient-to-br from-[#121826] to-[#0b0f19] border border-white/10 shadow-xl">

    {/* Glow */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full" />

    <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
    <p className="text-gray-400 text-sm mt-2">
      Quick response. Direct support. Trusted guidance.
    </p>

    {/* TRUST BADGE */}
    <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
      ⚡ Avg Response: under 30 mins
    </div>

    <div className="mt-8 space-y-7">

      {/* PHONE */}
      <div className="flex gap-4">
        <div className="p-3 rounded-xl bg-yellow-400 text-black">
          <Phone size={18} />
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase">Call Us</p>
          <a href={`tel:${CALL}`} className="text-lg font-bold text-white hover:text-yellow-400 transition">
            {CALL}
          </a>
          <p className="text-xs text-gray-500">Available during working hours</p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex gap-4">
        <div className="p-3 rounded-xl bg-yellow-400 text-black">
          <MapPin size={18} />
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase">Location</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Vishnupuri Colony, Road No.21 <br />
            Peerzadiguda, Hyderabad – 500098
          </p>
        </div>
      </div>

      {/* TIMINGS */}
      <div className="flex gap-4">
        <div className="p-3 rounded-xl bg-yellow-400 text-black">
          <Clock size={18} />
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase">Working Hours</p>
          <p className="text-sm text-gray-300">
            Mon – Sat · 4:00 PM – 9:00 PM
          </p>
        </div>
      </div>

      {/* RATING */}
      <div className="flex gap-4">
        <div className="p-3 rounded-xl bg-yellow-400 text-black">
          ⭐
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase">Rating</p>
          <p className="text-sm text-gray-300">
            5.0 Google Rating · 20+ Reviews
          </p>
        </div>
      </div>
    </div>

    {/* CTA BUTTONS */}
    <div className="mt-10 flex flex-col gap-3">

      <a
        href={`https://wa.me/${PHONE}?text=Hi, I want to enquire about admissions`}
        target="_blank"
        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition"
      >
        💬 Chat on WhatsApp
      </a>

      <a
        href={`tel:${CALL}`}
        className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-xl transition"
      >
        📞 Call Now
      </a>
    </div>
  </div>


  {/* ================= FORM PANEL ================= */}
  <form
    onSubmit={onSubmit}
    className="lg:col-span-3 relative rounded-3xl p-8 bg-gradient-to-br from-[#121826] to-[#0b0f19] border border-white/10 shadow-xl"
  >

    {/* Glow */}
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

    <h3 className="text-xl font-bold text-white">Admission Enquiry</h3>
    <p className="text-gray-400 text-sm mt-1">
      Fill the form and our team will contact you shortly
    </p>

    {/* GRID */}
    <div className="grid gap-6 sm:grid-cols-2 mt-6">

      <Input label="Student Name" name="name" />
      <Input label="Phone Number" name="phone" error={errors.phone} />

      <Select label="Class" name="class" options={["7th", "8th", "9th", "10th"]} />
      <Select label="Board" name="board" options={["SSC", "CBSE", "ICSE"]} />

    </div>

    {/* MESSAGE */}
    <div className="mt-6">
      <label className="text-xs text-gray-400 uppercase">Message</label>
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us your requirements..."
        className="w-full mt-2 p-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none"
      />
    </div>

    {/* CTA */}
    <button
      type="submit"
      className="mt-8 w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-4 rounded-full shadow-lg hover:scale-[1.02] transition"
    >
      {submitting ? "Submitting..." : "Submit Enquiry"}
    </button>

    {/* FOOT NOTE */}
    <p className="text-center text-xs text-gray-500 mt-3">
      🔒 Your data is सुरक्षित · We never spam
    </p>

  </form>
</div>

        {/* ================= MAP SECTION ================= */}
        <div className="mt-20 mb-10">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=17.4139,78.5990&z=15&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>

      </div>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href={`https://wa.me/${PHONE}`}
          target="_blank"
          className="bg-green-500 p-4 rounded-full shadow-lg text-black"
        >
          💬
        </a>

        <a
          href={`tel:${CALL}`}
          className="bg-yellow-400 p-4 rounded-full shadow-lg text-black"
        >
          📞
        </a>
      </div>
    </section>
  );
};

/* INPUT */
const Input = ({ label, error, ...props }: any) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <input
      {...props}
      className="w-full mt-2 p-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white"
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

/* SELECT */
const Select = ({ label, name, options }: any) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <select
      name={name}
      className="w-full mt-2 p-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white"
    >
      <option value="">Select</option>
      {options.map((o: string) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

export default Contact;