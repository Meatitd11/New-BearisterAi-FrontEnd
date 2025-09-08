    // vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import tailwindcss from '@tailwindcss/vite';

    export default defineConfig({
      base: 'https://bearisterai.com.innovativetech.dev/',
      plugins: [
        react(),
        tailwindcss()
      ],
    })