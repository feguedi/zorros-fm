import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiBase: import.meta.env.NUXT_API_BASE || 'http://127.0.0.1:8080',
    apiEndpoint: import.meta.env.NUXT_API_ENDPOINT || '/api',
  },
  build: {
    transpile: [
      '@iconify-json/carbon',
      '@iconify-json/logos',
      '@iconify-json/svg-spinners',
      '@iconify/utils',
      '@iconify/vue',
    ],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', value: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', value: '/logo.svg' },
        { rel: 'apple-touch-icon', value: '/icons/192x192.png' },
      ],
    },
  },
  alias: {
    '@': path.resolve(__dirname),
  },
  css: [
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@vueuse/nuxt',
    'nuxt-quasar-ui',
  ],
  quasar: {
    config: {
      dark: true,
    },
  },
  experimental: {
    viewTransition: true,
  },
});
