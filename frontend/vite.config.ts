import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    // },
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components/index"),
      hooks: path.resolve(__dirname, "src/hooks/index"),
      screens: path.resolve(__dirname, "src/screens/index"),
      types: path.resolve(__dirname, "src/types"),
      assets: path.resolve(__dirname, "src/assets"),
      styles: path.resolve(__dirname, "src/assets/styles"),
      slices: path.resolve(__dirname, "src/slices/index"),
      store: path.resolve(__dirname, "src/store/index"),
      utils: path.resolve(__dirname, "src/utils/index"),
    },
  },
  server: {
    proxy: {
      "/uploads": {
        target: "http://localhost:8000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
