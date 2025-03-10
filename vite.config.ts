import path from 'node:path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig(({mode}) => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src'),
        },
      ],
    },
    build: {
      sourcemap: mode === 'development' ? 'inline' : false,
      minify: mode !== 'development',
      // Use Vite lib mode https://vitejs.dev/guide/build.html#library-mode
      lib: {
        entry: path.resolve(__dirname, './src/index.ts'),
        formats: ['cjs'],
      },
      rollupOptions: {
        plugins: [
          ...(mode === 'development'
            ? []
            : [
                terser({
                  compress: {
                    defaults: false,
                    drop_console: ['log', 'info'],
                  },
                  mangle: {
                    eval: true,
                    module: true,
                    toplevel: true,
                    safari10: true,
                    properties: false,
                  },
                  output: {
                    comments: false,
                    ecma: 2020,
                  },
                }),
              ]),
          resolve({
            browser: false,
          }),
          replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.MODE': JSON.stringify(mode),
          }),
        ],
        output: {
          // Overwrite default Vite output fileName
          entryFileNames: mode === 'development' ? 'main.js' : 'main.js',
          assetFileNames: mode === 'development' ? 'styles.css' : 'styles.css',
        },
        external: [
          'obsidian',
          'electron',
          '@codemirror/autocomplete',
          '@codemirror/collab',
          '@codemirror/commands',
          '@codemirror/language',
          '@codemirror/lint',
          '@codemirror/search',
          '@codemirror/state',
          '@codemirror/view',
          '@lezer/common',
          '@lezer/highlight',
          '@lezer/lr',
        ],
      },
      // Use root as the output dir
      emptyOutDir: false,
      outDir: '.',
    },
  };
});
