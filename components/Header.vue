<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto p-4">

            <div class="flex items-center">
                <div @click="toggleNav" class="flex md:hidden mr-4">
                    <button type="button" class="menu-toggle">
                        <i-mdi-hamburger-menu class="icon" />
                    </button>
                </div>
                <nuxt-link to="/">
                    <img src="/images/logo-solid-blue.png" alt="THAU" class="h-12">
                </nuxt-link>
            </div>

            <div class="flex items-center md:order-2">
                <nav class="inline-flex items-center space-x-2">
                    <a class="text-slate-500 hover:text-slate-900">EN</a>
                    <span>|</span>
                    <a class="text-slate-500 hover:text-slate-900">ES</a>
                </nav>
            </div>

            <div class="items-center w-full md:flex md:w-auto md:order-1" :class="showMenu ? 'flex' : 'hidden'">
                <ul class="menu-list">
                    <li class="menu-item">PURPOSE</li>
                    <li>
                        <div class="relative">
                            <button @click="showServices = !showServices" class="dropdown-toggle">
                                <span>SERVICES</span><i-mdi-chevron-down class="icon" />
                            </button>
                            <div v-show="showServices" class="dropdown-list">
                                <nuxt-link to="/" class="dropdown-item">Data Science</nuxt-link>
                                <nuxt-link to="/" class="dropdown-item">Software Development</nuxt-link>
                                <nuxt-link to="/" class="dropdown-item">Platform Engineering</nuxt-link>
                                <nuxt-link to="/" class="dropdown-item">Expert Onboard</nuxt-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="relative">
                            <button @click="showArticles = !showArticles" class="dropdown-toggle">
                                <span>ARTICLES</span><i-mdi-chevron-down class="icon" />
                            </button>
                            <div v-show="showArticles" class="dropdown-list">
                                <nuxt-link to="/" class="dropdown-item">Data Science</nuxt-link>
                                <nuxt-link to="/" class="dropdown-item">Software Development</nuxt-link>
                                <nuxt-link to="/" class="dropdown-item">Platform Engineering</nuxt-link>
                                <nuxt-link to="/" class="dropdown-item">Expert Onboard</nuxt-link>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item">CONTACT</li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<style>
.icon {
    --at-apply: inline-block text-lg align-middle;
}

.menu-toggle {
    --at-apply: text-slate-500 hover:text-gray-400 focus:outline-none focus:text-gray-400;
}

.menu-list {
    --at-apply: flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0;
}

.menu-item {
    --at-apply: font-bold text-slate-500 hover:text-slate-900;
}

.dropdown-toggle {
    --at-apply: flex items-center font-bold text-slate-500 hover:text-slate-900;
}

.dropdown-list {
    --at-apply: py-2 mt-2 bg-slate-200 rounded-md shadow-xl lg:absolute lg:right-0 w-50;
}

.dropdown-item {
    --at-apply: block px-4 py-2 text-slate-500 hover:bg-slate-300 hover:text-slate-900;
}
</style>

<script>
import { ref } from "vue";
export default {
    setup() {
        let showMenu = ref(false);
        let showServices = ref(false);
        let showArticles = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);

        return { showMenu, showServices, showArticles, toggleNav };
    },
};
</script>
