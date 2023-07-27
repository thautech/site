// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["@unocss/reset/tailwind.css"],
    modules: ["@nuxtjs/i18n", "@unocss/nuxt", "@vueuse/nuxt"],

    i18n: {
        locales: [
            { code: "en-US", name: "English", file: "en-US.json" },
            { code: "es-ES", name: "Español", file: "es-ES.json" },
        ],
        langDir: "./locales",
        defaultLocale: "en-US",
        detectBrowserLanguage: false,
    },

    // vite: {
    //     vue: {
    //         template: {
    //             compilerOptions: {
    //                 isCustomElement: (tag) => {
    //                     return tag.startsWith("i-"); // icons
    //                 },
    //             },
    //         },
    //     },
    // },
});
