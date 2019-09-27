<template>
  <swiper :style="vHeight&&`height:${vHeight}`" :options="swiperOption">
    <swiper-slide v-for="(item) in banner&&banner" :key="item.id">
      <img :src="item.image_url"  v-show="type==='banner'" style="width:100%;height:auto"/>
      <img :src="item.img_url"  v-show="type==='goodsBanner'"  style="width:100%;height:auto" >
      <TopicItem v-show="type==='topicList'"  style="width:330px; margin:0 auto" :isShow="true" :item="item"></TopicItem>
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "@/assets/swiper/swiper.css";
export default {
  props: {
    banner: {
      type: Array
    },
    type:{
        type:String
    },
    vHeight:{
        type:String
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          waitForTransition: true
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>