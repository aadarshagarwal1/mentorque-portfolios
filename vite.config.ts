import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Portfolio templates use 'motion/react' (standalone motion pkg) — map to framer-motion
      'motion/react': path.resolve(__dirname, 'node_modules/framer-motion'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
