import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/behavioral-data-platform",
  plugins: [react()],
  server: {
    port: 3006,
    open: true, // Automatically open the browser when the server starts
  },
  build: { outDir: "build" },
});
