import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts", "src/cli.ts"],
});
