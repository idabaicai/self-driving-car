import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

function resolvePath(paths: string) {
  return path.resolve(__dirname, paths);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  server: {
    host: true,
  },
});
