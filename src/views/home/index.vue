<template>
  <div class="container">
    <div class="main" ref="main" >
      <div class="content"  >
        <div class="swiper-wrap">
          <v-swiper :banner="banner" type="banner" ></v-swiper>
        </div>
        <v-channelItem :channel="channel"></v-channelItem>
        <div class="brandBox">
          <div class="brand-title">
            <b>品牌制造商直供</b>
          </div>
          <v-brandItem :brandList="brandList"></v-brandItem>
        </div>
        <div class="newGoodsBox">
          <div class="newGoods-title">
            <b>新品首发</b>
          </div>
          <v-newGoodsItem :newGoodsList="newGoodsList"></v-newGoodsItem>
        </div>
        <div class="hotGoodsBox">
          <div class="hotGoods-title">
            <b>人气推荐</b>
          </div>
          <v-hotGoodsItem :hotGoodsList="hotGoodsList"></v-hotGoodsItem>
        </div>
        <div class="topicBox">
          <div class="topic-title">
            <b>专题精选</b>
          </div>
          <div class="topic-wrap">
            <v-swiper :banner="topicList" type="topicList"  ></v-swiper>
          </div>
          <v-cateGory  :cateGoryList="cateList"  ></v-cateGory>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>

import { mapState, mapMutations, mapActions } from "vuex";

import BScroll from "better-scroll";
export default {
  props: {},
  components: {
  
  },
  data() {
    return {
      page:0,
    
    };
  },
  computed: {
    ...mapState("home", [
      "homeList",
      "banner",
      "channel",
      "newGoodsList",
      "hotGoodsList",
      "brandList",
      "categoryList",
      "topicList",
      "currentPage",
      "totalPage",
      "cateList"
    ])
  },
  methods: {
    ...mapMutations('home',['setCurrentPage']),
    ...mapActions("home", ["homeListAction"])
  },
  created() {

  },
  mounted() {
    this.scroll= new BScroll(this.$refs.main,{
      click:true,
      probeType:3,
      mouseWheel:true
    })
    this.scroll.on("scrollEnd",e=>{
      if(e.y < this.scroll.maxScrollY +100 ){
        if(this.page<this.totalPage){
          setTimeout(()=>{
            this.page=this.page+1;
            this.setCurrentPage(this.page)
          },1000)
        }
      }else{
        return
      }
    })
    this.homeListAction();
  }
};
</script>
<style scoped  lang="scss">
@import url("./scss/index.css");
.swiper-pagination-bullet {
  margin: 0 5px;

}
.main{
  overflow: hidden;
}

</style>

