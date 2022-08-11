import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false, //不在开发阶段因为 ESLint 的错误打断开发
      include: ['src/**/*.js', 'src/**/*.tsx', 'src/**/*.ts'],
    }),
  ],
});
