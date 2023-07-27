<template>
    <section class="text-slate-600 body-font relative">
        <div class="absolute inset-0 bg-slate-300">
            <iframe style="filter: grayscale(1) contrast(1.2) opacity(0.4);" marginheight="0" marginwidth="0" title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=barcelona+(THAU)&ie=UTF8&t=&z=10&iwloc=B&output=embed"
                width="100%" height="100%" frameborder="0"></iframe>
        </div>

        <div class="container px-4 py-24 mx-auto flex">
            <div
                class="lg:w-1/3 md:w-1/2 w-full bg-white rounded p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 class="text-slate-900 text-lg mb-1 font-medium title-font">
                    {{ $t("component.contact.title") }}
                </h2>
                <p class="leading-relaxed mb-5 text-slate-600">
                    {{ $t("component.contact.subtitle") }}
                </p>
                <nav class="list-none">
                    <li class="mb-2">
                        <a href="mailto:info@thau.tech">
                            <i class="i-mdi-email-outline"></i><span>info@thau.tech</span>
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="https://wa.me/34677470860">
                            <i class="i-mdi-whatsapp"></i><span>+34 677 470 860</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.google.com/maps?q=barcelona+(THAU)&z=10" target="_blank">
                            <i class="i-mdi-home-city-outline"></i><span>Barcelona, Spain</span>
                        </a>
                    </li>
                </nav>
                <!-- </div> -->

            </div>
        </div>

    </section>
</template>

<style scoped>
a {
    --at-apply: text-slate-700 hover:font-bold cursor-pointer
}

a>i {
    --at-apply: inline-block text-lg align-middle mr-2
}
</style>