<template>
    <section class="py-64 md:py-0 md:px-16" :class="[$route.params.slug === 'trust-security' ? 'bg-purple-dark' : 'bg-white']" data-header-text="text-gray-dark">
        <div class="container">
            <div class="md:max-w-1/2 w-full">
                <h3 v-animate-on-scroll class="pb-64 delay-step_1" :class="[$route.params.slug === 'community' ? 'text-orange-dark' : 'text-purple-dark']">{{ header }}</h3>
                <div v-if="text" v-animate-on-scroll class="delay-step_3 pb-64 text-gray-dark" v-html="$md.render(text)"></div>
            </div>
            <h3 v-if="subHeader" class="pb-64 text-white text-center flex-none block w-full">{{ subHeader }}</h3>
            <div class="md:flex items-start md:-ml-30 md:-mr-30 md:pr-30" :class="[column2.header ? 'justify-between':'justify-start']">
                <Card v-bind="column1" />
                <Card v-bind="column2" />
            </div>
        </div>
    </section>
</template>
<script lang="js">
import Card from '@/components/Card.vue';
export default {

    components: {
        Card
    },

    props: {
        column1: {
            type: Object,
            default: null
        },
        column2: {
            type: Object,
            default: null
        },
    },

    data: () => ({
    }),

    computed: {
        backgroundColour(){
            return `background: ${this.bgColour};`;
        }
    },

    mounted() {
    },

    methods: {
    }

};
</script>
