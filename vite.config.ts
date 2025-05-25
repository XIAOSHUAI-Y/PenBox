import { defineConfig } from 'vite' ;
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-react-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // pages({
    //   pagesDir: 'docs', // 我们将文档写在 docs/ 下
    // }),
  ],
})
