import resolve from "rollup-plugin-node-resolve";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
import json from "@rollup/plugin-json";
import replace from 'rollup-plugin-replace'

const formatName = "MydaggerUI";
const config = {
  input: "./main.js",
  output: [
    {
      file: "./lib/bundle.cjs.js",
      format: "cjs",
      name: formatName,
      exports: "named",
    },
    {
      file: "./lib/bundle.umd.js",
      format: "umd",
      name: formatName,
      globals: {
        vue: "Vue",
      },
      exports: "named",
    },
    {
      file: "./lib/bundle.es.js",
      format: "es",
      name: formatName,
      exports: "named",
    },
    {
      file: "./lib/bundle.js",
      format: "iife",
      name: formatName,
      globals: {
        vue: "Vue",
      },
      exports: "named",
    },
  ],
  external: ["vue", "element-ui"],
  plugins: [
    json(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    babel({
      exclude: "**/node_modules/**",
    }),
    commonjs(),
    scss(),
  ],
};
export default config;
