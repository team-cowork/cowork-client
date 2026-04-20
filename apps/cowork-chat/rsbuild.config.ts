import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import {
  pluginModuleFederation,
  createModuleFederationConfig,
} from "@module-federation/rsbuild-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  server: { port: 3003 },
  dev: { assetPrefix: "http://localhost:3003" },
  output: { assetPrefix: "http://localhost:3003" },
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
        name: "cowork_chat",
        exposes: { "./App": "./src/App.tsx" },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
      }),
    ),
  ],
});
