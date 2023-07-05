export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
