// @ts-nocheck
// Template 4 Portfolio Page
// Dynamically injects the template's CSS variables + utility classes on mount
import { useEffect } from 'react';
import Index from './pages/Index';

const VARS = {
  '--background': '0 0% 100%',
  '--foreground': '220 13% 13%',
  '--card': '0 0% 100%',
  '--card-foreground': '220 13% 13%',
  '--popover': '0 0% 100%',
  '--popover-foreground': '220 13% 13%',
  '--primary': '202 100% 37%',
  '--primary-foreground': '0 0% 100%',
  '--secondary': '220 13% 18%',
  '--secondary-foreground': '0 0% 100%',
  '--muted': '220 13% 95%',
  '--muted-foreground': '220 9% 46%',
  '--accent': '202 55% 92%',
  '--accent-foreground': '202 100% 22%',
  '--destructive': '0 84% 60%',
  '--destructive-foreground': '220 13% 98%',
  '--border': '220 13% 91%',
  '--input': '220 13% 91%',
  '--ring': '202 100% 37%',
  '--radius': '0.75rem',
  '--hero-bg': '220 25% 6%',
  '--hero-accent': '142 84% 44%',
  '--nav-bg': '220 25% 8%',
  '--section-bg': '220 13% 98%',
  '--skill-bg': '202 45% 96%',
  '--gradient-primary': 'linear-gradient(135deg, hsl(202 100% 37%), hsl(202 90% 30%))',
  '--gradient-hero': 'linear-gradient(135deg, hsl(220 28% 8%), hsl(202 45% 18%))',
  '--gradient-card': 'linear-gradient(145deg, hsl(0 0% 100%), hsl(220 13% 98%))',
  '--gradient-accent': 'linear-gradient(120deg, hsl(142 84% 44%), hsl(180 84% 44%))',
  '--shadow-sm': '0 1px 2px 0 hsl(220 13% 69% / 0.05)',
  '--shadow-md': '0 4px 6px -1px hsl(220 13% 69% / 0.1), 0 2px 4px -1px hsl(220 13% 69% / 0.06)',
  '--shadow-lg': '0 10px 15px -3px hsl(220 13% 69% / 0.1), 0 4px 6px -2px hsl(220 13% 69% / 0.05)',
  '--shadow-xl': '0 20px 25px -5px hsl(220 13% 69% / 0.1), 0 10px 10px -5px hsl(220 13% 69% / 0.04)',
  '--shadow-glow': '0 0 40px hsl(202 100% 37% / 0.18)',
  '--sidebar-background': '0 0% 98%',
  '--sidebar-foreground': '240 5.3% 26.1%',
  '--sidebar-primary': '240 5.9% 10%',
  '--sidebar-primary-foreground': '0 0% 98%',
  '--sidebar-accent': '240 4.8% 95.9%',
  '--sidebar-accent-foreground': '240 5.9% 10%',
  '--sidebar-border': '220 13% 91%',
  '--sidebar-ring': '217.2 91.2% 59.8%'
};

const VAR_NAMES = [
  '--background',
  '--foreground',
  '--card',
  '--card-foreground',
  '--popover',
  '--popover-foreground',
  '--primary',
  '--primary-foreground',
  '--secondary',
  '--secondary-foreground',
  '--muted',
  '--muted-foreground',
  '--accent',
  '--accent-foreground',
  '--destructive',
  '--destructive-foreground',
  '--border',
  '--input',
  '--ring',
  '--radius',
  '--hero-bg',
  '--hero-accent',
  '--nav-bg',
  '--section-bg',
  '--skill-bg',
  '--gradient-primary',
  '--gradient-hero',
  '--gradient-card',
  '--gradient-accent',
  '--shadow-sm',
  '--shadow-md',
  '--shadow-lg',
  '--shadow-xl',
  '--shadow-glow',
  '--sidebar-background',
  '--sidebar-foreground',
  '--sidebar-primary',
  '--sidebar-primary-foreground',
  '--sidebar-accent',
  '--sidebar-accent-foreground',
  '--sidebar-border',
  '--sidebar-ring'
];

export default function Template4Portfolio() {
  useEffect(() => {
    const root = document.documentElement;

    // 1. Save & override CSS variables
    const saved: Record<string, string> = {};
    VAR_NAMES.forEach(p => { saved[p] = root.style.getPropertyValue(p); });
    Object.entries(VARS).forEach(([p, v]) => root.style.setProperty(p, v));

    // 2. Inject Google Fonts
    const addedLinks: HTMLLinkElement[] = [];
    const addFont = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.dataset.templateId = '4';
        document.head.appendChild(link);
        addedLinks.push(link);
      }
    };
    addFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    addFont('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

    // 3. Inject utility/animation CSS for this template
    const style = document.createElement('style');
    style.id = 'tmpl-4-css';
    style.textContent = `body {

  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}`;
    document.head.appendChild(style);

    // 4. Cleanup on unmount
    return () => {
      VAR_NAMES.forEach(p => {
        saved[p] ? root.style.setProperty(p, saved[p]) : root.style.removeProperty(p);
      });
      document.getElementById('tmpl-4-css')?.remove();
      addedLinks.forEach(l => l.remove());
    };
  }, []);

  return <Index />;
}
