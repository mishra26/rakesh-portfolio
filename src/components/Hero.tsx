import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden bg-walnut-50">
      {/* Blueprint-style decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#3e2e1e 1px, transparent 1px), linear-gradient(90deg, #3e2e1e 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 text-sage-700 font-semibold text-sm tracking-wide uppercase mb-4">
            <MapPin size={16} /> {profile.location}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-walnut-900 leading-tight mb-6">
            Engineering the tools designers use to shape{" "}
            <span className="text-sage-600">kitchens &amp; baths.</span>
          </h1>
          <p className="text-lg text-walnut-700 max-w-xl mb-8 leading-relaxed">{profile.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-walnut-900 text-white px-6 py-3 font-semibold hover:bg-walnut-800 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-walnut-900 text-walnut-900 px-6 py-3 font-semibold hover:bg-walnut-900 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-sage-200 via-walnut-100 to-walnut-200 border border-walnut-200 shadow-xl grid place-items-center">
            <div className="text-center px-8">
              <p className="font-display text-5xl font-bold text-walnut-900">9+</p>
              <p className="text-walnut-700 font-medium mt-1">Years building full-stack platforms</p>
              <div className="h-px bg-walnut-300 my-6" />
              <p className="font-display text-5xl font-bold text-sage-700">4</p>
              <p className="text-walnut-700 font-medium mt-1">Engineers led on SFx design platform</p>
              <div className="h-px bg-walnut-300 my-6" />
              <p className="font-display text-5xl font-bold text-walnut-900">33%</p>
              <p className="text-walnut-700 font-medium mt-1">Fewer geometry-fetch API calls</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
