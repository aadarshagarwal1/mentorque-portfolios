// @ts-nocheck
// Template 2 Portfolio Page
// Dynamically injects the template's CSS variables + utility classes on mount
import { useEffect } from 'react';
import Index from './pages/Index';

const VARS = {
  '--background': '0 0% 0%',
  '--foreground': '0 0% 98%',
  '--card': '0 0% 4%',
  '--card-foreground': '0 0% 98%',
  '--popover': '0 0% 6%',
  '--popover-foreground': '0 0% 98%',
  '--primary': '270 91% 65%',
  '--primary-foreground': '0 0% 0%',
  '--secondary': '0 0% 12%',
  '--secondary-foreground': '0 0% 98%',
  '--muted': '0 0% 15%',
  '--muted-foreground': '0 0% 65%',
  '--accent': '270 91% 65%',
  '--accent-foreground': '0 0% 0%',
  '--destructive': '0 72% 50%',
  '--destructive-foreground': '0 85% 97%',
  '--border': '0 0% 14%',
  '--input': '0 0% 14%',
  '--ring': '270 91% 65%',
  '--radius': '0rem',
  '--gradient-primary': 'linear-gradient(135deg, hsl(270 91% 65%) 0%, hsl(280 100% 70%) 100%)',
  '--gradient-subtle': 'linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 4%) 100%)',
  '--gradient-glow': 'radial-gradient(ellipse at center, hsl(270 91% 65% / 0.15) 0%, transparent 70%)',
  '--gradient-card': 'linear-gradient(145deg, hsl(0 0% 8% / 0.8) 0%, hsl(270 91% 65% / 0.1) 100%)',
  '--shadow-glow': '0 0 60px hsl(270 91% 65% / 0.3)',
  '--shadow-card': '0 25px 50px -12px hsl(0 0% 0% / 0.8)',
  '--shadow-elevated': '0 0 0 1px hsl(0 0% 14%), 0 25px 50px -12px hsl(0 0% 0% / 0.5)',
  '--font-display': '\'Space Grotesk\', sans-serif',
  '--font-body': '\'Inter\', sans-serif',
  '--sidebar-background': '0 0% 4%',
  '--sidebar-foreground': '222 47% 11%',
  '--sidebar-primary': '216 19% 26%',
  '--sidebar-primary-foreground': '210 19% 98%',
  '--sidebar-accent': '215 19% 34%',
  '--sidebar-accent-foreground': '210 40% 98%',
  '--sidebar-border': '212 26% 83%',
  '--sidebar-ring': '216 19% 26%',
  '--chart-1': '217 10% 64%',
  '--chart-2': '215 20% 65%',
  '--chart-3': '215 16% 46%',
  '--chart-4': '219 8% 46%',
  '--chart-5': '215 19% 34%',
  '--sidebar': '210 40% 98%',
  '--font-sans': '\'DM Sans\', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif',
  '--font-serif': '\'Crimson Pro\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '--font-mono': '\'SF Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace',
  '--shadow-2xs': '0 1px 3px 0px hsl(0 0% 0% / 0.05)',
  '--shadow-xs': '0 1px 3px 0px hsl(0 0% 0% / 0.05)',
  '--shadow-sm': '0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)',
  '--shadow': '0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)',
  '--shadow-md': '0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1)',
  '--shadow-lg': '0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)',
  '--shadow-xl': '0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1)',
  '--shadow-2xl': '0 1px 3px 0px hsl(0 0% 0% / 0.25)',
  '--tracking-normal': '0em',
  '--spacing': '0.25rem'
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
  '--gradient-primary',
  '--gradient-subtle',
  '--gradient-glow',
  '--gradient-card',
  '--shadow-glow',
  '--shadow-card',
  '--shadow-elevated',
  '--font-display',
  '--font-body',
  '--sidebar-background',
  '--sidebar-foreground',
  '--sidebar-primary',
  '--sidebar-primary-foreground',
  '--sidebar-accent',
  '--sidebar-accent-foreground',
  '--sidebar-border',
  '--sidebar-ring',
  '--chart-1',
  '--chart-2',
  '--chart-3',
  '--chart-4',
  '--chart-5',
  '--sidebar',
  '--font-sans',
  '--font-serif',
  '--font-mono',
  '--shadow-2xs',
  '--shadow-xs',
  '--shadow-sm',
  '--shadow',
  '--shadow-md',
  '--shadow-lg',
  '--shadow-xl',
  '--shadow-2xl',
  '--tracking-normal',
  '--spacing'
];

export default function Template2Portfolio() {
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
        link.dataset.templateId = '2';
        document.head.appendChild(link);
        addedLinks.push(link);
      }
    };
    addFont('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
    addFont('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
    addFont('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&display=swap');

    // 3. Inject utility/animation CSS for this template
    const style = document.createElement('style');
    style.id = 'tmpl-2-css';
    style.textContent = `html {
  scroll-behavior: smooth;
}

body {

  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

.text-gradient {

  background-image: var(--gradient-primary);
}

.bg-gradient-primary {
  background-image: var(--gradient-primary);
}

.bg-gradient-subtle {
  background-image: var(--gradient-subtle);
}

.bg-gradient-glow {
  background-image: var(--gradient-glow);
}

.shadow-glow {
  box-shadow: var(--shadow-glow);
}

.shadow-card {
  box-shadow: var(--shadow-card);
}

.shadow-elevated {
  box-shadow: var(--shadow-elevated);
}

.glass-card {

  background: var(--gradient-card);
}

.hover-lift:hover {

  box-shadow: var(--shadow-glow);
}

.link-underline::after {
  content: '';

  background-image: var(--gradient-primary);
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

.animate-glow-pulse {
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(0 0% 4%);
}

::-webkit-scrollbar-thumb {
  background: hsl(0 0% 20%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(270 91% 65%);
}`;
    document.head.appendChild(style);

    // 4. Cleanup on unmount
    return () => {
      VAR_NAMES.forEach(p => {
        saved[p] ? root.style.setProperty(p, saved[p]) : root.style.removeProperty(p);
      });
      document.getElementById('tmpl-2-css')?.remove();
      addedLinks.forEach(l => l.remove());
    };
  }, []);

  return <Index />;
}
