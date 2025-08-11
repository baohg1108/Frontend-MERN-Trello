import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // relative absolute import
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
});
