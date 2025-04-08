import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // dış IP'lerden erişim için
    port: 3000       // Render veya başka platformların yaygın portu
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['json', 'verbose'],
    outputFile: './resultz.json',
  },
});
