import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0f19] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="text-center px-6 max-w-xl">

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-yellow-400">404</h1>

        {/* MESSAGE */}
        <h2 className="mt-4 text-2xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* SUGGESTIONS */}
        <p className="mt-4 text-sm text-gray-500">
          Try going back to homepage or contact us directly.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="/"
            className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            <ArrowLeft size={16} />
            Go Home
          </a>

          <a
            href="#contact"
            className="bg-white/10 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
          >
            Contact Us
          </a>

          <a
            href="tel:9640958518"
            className="flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            <Phone size={16} />
            Call Now
          </a>

        </div>

        {/* EXTRA */}
        <p className="mt-10 text-xs text-gray-500">
          Need help? We’re just one call away.
        </p>
      </div>
    </section>
  );
};

export default NotFound;