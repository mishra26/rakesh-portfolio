import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-walnut-50/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold text-walnut-900">
          Rakesh Mishra
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-walnut-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-sage-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block rounded-full bg-sage-600 text-white text-sm font-semibold px-5 py-2 hover:bg-sage-700 transition-colors"
        >
          Let's Talk
        </a>
        <button className="md:hidden text-walnut-900" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-walnut-50 border-t border-walnut-200 px-6 py-4">
          <ul className="flex flex-col gap-4 text-walnut-700 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
