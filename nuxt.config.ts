// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  alias: {
    '@': resolve(__dirname, "./"),
    '@composables': resolve(__dirname, './composables'),
  },

  modules: ['@primevue/nuxt-module', '@vueuse/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],

  css: [
    '~/assets/scss/main.scss',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],

  primevue: {
    importTheme: { from: '@/theme.js' },
    options: {
      ripple: true,
    },
  },

  pinia: {
    storesDirs: ['~/store/**',],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_variables.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
          `
        }
      }
    }
  },

  runtimeConfig: {
    key: "Will be accessible only by both client and server",
    private: {
      secret: "Api key which will be accessible only by server"
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt Starter Template',
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //   { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
      //   { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      //   { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      //   { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-512x512.png', sizes: '512x512' },
      //   { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png', sizes: '180x180' },
      // ],
      // script: [
      //   {
      //     src: 'https://kit.fontawesome.com/16d5298cef.js',
      //     crossorigin: 'anonymous',
      //   }
      // ],
    }
  }
})
