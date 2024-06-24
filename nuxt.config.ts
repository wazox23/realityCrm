// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'public/assets/styles/_base.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
          scss: {
            additionalData: `
              @import "public/assets/styles/_colors.scss";
              @import "public/assets/styles/_variables.scss";
              @import "public/assets/styles/_utils.scss";
              @import "public/assets/styles/_typography.scss";
              @import "public/assets/styles/_layout.scss";
              @import "public/assets/styles/_breakpoints.scss";
              @import "public/assets/styles/_grids.scss";
            `,
          },
      },
    },
  },
})
