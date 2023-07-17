// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@unocss/reset/tailwind.css"],
    devtools: { enabled: true },
    modules: ["@unocss/nuxt", "@vueuse/nuxt"],
    vite: {
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => {
                        return tag.startsWith("i-"); // icons
                    },
                },
            },
        },
    },
});
