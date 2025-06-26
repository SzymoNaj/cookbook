import { defineConfig } from 'vitest/config'; // ZAMIANA tu!
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupDoTestów.ts',
  },
});
