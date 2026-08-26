import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-walnut-900 text-walnut-400 text-sm text-center py-6 border-t border-walnut-800">
      © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
    </footer>
  );
}
