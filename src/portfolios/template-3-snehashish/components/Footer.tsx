import { person } from "../data";

const Footer = () => (
  <footer className="py-6 bg-gray-900 text-center text-gray-500 text-sm border-t border-gray-800">
    © {new Date().getFullYear()} {person.name}. All rights reserved.
  </footer>
);

export default Footer;
