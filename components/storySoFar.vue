<!-- eslint-disable -->
<template>
    <section class="py-128 bg-white" data-header-text="text-gray-dark">
        <div v-if="story.textBlock" class="md:flex justify-between items-start container inner">
            <div v-animate-on-scroll class="w-full md:w-1/2 step-delay_1">
                <h2 class="text-36 leading-32 mb-32 text-gray-dark">{{story.header}}</h2>
            </div>
            <div v-animate-on-scroll class="w-full md:w-1/2 step-delay_2">
                <div class="text-gray-dark markdown" v-html="$md.render(story.textBlock)"></div>
            </div>
            </div>
        <br><br>
        <div v-if="story.recentTextBlock" class="md:flex justify-between items-start container inner">
            <div v-animate-on-scroll class="w-full md:w-1/2 step-delay_1">
                <h2 class="text-36 leading-32 mb-32 text-gray-dark">{{story.recentHeader}}</h2>
            </div>
            <div v-animate-on-scroll class="w-full md:w-1/2 step-delay_2">
                <div class="text-gray-dark markdown" v-html="$md.render(story.recentTextBlock)"></div>
        </div>
        </div>
        <br><br>
        <div v-if="story.initiativesTextBlock" class="md:flex justify-between items-start container inner">
            <div v-animate-on-scroll class="w-full md:w-1/2 step-delay_1">
                <h2 class="text-36 leading-32 mb-32 text-gray-dark">{{story.initiativesHeader}}</h2>
            </div>
            <div v-animate-on-scroll class="w-full md:w-1/2 step-delay_2">
                <div class="text-gray-dark markdown" v-html="$md.render(story.initiativesTextBlock)"></div>
        </div>
        </div>
    </section>
</template>
<script lang="js">

export default {

    data: () => ({
        story: {
            type: Object,
            default: null
        },
        dates: {
            type: Object,
            default: null
        },
        ctaInfo: {
            type: Object,
            default: null
        },
        ctaInfoEmail: {
            type: Object,
            default: null
        }
    }),

    computed: {
    },

    created() {
        this.getStoryContent();
        this.getCtaData();
    },

    methods: {
        async getStoryContent(){
            const storyData = await this.$content('story').fetch();
            const info = storyData.filter(story => story.slug === 'info');
            const dates = storyData.filter(story => story.slug === 'dates');
            this.story = info[0];
            this.dates = dates[0];
        },
        async getCtaData(){
            const globalData = await this.$content('ctas').fetch();
            const cta = globalData.find(cta => cta.slug === 'view-the-project');
            const emailCta = globalData.find(cta => cta.slug === 'if-youre-interested-lets-talk');
            this.ctaInfo = cta;
            this.ctaInfoEmail = emailCta;
        },
    },

};
</script>
<!-- eslint-enable -->