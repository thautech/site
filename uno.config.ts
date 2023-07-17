import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTagify,
    presetUno,
} from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
    presets: [presetUno(), presetAttributify(), presetTagify(), presetIcons()],
    transformers: [transformerDirectives()],
});
