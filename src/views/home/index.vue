<template>
  <div class="container">
    <div class="main" ref="main">
      <div class="content">
        <div class="swiper-wrap">
          <v-swiper :banner="banner" vHeight="200px" type="banner"></v-swiper>
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
          <div class="newGoods-wrap">
            <v-goodsItem v-for="(item) in newGoodsList" :key="item.id" :item="item"></v-goodsItem>
          </div>
        </div>
        <div class="hotGoodsBox">
          <div class="hotGoods-title">
            <b>人气推荐</b>
          </div>
          <div class="hotGoods-wrap">
            <v-goodsItem v-for="(item) in hotGoodsList" :key="item.id" :item="item"></v-goodsItem>
          </div>
        </div>
        <div class="topicBox">
          <div class="topic-title">
            <b>专题精选</b>
          </div>
          <div class="topic-wrap">
            <v-swiper :banner="topicList" type="topicList"></v-swiper>
          </div>
        </div>
        <div class="cateGoryBox">
          <div class="cateGory-item" v-for="(item,ind) in cateList" :key="ind">
            <div class="cateGory-title">{{item.name}}</div>
            <div class="newGoods-wrap">
              <v-goodsItem
                v-for="(int) in item.goodsList"
                :key="int.id"
                :item="int"
              ></v-goodsItem>
              <div  class="cate-wrap-item" @click="()=>cateType(item.id)">
                <span class="cateGory-more">更多{{item.name}}好物</span>
                <div class="cateGory-info">
                  <img
                    style=" width: 0.3rem; height: 0.3rem;"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="
                    alt="more"
                  />
                </div>
              </div>
            </div>
          </div>
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
  components: {},
  data() {
    return {
      page: 0
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
    ...mapMutations("home", ["setCurrentPage"]),
    ...mapActions("home", ["homeListAction"]),
    cateType(id) {
      this.$router.replace("/categorys/" + id);
    }
  },
  created() {
    this.homeListAction();
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.main, {
      click: true,
      probeType: 3,
      mouseWheel: true
    });
    this.scroll.on("scrollEnd", e => {
      if (e.y == this.scroll.maxScrollY ) {
        if (this.page < this.totalPage) {
          setTimeout(() => {
            this.page = this.page + 1;
            this.setCurrentPage(this.page);
          }, 1000);
        }
      } else {
        return;
      }
    });
  }
};
</script>
<style scoped  lang="scss">
@import url("./scss/index.css");
.swiper-pagination-bullet {
  margin: 0 5px;
}
.main {
  overflow: hidden;
}
</style>

