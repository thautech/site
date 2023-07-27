<template>
    <section class="container items-center grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto px-4 pt-40 pb-20">
        <div class="text-center md:text-left">
            <h2 class="text-4xl leading-normal tracking-wide text-slate-700 font-light">
                {{ $t("component.hero.business") }}
            </h2>
            <h2 class="text-4xl leading-normal tracking-wider gradient font-bold">
                {{ $t("component.hero.technology") }}
            </h2>
            <p class="text-2xl leading-normal text-slate-500 mt-6">
                {{ $t("component.hero.description") }}
            </p>
            <button class="cta flex flex-col items-center w-full md:w-auto mt-10">
                {{ $t("component.hero.button") }}
            </button>

        </div>
        <div class="items-center grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-10">
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i class="i-carbon-machine-learning-model"></i>
                </div>
                <div class="basis-3/4">
                    <h3 class="md:pr-20">{{ $t("component.hero.data.title") }}</h3>
                    <p>{{ $t("component.hero.data.content") }}</p>
                </div>
            </div>
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i class="i-carbon-devices"></i>
                </div>
                <div class="basis-3/4">
                    <h3 class="md:pr-10">{{ $t("component.hero.software.title") }}</h3>
                    <p>{{ $t("component.hero.software.content") }}</p>
                </div>
            </div>
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i class="i-carbon-bare-metal-server-02"></i>
                </div>
                <div class="basis-3/4">
                    <h3 class="md:pr-10">{{ $t("component.hero.platform.title") }}</h3>
                    <p>{{ $t("component.hero.platform.content") }}</p>
                </div>
            </div>
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i class="i-carbon-user-admin"></i>
                </div>
                <div class="basis-3/4">
                    <h3 class="md:pr-20">{{ $t("component.hero.expert.title") }}</h3>
                    <p>{{ $t("component.hero.expert.content") }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
div.service {
    --at-apply: flex flex-row p-2 hover:bg-slate-100
}

.service>div>h3 {
    --at-apply: text-xl text-slate-700 font-bold
}

.service>div>p {
    --at-apply: text-lg text-slate-500 font-normal
}

.service>div>i {
    --at-apply: inline-block text-5xl text-slate-400 mt-1 mr-4
}
</style>