import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VisualConsole",
      formats: ["es"],
      fileName: (format) => `visual-console.${format}.js`,
    },
    outDir: "dist",
  },
  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist",
    }),
  ],
});
