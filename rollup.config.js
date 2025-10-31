import PeerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts"
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve"

const PJ = require("./package.json")

export default [
  {
    input: "src/hook.ts",
    output: { file: PJ.module },
    plugins: [
      PeerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json", declaration: false }),
      resolve({browser: true}),
      terser()
    ],
    external: ["react"],
  },
  {
    input: "dist/hook.d.ts",
    output: [{file: "dist/index.d.ts"}],
    plugins: [dts()]
  }
]