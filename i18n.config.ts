import enUS from "./locales/en-US.json";
import esES from "./locales/es-ES.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    strategy: "prefix_except_default",
    messages: {
        en: enUS,
        es: esES,
    },
}));
