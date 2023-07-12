import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTagify,
    presetUno,
} from "unocss";

export default defineConfig({
    presets: [presetUno(), presetAttributify(), presetTagify(), presetIcons()],
});
