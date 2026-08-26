import { motion } from "framer-motion";
import { experiences } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-walnut-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <p className="text-sage-600 font-semibold uppercase tracking-wide text-sm mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-walnut-900">A track record of ownership</h2>
        </div>

        <div className="relative border-l-2 border-walnut-200 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-sage-600 border-4 border-walnut-50" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-1">
                <h3 className="font-display text-xl font-bold text-walnut-900">{exp.role}</h3>
                <span className="text-sm font-medium text-sage-700">{exp.period}</span>
              </div>
              <p className="font-semibold text-walnut-700 mb-3">{exp.company}</p>
              <ul className="space-y-2 mb-4">
                {exp.points.map((pt) => (
                  <li key={pt} className="text-sm text-walnut-600 leading-relaxed flex gap-2">
                    <span className="text-sage-500 mt-1.5">▪</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium bg-white border border-walnut-200 text-walnut-700 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
