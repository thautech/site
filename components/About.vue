<template>
    <section class="body-font bg-slate-600 text-slate-200">
        <div class="container px-4 py-16 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
            <!-- ABOUT -->
            <div class="col-span-2">
                <h2 class="title">ABOUT</h2>
                <p>
                    Our purpose is to make the world a better place through technology. We believe that empowered
                    people and knowledge-driven systems are drivers of smarter attitudes. We are a lean and agile
                    company operating globally online.
                </p>
            </div>

            <!-- SOCIAL -->
            <div class="grid lg:justify-end">
                <h2 class="title">SOCIAL</h2>
                <nav class="list-none">
                    <li class="mb-2">
                        <a href="https://www.linkedin.com/company/thautech" target="_blank" class="link">
                            <i class="i-mdi-linkedin"></i>
                            <span>/ thautech</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/thautech" target="_blank" class="link">
                            <i class="i-mdi-github"></i>
                            <span>/ thautech</span>
                        </a>
                    </li>
                </nav>
            </div>

            <!-- LINKS -->
            <div class="grid lg:justify-end">
                <h2 class="title">LINKS</h2>
                <nav class="list-none">
                    <li class="mb-2">
                        <a class="link">Privacy Policy</a>
                    </li>
                    <li>
                        <a class="link">Terms of Use</a>
                    </li>
                </nav>
            </div>
        </div>
    </section>
</template>

<style scoped>
.link {
    --at-apply: hover:text-white
}

.link>i {
    --at-apply: inline-block text-lg align-middle mr-1
}

.title {
    --at-apply: title-font font-medium tracking-widest text-sm mb-3
}
</style>
