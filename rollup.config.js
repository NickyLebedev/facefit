import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import camelCase from 'lodash.camelcase';

const pkg = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [{
            file: `dist/${pkg.main}`,
            name: camelCase('facefit'),
            format: 'umd'
        },
        {
            file: `dist/${pkg.module}`,
            format: 'es'
        },
    ],
    external: [],
    // targets: [{
    //         format: 'umd',
    //         moduleName: 'index',
    //         dest: 'build/clmtrackr.js'
    //     },
    //     {
    //         format: 'es',
    //         dest: 'build/clmtrackr.module.js'
    //     }
    // ],
    plugins: [
        resolve({
            module: true,
            main: true
        }),
        typescript(),
        commonjs(),
        json()
    ],
};