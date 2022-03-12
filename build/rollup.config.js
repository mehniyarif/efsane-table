import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import scss from 'rollup-plugin-scss'
import babel from "rollup-plugin-babel";
export default {
    input: 'src/components/efsane-table/index.vue', // Path relative to package.json
    external: [
        'vue',
        '@babel/runtime/regenerator',
        '@babel/runtime/helpers/esm/toConsumableArray',
        '@babel/runtime/helpers/esm/asyncToGenerator',
        '@babel/runtime/helpers/esm/typeof',
        '@babel/runtime/helpers/esm/slicedToArray',
        '@babel/runtime/helpers/esm/classCallCheck',
        '@babel/runtime/helpers/esm/createClass',
        '@babel/runtime/helpers/esm/defineProperty',
      ],
    output: {
        globals: {
          'vue': 'Vue',
          '@babel/runtime/regenerator': '_regeneratorRuntime',
          '@babel/runtime/helpers/esm/toConsumableArray': '_toConsumableArray',
          '@babel/runtime/helpers/esm/asyncToGenerator': '_asyncToGenerator',
          '@babel/runtime/helpers/esm/typeof': '_typeof',
          '@babel/runtime/helpers/esm/slicedToArray': '_slicedToArray',
          '@babel/runtime/helpers/esm/classCallCheck': '_classCallCheck',
          '@babel/runtime/helpers/esm/createClass': '_createClass',
          '@babel/runtime/helpers/esm/defineProperty': '_defineProperty',
        },
        name: 'EfsaneTable',
        exports: 'auto',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        scss({
            output: 'dist/main.css'
        }),
        babel({
          babelrc: false,
          runtimeHelpers: true,
          plugins: [
            "@babel/plugin-transform-async-to-generator",
            ["@babel/plugin-transform-runtime", { useESModules: true }]
          ],
          presets: ["@babel/preset-env",
            ["@vue/app", {
            "useBuiltIns": "entry"
          }]],
          exclude: "node_modules/**"
        }),
        commonjs(),
        buble({
            objectAssign: 'Object.assign'
        }), // Transpile to ES5
    ],
};
