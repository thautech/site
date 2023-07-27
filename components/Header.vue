<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0" :class="{ dark: scroll }">
        <div class="container flex flex-wrap items-center justify-between mx-auto p-4">

            <div class="flex items-center">
                <div @click="toggleMenu" class="flex md:hidden mr-4">
                    <button type="button" class="menu">
                        <i class="i-carbon-menu" :class="{ dark: scroll }"></i>
                    </button>
                </div>
                <nuxt-link to="/">
                    <img src="/images/logo-solid-blue.png" alt="THAU" class="h-12" v-if="!scroll">
                    <img src="/images/logo-solid-white.png" alt="THAU" class="h-12" v-if="scroll">
                </nuxt-link>
            </div>

            <div class="flex items-center md:order-2">
                <select @change="onLocale" :value="locale" :class="{ dark: scroll }">
                    <option v-for="{ code, name } in (locales as LocaleObject[])" :key="code" :value="code">
                        {{ name }}
                    </option>
                </select>
            </div>

            <!-- <div class="items-center w-full md:flex md:w-auto md:order-1" :class="showMenu ? 'flex' : 'hidden'">
                <ul class="items">
                    <nuxt-link :to="localePath('/')">
                        <li class="item" :class="{ dark: scroll }">
                            {{ $t("component.header.purpose") }}
                        </li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/services')">
                        <li class="item" :class="{ dark: scroll }">
                            {{ $t("component.header.services") }}
                        </li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/articles')">
                        <li class="item" :class="{ dark: scroll }">
                            {{ $t("component.header.articles") }}
                        </li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('#about')">
                        <li class="item" :class="{ dark: scroll }">
                            {{ $t("component.header.contact") }}
                        </li>
                    </nuxt-link>
                    <li class="item" :class="{ dark: scroll }">
                        <div class="relative">
                            <button @click="showServices = !showServices" class="dropdown">
                                <span>{{ $t("component.header.services") }}</span>
                                <i class="i-mdi-chevron-down"></i>
                            </button>
                            <div v-show="showServices" v-on-click-outside="closeServices" class="subitems">
                                <nuxt-link :to="localePath('/')" class="subitem">One</nuxt-link>
                                <nuxt-link :to="localePath('/')" class="subitem">Two</nuxt-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div> -->

        </div>
    </nav>
</template>

<style scoped>
.menu {
    --at-apply: text-slate-500 hover:text-gray-400 focus:outline-none focus:text-gray-400
}

.menu>i {
    --at-apply: inline-block text-4xl align-middle
}

.items {
    --at-apply: flex-col mt-8 space-y-8 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
}

.item {
    --at-apply: font-bold text-slate-500 hover:text-slate-900 my-2
}

.dropdown {
    --at-apply: flex items-center font-bold text-slate-500 hover:text-slate-700
}

.dropdown>i {
    --at-apply: text-2xl align-middle
}

.subitems {
    --at-apply: py-2 mt-2 bg-slate-200 rounded-md shadow-xl lg:absolute lg:right-0 w-50
}

.subitem {
    --at-apply: block px-4 py-2 text-slate-500 hover:bg-slate-300 hover:text-slate-900
}

nav.dark {
    --at-apply: transition duration-500 ease-in-out bg-thau
}

i.dark {
    --at-apply: transition duration-500 ease-in-out text-slate-300 hover:text-slate-100
}

li.dark,
li.dark>div>button {
    --at-apply: transition duration-500 ease-in-out text-slate-300 hover:text-slate-100
}

select {
    --at-apply: bg-transparent text-lg text-slate-500 hover:text-slate-900
}

select.dark {
    --at-apply: transition duration-500 ease-in-out text-slate-300 hover:text-slate-100
}
</style>

<script setup lang="ts">
import { ref } from "vue";

// LOCALE
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const router = useRouter()

function onLocale(event: Event) {
    const target = event.target as HTMLInputElement
    router.push({ path: switchLocalePath(target.value) })
}

// SCROLL
let scroll = ref(false);
const roll = () => (scroll.value = window.scrollY > 50);
onMounted(() => window.addEventListener('scroll', roll))

// MENU
let showMenu = ref(false);
const toggleMenu = () => (showMenu.value = !showMenu.value);

// SUBMENUS
// import { vOnClickOutside } from "@vueuse/components";
// let showArticles = ref(false);
// const closeArticles = () => (showArticles.value = false);
// let showServices = ref(false);
// const closeServices = () => (showServices.value = false);

</script>
