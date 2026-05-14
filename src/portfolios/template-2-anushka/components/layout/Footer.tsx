import { person } from '../../data';

const Footer = () => (
  <footer className="py-8 border-t border-border/50 text-center text-muted-foreground text-sm font-body">
    © {new Date().getFullYear()} {person.name}. All rights reserved.
  </footer>
);

export default Footer;
