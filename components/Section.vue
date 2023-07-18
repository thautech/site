<template>
    <section class="container flex flex-wrap items-center justify-between mx-auto px-4">

        <div>
            <h2>{{ title }}</h2>
        </div>

        <div>
            <img :src="image">
        </div>

        <div>
            <slot />
        </div>

    </section>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    image?: string
}>()
</script>