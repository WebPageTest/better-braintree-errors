import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.ts",
  output: {
    file: "build/index.js",
    esModule: true,
    generatedCode: "es2015",
  },
  plugins: [typescript()],
};
