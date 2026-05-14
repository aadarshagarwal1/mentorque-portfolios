import { person } from "../data";

const Footer = () => (
  <footer className="py-6 bg-[hsl(var(--nav-bg))] text-center text-white/60 text-sm">
    © {new Date().getFullYear()} {person.name}. All rights reserved.
  </footer>
);

export default Footer;
