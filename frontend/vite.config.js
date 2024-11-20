import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
 },
 resolve: {
  alias: {
    '@': '/src', // Example alias, not necessary for this error
  },
},
build: {
  rollupOptions: {
    external: [], // Avoid marking dependencies like react-router-dom as external unless necessary
  },
},
});
