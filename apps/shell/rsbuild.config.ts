import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import {
  pluginModuleFederation,
  createModuleFederationConfig,
} from "@module-federation/rsbuild-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  server: { port: 3000 },
  dev: { assetPrefix: true, lazyCompilation: false },
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
        name: "cowork_shell",
        experiments: { asyncStartup: true },
        remotes: {
          cowork_profile:
            "cowork_profile@http://localhost:3001/mf-manifest.json",
          cowork_issue: "cowork_issue@http://localhost:3002/mf-manifest.json",
          cowork_chat: "cowork_chat@http://localhost:3003/mf-manifest.json",
        },
        shared: {
          react: { singleton: true, eager: false },
          "react-dom": { singleton: true, eager: false },
        },
      }),
    ),
  ],
});
