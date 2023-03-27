<!-- eslint-disable vue/no-v-html -->
<template>
    <section>
        <div
        ref="textBanner"
        class="text_banner md:flex justify-center items-center relative"
        :class="[backgroundColour,isScreenHeight ? 'min-h-screen md:flex-col' : 'h-auto py-128']"
        :data-header-text="[(backgroundColour === 'bg-purple-dark') ? 'text-white' : (backgroundColour === 'bg-pastel-blue') ? 'text-purple-dark' : 'text-gray-dark']"
        :data-bg-color="backgroundColour"
        >
            <div class="flex items-center justify-center" :class="[showSupportedBy ? 'text_banner--main' : null, isScreenHeight ? 'h-screen' : 'h-auto' ]">
                <div class="container inner relative" :class="[showSupportedBy ? 'md:h-180' : null,textAlign === 'center' ? 'text-left md:text-center' : 'text-left']">
                    <h1 v-if="header" v-animate-on-scroll :class="[textColour]" class="delay-step_1 mb-30 ">{{header}}</h1>
                    <h2 v-animate-on-scroll :class="[textAlign == 'center' ? 'md:max-w-690 w-full mx-auto' : null,textColour]" class="subheading md:text-24 delay-step_3 mb-26">{{text}}</h2>
                    <div v-if="ctaButtons" v-animate-on-scroll class="delay-step_5">
                        <div v-for="(ctaButton, index) in ctaButtons" :key="index" :class="[textAlign == 'center' ? 'flex justify-center items-center' : 'flex justify-start items-center']">
                            <component :is="`${ctaStyle}`" v-bind="[{'slug': ctaButton}]" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showSupportedBy" v-animate-on-scroll class="absolute bottom-0 mb-24 w-full delay-step_5">
                <div class="container inner text-center md:text-left">
                    <p class="h mb-16 text-gray-dark">In collaboration with </p>
                    <div class="flex items-center justify-center md:justify-start flex-wrap">
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/openssf-horizontal-color.svg" alt="OpenSSF sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/chainguard.svg" alt="Chainguard sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-110 md:mr-20 mobile:w-20" src="/img/cisco.png" alt="Cisco sponsor logo" />
                        <img class="md:w-70 w-1/3 lg:w-55 lg:mu-2.5 xl:w-50 md:mr-20 mobile:w-15" src="/img/github-logo.svg" alt="GitHub sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/googlelogo.png" alt="Google sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/hpe.png" alt="HPE sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/purdueunilogo.png" alt="Purdue University sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/redhatlogo.png" alt="RedHat sponsor logo" />
                        <img class="md:w-122 w-1/3 lg:w-55 lg:mu-2.5 xl:w-122 md:mr-20 mobile:w-20" src="/img/vmware.png" alt="VMware sponsor logo" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-pastel-orange w-full">
            <div v-if="showStatsBanner" v-animate-on-scroll class="delay-step_4 container container--card relative lg:py-64">
                <div class="lg:flex flex-wrap items-center justify-between bg-orange-medium py-50 px-20 lg:p-64 stat_banner">
                    <div class="w-full md:w-full lg:w-1/2 lg:max-w-440">
                        <div class="flex items-center justify-start">
                            <div class="md:pr-24">
                                <h2 class="text-21 lg:text-54 text-orange-dark mb-10 lg:mb-16">{{ info.commits }}+</h2>
                                <h4 class="h4 text-orange-dark uppercase">Commits</h4>
                            </div>
                            <div class="md:pr-24 pl-24">
                                <h2 class="text-21 lg:text-54 text-orange-dark mb-10 lg:mb-16">{{ info.members }}+</h2>
                                <h4 class="h4 text-21 text-orange-dark uppercase">Members</h4>
                            </div>
                            <div class="md:pr-24 pl-24">
                                <h2 class="text-21 lg:text-54 text-orange-dark mb-10 lg:mb-16">{{ info.organizations }}+</h2>
                                <h4 class="h4 text-orange-dark uppercase">Orgs</h4>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-full lg:w-1/2 lg:max-w-470 mt-28">
                        <div class="bg-white rounded-full p-28 text-gray-dark flex items-center justify-around">
                            <p class="text-11 md:text-12 pr-22 md:w-auto w-1/2">Now generally available!</p>
                            <a href="https://github.com/sigstore" target="_blank" class="button button--transparent-border md:w-auto w-1/2">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="js">
/* eslint camelcase : ["error", {ignoreDestructuring:false}] */
export default {
    components: {
    },
    props: {
        header: { type: String, default: null },
        text: { type: String, default: null },
        useCta: Boolean,
        ctaButtons: { type: Array, default: null },
        ctaStyle: { type: String, default: 'solidCtaPurple' },
        bgColour: { type: String, default: null },
        textAlign: { type: String, default: null },
        textColour: { type: String, default: null },
        isScreenHeight: {
            type: Boolean,
            default: true
        },
        showSupportedBy: {
            type: Boolean,
            default: false
        },
        showStatsBanner: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        info: {
            type: Object,
            default: null
        }
    }),

    computed: {
        backgroundColour(){
            return `${this.bgColour}`;
        }
    },

    created() {
        if(this.showStatsBanner){
            this.getGlobalStats();
        }
    },

    methods: {
        async getGlobalStats(){
            const globalData = await this.$content('setup').fetch()
            const t = globalData.reduce((info, g) => {
                if (g.slug === 'info') info = g;
                return info;
            }, {});
            this.info = t;
        }
    }
    
};
</script>
<style lang="scss">
.text_banner{
    &--main{
        height: 100vh;
    }
}

@media (max-width: 767px) {
  .mobile\:w-20 {
    width: 55px;
    margin-right: 10px;
    padding-bottom: 7px;
  }
  .mobile\:w-15 {
    width: 20px;
    margin-right: 10px;
    padding-bottom: 7px;
  }
}

@media (max-width: 1024px) and (min-width: 768px) {
  .mobile\:w-20 {
    width: 74px;
    margin-right: 10px;
    padding-bottom: 7px;
  }
  .mobile\:w-15 {
    width: 35px;
    margin-right: 10px;
    padding-bottom: 7px;
  }
}

@media (max-width: 1367px) and (min-width: 912px) {
  .mobile\:w-20 {
    width: 88px;
    margin-right: 14px;
    padding-bottom: 7px;
  }
  .mobile\:w-15 {
    width: 35px;
    margin-right: 14px;
    padding-bottom: 7px;
  }
}
</style>
<!-- eslint-enable -->
