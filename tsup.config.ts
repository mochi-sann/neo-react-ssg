import { defineConfig } from "tsup";

export default defineConfig({
  target: "node14", // needed for working ESM
  format: ["esm"],
  clean: false,
  minify: false,
  dts: false,
  entryPoints: ["src/*.{ts,tsx}"],
});
