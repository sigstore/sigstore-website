<template>
    <article 
        v-if="header" 
        :style="`background-color: ${bgColour};`"
        :class="[isCardStyle ? 'rounded-xl px-40 py-40 md:min-h-440 min-h-400' : 'md:px-10']" 
        class="w-full md:w-1/3 md:max-w-352 md:ml-30 mb-44 relative">
            <img v-if="imageAsset" :src="imageAsset" :alt="`${header} image`" class="mb-24" />
            <h4 v-if="header" class="text-24 leading-32" :class="[$route.params.slug === 'community' ? 'text-orange-dark mb-24' : 'text-purple-dark',$route.params.slug === 'trust-security' ? 'text-white' : 'text-purple-dark mb-24']">{{header}}</h4>
            <p v-if="subHeader" class="mb-24 text-18 leading-22 text-white">{{subHeader}}</p>
            <p :class="[$route.params.slug === 'trust-security' ? 'text-white' : 'text-gray-dark']">{{text}}</p>
            <a 
                v-if="ctaLink" 
                class="pt-24 flex items-center h text-12 md:text-16 inline--button-grey"
                :class="[isCardStyle ? 'absolute mb-40 bottom-0' : null]" 
                :href="ctaLink"
                >
                    {{ctaText}}
                    <span class="ml-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 3H21V9" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 14L21 3" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
            </a>
            <div v-if="socialLinks" class="flex items-center justify-items-start mt-24">
                <a 
                v-if="github" 
                :href="github"
                target="_blank"
                class="mr-12 fill-white icon--link"
                >
                    <!-- icon -->
                    <github />
                </a>
                <a 
                v-if="twitter" 
                :href="twitter"
                target="_blank"
                class="mr-12 fill-white icon--link"
                >
                    <!-- icon -->
                    <twitter />
                </a>
                <a 
                v-if="linkedIn" 
                :href="linkedIn"
                target="_blank"
                >
                    <!-- icon -->
                </a>   
            </div>
    </article>
</template>
<script lang="js">
import twitter from '@/assets/icons/twitter.svg?inline';
import github from '@/assets/icons/github.svg?inline';
export default {

    components: {
        twitter,
        github
    },

    props: {
        header: { type: String, default: null },
        subHeader: { type: String, default: null },
        text: { type: String, default: null },
        isCardStyle: { type: Boolean, default: false },
        socialLinks: { type: Boolean, default: false },
        imageAsset: { type: String, default: null },
        alignment: { type: String, default: null },
        bgColour: { type: String, default: null },
        ctaLink: { type: String, default: null },
        ctaText: { type: String, default: null },
        github: { type: String, default: null },
        twitter: { type: String, default: null },
        linkedIn: { type: String, default: null }
    },

    data: () => ({
    }),

    mounted() {
    },

    methods: {
    }

};
</script>