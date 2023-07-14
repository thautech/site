<template>
    <section class="body-font bg-slate-600 text-slate-200">

        <div class="container px-4 py-16 mx-auto">
            <div class="flex flex-wrap md:text-left text-center order-first">

                <!-- ABOUT -->
                <div class="lg:w-2/4 md:w-1/2 w-full sm:mb-0 mb-8">
                    <h2 class="title-font font-medium tracking-widest text-sm mb-3">ABOUT</h2>
                    <p class="pr-12">
                        Our purpose is to make the world a better place through technology. We believe that empowered
                        people and knowledge-driven systems are drivers of smarter attitudes. We are a lean and agile
                        company operating globally online.
                    </p>
                </div>

                <!-- CONTACT -->
                <div class="lg:w-1/4 md:w-1/2 w-full sm:mb-0 mb-8">
                    <h2 class="title-font font-medium tracking-widest text-sm mb-3">CONTACT</h2>
                    <nav class="list-none">
                        <li class="mb-2">
                            <a class="hover:text-white">
                                <i-mdi-email-outline class="inline-block text-lg align-middle mr-2" />
                                <span>info@thau.tech</span>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="hover:text-white">
                                <i-mdi-whatsapp class="inline-block text-lg align-middle mr-2" />
                                <span>+34 677 470 860</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-white">
                                <i-mdi-map-marker-outline class="inline-block text-lg align-middle mr-2" />
                                <span>Barcelona, Spain</span>
                            </a>
                        </li>
                    </nav>
                </div>

                <!-- NEWSLETTER -->
                <div class="lg:w-1/4 md:w-1/2 w-full">
                    <h2 class="title-font font-medium tracking-widest text-sm mb-3">NEWSLETTER</h2>
                    <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-end md:justify-start">
                        <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                            <label for="footer-field" class="leading-7 text-sm">Professional
                                Email</label>
                            <input type="text" id="footer-field" name="footer-field"
                                class="w-full bg-slate-100 rounded border border-gray-300 focus:ring-2 focus:ring-slate-200 focus:border-slate-500 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        </div>
                        <button
                            class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Subscribe</button>
                    </div>
                    <p class="text-slate-400 text-sm mt-2 md:text-left">Monthly updates and no spam.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
