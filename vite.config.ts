import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@lib/*": path.resolve(__dirname, "./lib"),
      "@constants/*": path.resolve(__dirname, "./constants"),
      "@context/*": path.resolve(__dirname, "./context"),
      "@features/*": path.resolve(__dirname, "./features"),
      "@utils/*": path.resolve(__dirname, "./utils"),
      "@hooks/*": path.resolve(__dirname, "./hooks"),
    },
  },
})
