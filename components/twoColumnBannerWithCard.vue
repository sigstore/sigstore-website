<template>
    <section 
    :class="[backgroundColour]" 
    class="py-64 md:py-160" 
    :data-header-text="[(backgroundColour === 'bg-purple-dark') ? 'text-white' : (backgroundColour === 'bg-pastel-blue') ? 'text-purple-dark' : 'text-gray-dark']"
    >
        <div class="md:flex justify-between container inner" :class="[textAlignment != 'textRight' ? 'items-start' : 'items-start']">
            <div v-animate-on-scroll class="w-full lg:w-1/2 step-delay_1 md:mr-80">
                <h2 class="text-36 leading-32 mb-64 md:mb-32" :class="[!bgColour ? 'text-purple-dark' : 'text-purple-dark']">{{header}}</h2>
                <div v-if="textAlignment != 'textRight'" :class="[!bgColour ? 'text-purple-dark' : 'text-gray-dark']" class="md:mt-8 mb-64 md:mb-32 markdown">
                    <div v-html="$md.render(text)" />
                    <div v-html="$md.render(textBottom)" />
                </div>
            </div>
            <div v-if="!card" v-animate-on-scroll class="w-full lg:w-1/2 step-delay_5">
                <div v-if="textAlignment != 'textRight'"><img :src="imageAsset" alt="Right image for text column" /></div>
                <div v-else>
                    <h3 class="text-24 leading-32 text-purple-dark mb-24">{{text}}</h3>
                    <h3 class="text-24 leading-32 text-purple-dark">{{textBottom}}</h3>
                </div>
            </div>
        </div>
        <div class="container container--card">
            <div class="rounded-xl md:bg-white p-0 md:p-32 lg:p-64 mt-64 md:mt-128 w-full mx-auto" :class="[backgroundColour != 'bg-white' ? 'px-24' : 'px-0']">
                <div class="w-full lg:w-1/2 p-24 md:p-0 bg-white md:bg-transparent md:rounded-none rounded-xl text-purple-dark" :class="cardText ? '' : 'pb-0'">
                    <h4 class="text-25 md:text-36 leading-30 md:leading-44 mb-28">{{ cardTitle }}</h4>
                    <div v-if="cardText" class="text-gray-dark" v-html="$md.render(cardText)"></div>
                </div>
                <div class="md:flex items-start justify-between md:-ml-10 md:-mr-10 mt-32 md:mt-64">
                    <div class="mb-32 md:mb-16 w-full md:w-1/3 md:px-10 p-24 md:p-0 bg-white md:bg-transparent md:rounded-none rounded-xl md:max-w-315">
                        <img :src="column1.imageAsset" :alt="`${column1.header} image`" class="mb-24" />
                        <h4 class="mb-24 text-19 md:text-24 leading-23 md:leading-32 text-purple-dark">{{column1.header}}</h4>
                        <p class="text-gray-dark">{{column1.text}}</p>
                    </div>
                    <div class="mb-32 md:mb-16 w-full md:w-1/3 md:px-10 p-24 md:p-0 bg-white md:bg-transparent md:rounded-none rounded-xl md:max-w-315">
                        <img :src="column2.imageAsset" :alt="`${column2.header} image`" class="mb-24" />
                        <h4 class="mb-24 text-19 md:text-24 leading-23 md:leading-32 text-purple-dark">{{column2.header}}</h4>
                        <p class="text-gray-dark">{{column2.text}}</p>
                    </div>
                    <div class="mb-0 md:mb-16 w-full md:w-1/3 md:px-10 p-24 md:p-0 bg-white md:bg-transparent md:rounded-none rounded-xl md:max-w-315">
                        <img :src="column3.imageAsset" :alt="`${column3.header} image`" class="mb-24" />
                        <h4 class="mb-24 text-19 md:text-24 leading-23 md:leading-32 text-purple-dark">{{column3.header}}</h4>
                        <p class="text-gray-dark">{{column3.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="js">
export default {

    components: {

    },

    props: {
        header: { type: String, default: null },
        text: { type: String, default: null },
        textBottom: { type: String, default: null },
        imageAsset: { type: String, default: null },
        alignment: { type: String, default: null },
        bgColour: { type: String, default: null },
        card: { type: Object, default: null },
        cardTitle: { type: String, default: null },
        cardText: { type: String, default: null },
        column1: {
            type: Object,
            default: null
        },
        column2: {
            type: Object,
            default: null
        },
        column3: {
            type: Object,
            default: null
        }
    },

    data: () => ({
    }),

    computed: {
        backgroundColour(){
            return `${this.bgColour}`;
        },
        textAlignment() {
            return this.alignment;
        }
    },

    mounted() {
    },

    methods: {
    }

};
</script>