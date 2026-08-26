import { Mail, Phone } from "lucide-react";
import { profile } from "../data/content";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-walnut-900 text-walnut-50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sage-300 font-semibold uppercase tracking-wide text-sm mb-3">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Building a design or configuration platform?
        </h2>
        <p className="text-walnut-200 leading-relaxed mb-10 max-w-xl mx-auto">
          I'd love to talk about how full-stack architecture, cabinetry domain knowledge, and hands-on
          leadership can help your product team ship faster.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-500 transition-colors rounded-full px-6 py-3 font-semibold"
          >
            <Mail size={18} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 border border-walnut-600 hover:border-sage-400 transition-colors rounded-full px-6 py-3 font-semibold"
          >
            <Phone size={18} /> {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-walnut-600 hover:border-sage-400 transition-colors rounded-full px-6 py-3 font-semibold"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
