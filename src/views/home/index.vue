<template>
  <div class="container">
    <div class="main">
      <div class="content">
            <div class="swiper-wrap" >
                <swiper :options="swiperOption">
                      <swiper-slide v-for="(item) in banner" :key="item.id" >
                          <img  style="width:100%;height:100%"   :src="item.image_url" :alt="item.name">
                      </swiper-slide>
                      <div class="swiper-scrollbar"></div>
                      <div class="swiper-pagination"></div>
                </swiper>
           </div>
           <div class="channelBox">
               <div class="channel-item" v-for="(item) in channel" :key="item.id"  >
                  <span> <img v-lazy="item.icon_url" :alt="item.name"> </span><span>{{item.name}}</span>
               </div>
           </div>
           <div class="brandBox">
             <div class="brand-title">
                 <b>品牌制造商直供</b>   
             </div>
             <div class="brand-wrap">
                   <a class="brand-item"   v-for="(item) in brandList" :key="item.id" :href="'/brandDetail/'+item.id" >
                      <b class="brand-name" >{{item.name}}</b>
                      <span class="brand-price" >{{item.floor_price}}元起</span>
                      <img v-lazy="item.new_pic_url" >
                   </a>
             </div>
           </div>
           <div class="newGoodsBox">
             <div class="newGoods-title">
              <b>新品首发</b> 
             </div>
             <div class="newGoods-wrap">
                  <a class="newGoods-item" v-for="(item) in newGoodsList" :key="item.id" :href="'/goods/'+item.id">
                      <img :src="item.list_pic_url" >
                      <div class="newGoods-name">{{item.name}}</div>
                      <div class="newGoods-price">￥ {{item.retail_price}}</div>
                  </a>
             </div>
           </div>
           <div class="hotGoodsBox">
             <div class="hotGoods-title">
              <b>人气推荐</b> 
             </div>
             <div class="hotGoods-wrap">
               <a class="hotGoods-item" v-for="item in hotGoodsList" :key="item.id"  :href="'/goods/'+item.id">
                 <img :src="item.list_pic_url" >
                 <div class="hotGoods-info">
                     <div class="hotGoods-name">{{item.name}}</div>
                     <div class="hotGoods-info-item">{{item.goods_brief}}</div>
                     <div class="hotGoods-price">￥ {{item.retail_price}}</div>
                 </div>
               </a>
             </div>
           </div>
           <div class="topicBox">
             <div class="topic-title"> <b>专题精选</b> </div>
             <div class="topic-wrap">
                
             </div>
           </div>
      </div>
      
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import "@/assets/swiper/swiper.css"
import { mapState,mapMutations,mapActions } from "vuex"
import { swiper, swiperSlide } from "vue-awesome-swiper"


export default {
  props: {},
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
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    ...mapState('home',['homeList','banner','channel','newGoodsList',
    'hotGoodsList','brandList','categoryList','topicList'])
  },
  methods: {
    ...mapActions('home',['homeListAction']),
    listType(){
      let { errno , errmsg } =  this.homeList
      console.log(errno,errmsg)
    }
  },
  created() {
   
  },
  mounted() {
    this.homeListAction()
    this.listType()
  }
};
</script>
<style >
@import url("./scss/index.css");
</style>

