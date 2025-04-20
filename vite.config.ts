import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      // MDX 插件选项（如果需要配置的话）
    }),
  ],
  // resolve: {
  //   alias: {
  //     // 设置别名（如果需要）
  //     '@components': '/src/components',
  //   },
  // },
  // server: {
  //   port: 3000, // 你可以自定义开发服务器的端口
  // },
});
