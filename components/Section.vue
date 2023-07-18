<template>
    <section class="container items-center justify-between grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto px-4 py-20">

        <div class="bg-sky-400">
            <h2>{{ title }}</h2>
            <slot />
        </div>
        <div class="bg-slate-200">
            <img :src="image">
        </div>

    </section>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    image?: string
}>()
</script>