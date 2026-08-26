import { motion } from "framer-motion";
import { Boxes, Ruler, Users, Cloud } from "lucide-react";

const pillars = [
  {
    icon: Boxes,
    title: "Inspiration to Manufacturing",
    text: "I've worked across the full space-design pipeline — from 3D catalog browsing and room composition to pricing and the data that eventually drives manufacturing.",
  },
  {
    icon: Ruler,
    title: "Cabinetry Domain Fluency",
    text: "Comfortable with the real-world mechanics of cabinetry: configuration rules, catalog/SKU structures, regional pricing, and how design decisions map to a bill of materials.",
  },
  {
    icon: Users,
    title: "Small-Team Leadership",
    text: "I lead 3–4 person engineering teams — owning architecture decisions, unblocking teammates, and staying hands-on with the hardest integration problems.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Systems",
    text: "Deep experience architecting resilient services on Azure and AWS — functions, service bus, SignalR, and the DevOps pipelines that ship them safely.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sage-600 font-semibold uppercase tracking-wide text-sm mb-3">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-walnut-900 mb-4">
            Where software architecture meets the design studio
          </h2>
          <p className="text-walnut-700 leading-relaxed">
            As Associate Tech Lead at Cyncly, I sit at the intersection of complex distributed systems and the
            real needs of kitchen &amp; bath designers — translating catalog data, geometry, and pricing rules
            into a design tool that feels effortless to use.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-walnut-100 bg-walnut-50/60 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-sage-600/10 text-sage-700 grid place-items-center mb-4">
                <p.icon size={22} />
              </div>
              <h3 className="font-semibold text-walnut-900 mb-2">{p.title}</h3>
              <p className="text-sm text-walnut-600 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
