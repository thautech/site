<template>
    <select @change="onChange" :value="locale" :class="{ dark: dark }">
        <option v-for="{ code, name } in (locales as LocaleObject[])" :key="code" :value="code">
            {{ name }}
        </option>
    </select>
</template>

<style scoped>
select {
    --at-apply: bg-transparent text-lg text-slate-500 hover:text-slate-900
}

.dark {
    --at-apply: transition duration-500 ease-in-out text-slate-300 hover:text-slate-100
}
</style>

<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const props = defineProps(['dark'])

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()


function onChange(event: Event) {
    const target = event.target as HTMLInputElement
    router.push({ path: switchLocalePath(target.value) })
}
</script>

