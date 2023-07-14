<template>
    <footer class="body-font text-slate-200">

        <div class="bg-slate-600">
            <div class="container px-4 py-16 mx-auto">
                <div class="flex flex-wrap md:text-left text-center order-first">
                    <div class="lg:w-2/4 md:w-1/2 w-full">
                        <h2 class="title-font font-medium tracking-widest text-sm mb-3">ABOUT</h2>
                        <p class="mb-10 pr-12">
                            Our purpose is to make the world a better place through technology. We believe that empowered
                            people and knowledge-driven systems are drivers of smarter attitudes. We are a lean and agile
                            company operating globally online.
                        </p>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <h2 class="title-font font-medium tracking-widest text-sm mb-3">CONTACT</h2>
                        <nav class="list-none mb-10">
                            <li class="mb-2">
                                <a class="hover:text-white">
                                    <!-- <i-carbon-email class="inline-block mr-2" /> -->
                                    <span>info@thau.tech</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="hover:text-white">
                                    <!-- <i-carbon-phone class="inline-block mr-2" /> -->
                                    <span>+34 677 470 860</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a class="hover:text-white">
                                    <!-- <i-carbon-map class="inline-block mr-2" /> -->
                                    <span>Barcelona, Spain</span>
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <h2 class="title-font font-medium tracking-widest text-sm mb-3">NEWSLETTER</h2>
                        <div
                            class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label for="footer-field" class="leading-7 text-sm">Professional
                                    E-mail</label>
                                <input type="text" id="footer-field" name="footer-field"
                                    class="w-full bg-slate-100 rounded border border-gray-300 focus:ring-2 focus:ring-slate-200 focus:border-slate-500 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <button
                                class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Subscribe</button>
                        </div>
                        <p class="text-slate-400 text-sm mt-2 md:text-left text-center">Monthly updates and no spam.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-slate-800">
            <div class="container px-4 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex items-center md:justify-start justify-center">
                    <img src="/images/logo-solid-white.png" alt="THAU" class="h-4">
                    <span class="font-bold text-lg text-white sm:ml-2 sm:mt-0 mt-4">© 2023
                    </span>
                </a>
                <nav class="inline-flex items-center ml-2 space-x-2 text-slate-500">
                    <span>-</span>
                    <a class="hover:text-slate-200">Privacy Policy</a>
                    <span>|</span>
                    <a class="hover:text-slate-200">Terms of Use</a>
                </nav>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://github.com/thautech" target="_blank">
                        <!-- <IconCSS name="bi:github" class="text-slate-200 text-xl" /> -->
                    </a>
                    <a class="ml-4" href="https://www.linkedin.com/company/thautech" target="_blank">
                        <!-- <IconCSS name="bi:linkedin" class="text-slate-200 text-xl" /> -->
                    </a>
                </span>
            </div>
        </div>

    </footer>
</template>
