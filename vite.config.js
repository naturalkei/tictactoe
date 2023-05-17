import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://vitejs.dev/config/shared-options.html#base
  // https://vitejs.dev/guide/build.html#public-base-path
  // https://vitejs.dev/guide/build.html#advanced-base-options
  base: '/tictactoe'
})
