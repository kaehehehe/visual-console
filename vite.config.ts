import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "playground"),
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VisualConsole",
      formats: ["es"],
      fileName: "visual-console",
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [dts()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
  },
});
