// https://nuxt.com/docs/api/configuration/nuxt-config

const _port  = Number(process.env.PORT) || 3000;

export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port:  _port,
  },

})
