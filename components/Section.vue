<template>
    <section class="container items-center justify-between grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto px-4 py-20">

        <div :class="{ 'order-last': reverse }">
            <h3 class="text-3xl leading-normal tracking-wide gradient font-bold">{{ title }}</h3>
            <slot />
        </div>

        <div>
            <img :src="image">
        </div>

    </section>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    image?: string
    reverse?: boolean
}>()
</script>