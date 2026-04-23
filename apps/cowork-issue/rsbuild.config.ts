import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import {
  pluginModuleFederation,
  createModuleFederationConfig,
} from "@module-federation/rsbuild-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  server: { port: 3002 },
  dev: { assetPrefix: "http://localhost:3002", lazyCompilation: false },
  output: { assetPrefix: process.env.PUBLIC_ASSET_PREFIX ?? "http://localhost:3002" },
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
        name: "cowork_issue",
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
