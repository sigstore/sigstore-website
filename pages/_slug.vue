<template>
  <div>
    <component :is="section.type" v-for="(section, index) in page.sections" :key="index" v-bind="section" /> 
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {

  },

  async asyncData({ $content, params, error }) {
    const slug = params.slug || "home";
    const page = await $content(slug)
      .fetch();
    
    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      page
    };
  },
  data () {
    return {
      animation: ''
    }
  },
  head() {
      return this.page ? {
        title: this.page.title,
        titleTemplate: `%s · Sigstore`,
        script: [
          { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
          {
            json: {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${process.env.VUE_APP_FRONTEND + this.$route.path}`
              },
              headline: `Home`,
              url: `${process.env.VUE_APP_FRONTEND + this.$route.path}`
            },
            type: "application/ld+json"
          }
        ],
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Sigstore: sign, verify, and protect your software.' },
          { name: 'format-detection', content: 'telephone=no' },
          // Twitter Card
        {
          name: "twitter:card",
          content: process.env.VUE_APP_SITENAME
        },
        { name: "twitter:title", content: "Sigstore"},
        {
          name: "twitter:description",
          content: "sign. verify. protect. Make sure your software is what it claims to be."
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: '/img/sigstore_logo.png'
        },
        // Facebook OpenGraph
        { property: "og:title", content: "Sigstore" },
        {
          property: "og:site_name",
          content: process.env.VUE_APP_SITENAME
        },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: '/img/sigstore_logo.png'
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: "sign. verify. protect. Make sure your software is what it claims to be."
        }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: "canonical",
            href: `${process.env.VUE_APP_FRONTEND + this.$route.path}`
          }
        ]
      } : null
  },
  computed: {

  },

  mounted(){
    const firstBanner = this.page.sections.filter(p => p.type === 'textBanner')[0]
    const textBannerCards = this.page.sections.filter(p => p.type === 'textBannerWithcards')
    if(firstBanner){
      this.setHeaderColour({bg:firstBanner.bgColour,text: this.$route.params.slug === 'trust-security' ? 'text-white':'text-gray-dark'});
    } else {
      this.setHeaderColour({bg:textBannerCards[0].bgColour,text: this.$route.params.slug === 'trust-security' ? 'text-white':'text-gray-dark'});
    }
  },

  methods: {
    ...mapActions("settings", ["setHeaderColour"]),
  }
};
</script>
<style lang="scss">
.page {
  &--component {
    &-border{
      /* border-bottom: 2px solid #444444; */
    }
  }
}
</style>
