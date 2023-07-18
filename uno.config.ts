import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTagify,
    presetUno,
} from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
    shortcuts: {
        cta: "inline-flex text-lg rounded border-0 bg-thau text-white hover:bg-green-700 px-8 py-4",
        gradient:
            "bg-clip-text text-transparent bg-gradient-to-r from-thau to-blue-500",
    },
    theme: {
        colors: {
            thau: "#204080",
        },
    },
    presets: [presetUno(), presetAttributify(), presetTagify(), presetIcons()],
    transformers: [transformerDirectives()],
});
