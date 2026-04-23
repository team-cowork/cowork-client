import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginReact } from '@rsbuild/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  dev: {
    assetPrefix: true,
    lazyCompilation: false,
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.[jt]sx?$/,
      exclude: [/[\\/]node_modules[\\/]/],
      babelLoaderOptions(opts) {
        opts.plugins?.unshift('babel-plugin-react-compiler');
      },
    }),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        cowork_chat: 'cowork_chat@http://127.0.0.1:3001/mf-manifest.json',
        cowork_issue: 'cowork_issue@http://127.0.0.1:3002/mf-manifest.json',
        cowork_profile: 'cowork_profile@http://127.0.0.1:3003/mf-manifest.json',
      },
      dts: {
        consumeTypes: false,
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
