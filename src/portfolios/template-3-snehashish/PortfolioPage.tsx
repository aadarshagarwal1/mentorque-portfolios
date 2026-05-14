// @ts-nocheck
// Template 3 Portfolio Page
// Dynamically injects the template's CSS variables + utility classes on mount
import { useEffect } from 'react';
import Index from './pages/Index';

const VARS = {
  '--background': '215 28% 6%',
  '--foreground': '0 0% 98%',
  '--card': '215 32% 9%',
  '--card-foreground': '0 0% 95%',
  '--popover': '215 32% 9%',
  '--popover-foreground': '0 0% 95%',
  '--primary': '213 94% 68%',
  '--primary-foreground': '215 28% 6%',
  '--secondary': '215 25% 15%',
  '--secondary-foreground': '0 0% 90%',
  '--muted': '215 25% 12%',
  '--muted-foreground': '0 0% 60%',
  '--accent': '197 100% 63%',
  '--accent-foreground': '215 28% 6%',
  '--destructive': '0 84% 60%',
  '--destructive-foreground': '0 0% 98%',
  '--border': '215 25% 15%',
  '--input': '215 25% 15%',
  '--ring': '213 94% 68%',
  '--radius': '0.75rem',
  '--hero-gradient': 'linear-gradient(135deg, hsl(213 94% 68% / 0.1), hsl(197 100% 63% / 0.05))',
  '--card-gradient': 'linear-gradient(135deg, hsl(215 32% 9%), hsl(215 25% 11%))',
  '--text-gradient': 'linear-gradient(135deg, hsl(213 94% 68%), hsl(197 100% 63%))',
  '--glow': '0 0 40px hsl(213 94% 68% / 0.3)',
  '--shadow-elevated': '0 25px 50px -12px hsl(215 28% 6% / 0.6)',
  '--transition-smooth': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '--transition-bounce': 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
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
  '--hero-gradient',
  '--card-gradient',
  '--text-gradient',
  '--glow',
  '--shadow-elevated',
  '--transition-smooth',
  '--transition-bounce'
];

export default function Template3Portfolio() {
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
        link.dataset.templateId = '3';
        document.head.appendChild(link);
        addedLinks.push(link);
      }
    };
    // No Google Fonts for this template

    // 3. Inject utility/animation CSS for this template
    const style = document.createElement('style');
    style.id = 'tmpl-3-css';
    style.textContent = `body {

  font-feature-settings: "cv11", "ss01";
  font-variation-settings: "opsz" 32;
}

.text-gradient {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-gradient {
  background: var(--hero-gradient);
}

.card-gradient {
  background: var(--card-gradient);
}

.glow {
  box-shadow: var(--glow);
}

.shadow-elevated {
  box-shadow: var(--shadow-elevated);
}

.transition-smooth {
  transition: var(--transition-smooth);
}

.transition-bounce {
  transition: var(--transition-bounce);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px hsl(213 94% 68% / 0.3);
  }
  50% {
    box-shadow: 0 0 40px hsl(213 94% 68% / 0.6);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--primary));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--accent));
}`;
    document.head.appendChild(style);

    // 4. Cleanup on unmount
    return () => {
      VAR_NAMES.forEach(p => {
        saved[p] ? root.style.setProperty(p, saved[p]) : root.style.removeProperty(p);
      });
      document.getElementById('tmpl-3-css')?.remove();
      addedLinks.forEach(l => l.remove());
    };
  }, []);

  return <Index />;
}
