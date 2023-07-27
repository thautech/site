<template>
    <section class="container mx-auto px-4 py-20">
        <div class="text-center text-slate-700  mb-16">
            <h3 class="title">{{ $t("component.purpose.title") }}</h3>
            <p class="text-xl">{{ $t("component.purpose.subtitle") }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div class="value">
                <h4>{{ $t("component.purpose.excel.title") }}</h4>
                <p>{{ $t("component.purpose.excel.content") }}</p>
            </div>
            <div class="value">
                <h4>{{ $t("component.purpose.share.title") }}</h4>
                <p>{{ $t("component.purpose.share.content") }}</p>
            </div>
            <div class="value">
                <h4>{{ $t("component.purpose.enjoy.title") }}</h4>
                <p>{{ $t("component.purpose.enjoy.content") }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.title {
    --at-apply: text-4xl leading-normal tracking-wide font-bold gradient mb-2
}

div.value {
    --at-apply: text-center
}

.value>h4 {
    --at-apply: text-2xl mb-1
}

.value>p {
    --at-apply: text-lg text-slate-500
}
</style>