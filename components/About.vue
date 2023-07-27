<template>
    <section class="body-font bg-slate-600 text-slate-200">
        <div class="container px-4 py-16 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
            <!-- ABOUT -->
            <div class="col-span-2">
                <h2>{{ $t("component.about.title") }}</h2>
                <p>{{ $t("component.about.content") }}</p>
            </div>

            <!-- SOCIAL -->
            <div class="grid lg:justify-end">
                <h2>{{ $t("component.about.social") }}</h2>
                <nav class="list-none">
                    <li class="mb-2">
                        <a href="https://www.linkedin.com/company/thautech" target="_blank">
                            <i class="i-mdi-linkedin"></i> <span>/ thautech</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/thautech" target="_blank">
                            <i class="i-mdi-github"></i> <span>/ thautech</span>
                        </a>
                    </li>
                </nav>
            </div>

            <!-- LINKS -->
            <div class="grid lg:justify-end">
                <h2>{{ $t("component.about.links") }}</h2>
                <nav class="list-none">
                    <li class="mb-2">
                        <a>{{ $t("component.about.policy") }}</a>
                    </li>
                    <li>
                        <a>{{ $t("component.about.terms") }}</a>
                    </li>
                </nav>
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    --at-apply: title-font font-medium tracking-widest text-sm mb-3
}

a {
    --at-apply: hover:text-white
}

a>i {
    --at-apply: inline-block text-lg align-middle mr-1
}
</style>
