<template>
    <footer class="body-font bg-slate-800">
        <div class="container px-4 py-6 mx-auto flex items-center flex-col sm:flex-row justify-between">
            <div class="flex items-center md:justify-start justify-center">
                <img src="/images/logo-solid-white.png" alt="THAU" class="h-3">
                <span class="font-bold text-white ml-2">© {{ year }}</span>
            </div>
            <div class="text-slate-500">
                <span>v1.0.0</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
