import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
 },
 build: {
  rollupOptions: {
    external: [
      'react-router-dom',
      'react-toastify',
      'react-toastify/dist/ReactToastify.css',
      'axios'
    ]
  }
}
});
