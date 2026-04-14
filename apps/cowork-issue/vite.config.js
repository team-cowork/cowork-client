import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    federation({
      name: 'cowork_issue',
      filename: 'remoteEntry.js',
      manifest: true,
      publicPath: 'http://localhost:3002/',
      exposes: { './App': './src/App.tsx' },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
})
