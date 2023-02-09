// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/style.css"],
  modules: [
    // ...
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
});
