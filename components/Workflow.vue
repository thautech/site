<template>
    <section class="container justify-between grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto px-4 py-20">
        <div>
            <h3 class="text-3xl leading-normal tracking-wide gradient font-bold">
                {{ $t("component.workflow.title") }}
            </h3>

            <blockquote class="p-4 my-8 border-l-4 border-slate-300 bg-slate-100 dark:border-slate-500 dark:bg-slate-800">
                <p class="text-xl font-medium leading-relaxed text-slate-900 dark:text-white">
                    {{ $t("component.workflow.description") }}
                </p>
            </blockquote>

            <p class="text-lg text-slate-700 mb-4">{{ $t("component.workflow.explanation") }}</p>
        </div>
        <div>
            <div class="step">
                <div class="link">
                    <div></div>
                </div>
                <div class="icon">
                    <i class="i-mdi-design"></i>
                </div>
                <div class="text">
                    <h2 class="title">{{ $t("component.workflow.concept.title") }}</h2>
                    <p class="description">{{ $t("component.workflow.concept.content") }}</p>
                </div>
            </div>
            <div class="step">
                <div class="link">
                    <div></div>
                </div>
                <div class="icon">
                    <i class="i-mdi-package-variant-closed"></i>
                </div>
                <div class="text">
                    <h2 class="title">{{ $t("component.workflow.product.title") }}</h2>
                    <p class="description">{{ $t("component.workflow.product.content") }}</p>
                </div>
            </div>
            <div class="step">
                <div class="link">
                    <div></div>
                </div>
                <div class="icon">
                    <i class="i-mdi-gear-play-outline"></i>
                </div>
                <div class="text">
                    <h2 class="title">{{ $t("component.workflow.training.title") }}</h2>
                    <p class="description">{{ $t("component.workflow.training.content") }}</p>
                </div>
            </div>
            <div class="step">
                <div class="icon">
                    <i class="i-mdi-shape-add-outline"></i>
                </div>
                <div class="text">
                    <h2 class="title">{{ $t("component.workflow.extension.title") }}</h2>
                    <p class="description">{{ $t("component.workflow.extension.content") }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.step {
    --at-apply: flex relative pb-12;
}

.link {
    --at-apply: h-full w-10 absolute inset-0 flex items-center justify-center;
}

.link>div {
    --at-apply: h-full w-1 bg-gray-200 pointer-events-none;
}

.icon {
    --at-apply: flex-shrink-0 w-10 h-10 rounded-full bg-thau inline-flex items-center justify-center text-white relative z-10;
}

.icon>i {
    --at-apply: text-2xl;
}

.text {
    --at-apply: flex-grow pl-4;
}

.title {
    --at-apply: font-medium title-font text-sm text-slate-700 mb-1 tracking-wider font-bold;
}

.description {
    --at-apply: leading-relaxed text-slate-500;
}
</style>