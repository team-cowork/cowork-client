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
      name: 'cowork_shell',
      remotes: {
        cowork_profile: 'cowork_profile@http://localhost:3001/mf-manifest.json',
        cowork_issue:   'cowork_issue@http://localhost:3002/mf-manifest.json',
        cowork_chat:    'cowork_chat@http://localhost:3003/mf-manifest.json',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
})
