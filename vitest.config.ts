import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    alias: {
      '@/': './',
    },
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      exclude: ["types/**", ".nuxt/**", "app.vue", "**.config.**"],
    },
  },
});
