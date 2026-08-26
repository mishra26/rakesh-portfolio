import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-sage-600 font-semibold uppercase tracking-wide text-sm mb-3">Selected Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-walnut-900">
            Platforms that power real design decisions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.article
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-walnut-100 p-7 hover:shadow-lg hover:-translate-y-1 transition-all bg-walnut-50/40"
            >
              <h3 className="font-display text-xl font-bold text-walnut-900 mb-3">{proj.title}</h3>
              <p className="text-sm text-walnut-600 leading-relaxed mb-5">{proj.summary}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {proj.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-walnut-700">
                    <CheckCircle2 size={16} className="text-sage-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-sage-600/10 text-sage-700 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
