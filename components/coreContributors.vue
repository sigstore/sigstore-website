<template>
    <section class="pb-128" :class="[bg]" data-header-text="text-gray-dark">
        <div class="container inner text-center text-white mb-32">
            <p class="text-24 subheading">Core contributors</p>
        </div>
        <div class="md:flex justify-between">
            <div class="w-full slider">
                <div
                    class="swiper"
                    >
                    <div class="text-center w-full flex justify-center">
                        <div v-for="(slide, index) in names" :key="index">
                            <p class="text-white leading-32 mx-16">{{ slide }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="js">
import { mapGetters } from "vuex";
export default {

    components: {

    },

    data: () => ({
        articlesArray: {
            type: Array,
            default: null
        },
        swiperOptions: {
          spaceBetween: 20,
          centeredSlides: false,
          speed: 10000,
          autoplay: {
            delay: 1,
          },
          loop: false,
          slidesPerView: 'auto',
          allowTouchMove: false,
          disableOnInteraction: true
        },
        names: [
	    'Ville Aikas', 'Asra Ali', 'Hayden Blauzvern', 'Jason Hall', 'Kenny Leung', 'Dan Lorenc',
            'Billy Lynch',  'Carlos Tadeu Panato Junior',  'Jake Sanders', 'Lily Sturmann'
        ]
    }),

    computed: mapGetters({
        bg: 'settings/bg',
        text: 'settings/textColor'
    }),

    created() {
    },

    methods: {
    },

};
</script>
<style lang="scss" scoped>
  .slider {
    height: auto;
    .swiper-wrapper{transition-timing-function:linear; }
    .swiper {
      height: auto;
      width: 100%;
      .swiper-slide {
        text-align: center;
        width: fit-content;
        display: flex;
      }
      .swiper-pagination {
        > .swiper-pagination-bullet {
          background-color: red;
        }
      }
    }
  }
</style>
