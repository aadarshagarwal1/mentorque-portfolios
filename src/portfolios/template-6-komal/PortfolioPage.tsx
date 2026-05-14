// @ts-nocheck
// Template 6 Portfolio Page — injects dark theme CSS vars on mount
import { useEffect } from "react";
import Index from "./pages/Index";

const VARS: Record<string, string> = {
  "--background": "220 25% 6%",
  "--foreground": "210 40% 98%",
  "--card": "220 25% 8%",
  "--card-foreground": "210 40% 98%",
  "--popover": "220 25% 8%",
  "--popover-foreground": "210 40% 98%",
  "--primary": "217 91% 60%",
  "--primary-foreground": "220 25% 6%",
  "--secondary": "217 32% 17%",
  "--secondary-foreground": "210 40% 98%",
  "--muted": "217 32% 17%",
  "--muted-foreground": "215 20% 65%",
  "--accent": "217 32% 17%",
  "--accent-foreground": "210 40% 98%",
  "--destructive": "0 63% 31%",
  "--destructive-foreground": "210 40% 98%",
  "--border": "217 32% 17%",
  "--input": "217 32% 17%",
  "--ring": "213 27% 84%",
  "--radius": "0.5rem",
};

export default function Template6Portfolio() {
  useEffect(() => {
    const root = document.documentElement;
    const saved: Record<string, string> = {};
    Object.keys(VARS).forEach((p) => { saved[p] = root.style.getPropertyValue(p); });
    Object.entries(VARS).forEach(([p, v]) => root.style.setProperty(p, v));

    const style = document.createElement("style");
    style.id = "tmpl-6-css";
    style.textContent = `
      @keyframes fade-in { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
      .animate-fade-in { animation: fade-in 1s ease-out; }
    `;
    document.head.appendChild(style);

    return () => {
      Object.keys(VARS).forEach((p) => {
        saved[p] ? root.style.setProperty(p, saved[p]) : root.style.removeProperty(p);
      });
      document.getElementById("tmpl-6-css")?.remove();
    };
  }, []);

  return <Index />;
}
