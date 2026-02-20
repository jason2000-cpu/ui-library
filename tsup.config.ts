import path from 'path'
import { defineConfig } from "tsup"

export default defineConfig({
  outDir: 'dist',
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: ["react", "react-dom", "styled-components"],
  tsconfig: path.resolve(__dirname, './tsconfig.json')
})