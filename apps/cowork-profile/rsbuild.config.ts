import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import {
  pluginModuleFederation,
  createModuleFederationConfig,
} from "@module-federation/rsbuild-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  server: { port: 3001 },
  dev: { assetPrefix: "http://localhost:3001", lazyCompilation: false },
  output: { assetPrefix: "http://localhost:3001" },
  source: { entry: { index: "./src/main.tsx" } },
  html: { template: "./index.html" },
  tools: {
    rspack: {
      plugins: [tanstackRouter({ target: "react", autoCodeSplitting: true })],
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation(
      createModuleFederationConfig({
        name: "cowork_profile",
        experiments: { asyncStartup: true },
        exposes: { "./App": "./src/App.tsx" },
        shared: {
          react: { singleton: true, eager: false },
          "react-dom": { singleton: true, eager: false },
        },
      }),
    ),
  ],
});
