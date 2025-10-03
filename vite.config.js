import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'API_BASE_URL': JSON.stringify(env.API_BASE_URL)
    },
    plugins: [vue()],
  }
})
