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
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    'nuxt-quasar-ui',
  ],
  quasar: {
    config: {
      dark: true,
      brand: {
        primary: '#dd6a1d',
        secondary: '#0260f7',
        accent: '#7b61ff',

        dark: '#1d1d1d',
        'dark-page': '#101010',

        positive: '#14a38c',
        negative: '#f61e5f',
        info: '#31CCEC',
        warning: '#edb464',
      },
    },
    cssAddon: true,
  },
  auth: {
    baseURL: '/api/auth',
    globalAppMiddleware: true,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/session', method: 'get' },
      },
      pages: {
        login: '/auth/login',
      },
      token: {
        signInResponseTokenPointer: '/token',
        type: 'Bearer',
        cookieName: 'auth.token',
        headerName: 'Authorization',
        cookieDomain: 'app.zorros.football',
      },
      session: {
        dataType: {
          id: 'string',
          nombre: 'string | undefined',
          nickname: 'string | undefined',
          imagen: 'string | undefined',
          rol: "('ADMINISTRADOR' | 'COACH' | 'JUGADOR')[] | undefined",
          telefono: 'number | undefined',
        },
      },
    },
  },
  experimental: {
    viewTransition: true,
  },
});
