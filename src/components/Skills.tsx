import { motion } from "framer-motion";
import { skillGroups, certifications, education } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-walnut-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-sage-600 font-semibold uppercase tracking-wide text-sm mb-3">Skills &amp; Background</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-walnut-900">
            Full-stack depth, domain-specific edge
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl bg-white border border-walnut-100 p-6"
            >
              <h3 className="font-semibold text-walnut-900 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium bg-walnut-100 text-walnut-800 px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-walnut-100 p-6">
            <h3 className="font-semibold text-walnut-900 mb-4">Education</h3>
            {education.map((ed) => (
              <div key={ed.school}>
                <p className="font-medium text-walnut-800">{ed.school}</p>
                <p className="text-sm text-walnut-600">{ed.degree}</p>
                <p className="text-sm text-sage-700">{ed.period}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-white border border-walnut-100 p-6">
            <h3 className="font-semibold text-walnut-900 mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-walnut-600">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
