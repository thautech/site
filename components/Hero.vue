<template>
    <section class="container items-center grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto px-4 pt-40 pb-20">
        <div>
            <h2 class="text-4xl leading-normal tracking-wide text-slate-700 font-light">
                POWER YOUR BUSINESS WITH
            </h2>
            <h2 class="text-4xl leading-normal tracking-wider gradient font-bold">
                DATA-DRIVEN TECHNOLOGY
            </h2>
            <p class="text-2xl leading-normal text-slate-500 mt-6">
                Evaluate the scenario and define objective goals.
                <br class="hidden xl:inline-flex" />
                Create what's necessary and empower the people.
                <br class="hidden xl:inline-flex" />
                Count on us to reach the outcomes faster.
            </p>
            <button class="cta flex flex-col items-center w-full md:w-auto mt-10">
                TALK TO AN EXPERT
            </button>

        </div>
        <div class="items-center grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-10">
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i-carbon-machine-learning-model class="icon" />
                </div>
                <div class="basis-3/4">
                    <h3 class="service md:pr-30">DATA SCIENCE</h3>
                    <p class="service">data-lakes, analytics and machine learning design</p>
                </div>
            </div>
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i-carbon-devices class="icon" />
                </div>
                <div class="basis-3/4">
                    <h3 class="service md:pr-10">SOFTWARE DEVELOPMENT</h3>
                    <p class="service">mobile/web apps and systems integrations</p>
                </div>
            </div>
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i-carbon-bare-metal-server-02 class="icon" />
                </div>
                <div class="basis-3/4">
                    <h3 class="service md:pr-10">PLATFORM ENGINEERING</h3>
                    <p class="service">cloud optimization and reliability improvement</p>
                </div>
            </div>
            <div class="service">
                <div class="basis-1/4 flex justify-end">
                    <i-carbon-user-admin class="icon" />
                </div>
                <div class="basis-3/4">
                    <h3 class="service md:pr-20">EXPERTS ONBOARD</h3>
                    <p class="service">contract support, training and team management</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.icon {
    --at-apply: "inline-block text-5xl text-slate-400 mt-1 mr-4"
}

div.service {
    --at-apply: "flex flex-row p-2 hover:bg-slate-100 cursor-pointer"
}

h3.service {
    --at-apply: "text-xl text-slate-700 font-bold"
}

p.service {
    --at-apply: "text-lg text-slate-500 font-normal"
}
</style>