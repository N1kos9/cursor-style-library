import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main, // Should point to "dist/cjs/index.js" if you want a CommonJS version
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // Correct for ES module version
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }), // Ensure you have a tsconfig.json configured for your project
      terser(),
    ],
  },
  {
    input: "src/index.ts", // Typically, the input for d.ts generation should be your source TS file
    output: [{ file: "dist/index.d.ts", format: "esm" }], // Output path for your type declarations
    plugins: [dts.default()],
  },
];
