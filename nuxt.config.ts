// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // app: {
    //     head: {
    //         link: [
    //             {
    //                 href: "/bootstrap/bootstrap.min.css",
    //                 crossorigin: "anonymous",
    //                 rel: "stylesheet",
    //             },
    //         ],
    //         script: [
    //             {
    //                 src: "/bootstrap/bootstrap.bundle.min.js",
    //                 crossorigin: "anonymous",
    //             },
    //         ],
    //     },
    // },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
