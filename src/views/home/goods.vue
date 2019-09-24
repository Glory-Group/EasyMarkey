<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/home')}">&lt;</div>
      <div class="header-content">{{goodsDetail&&goodsDetail.info.name}}</div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="content">
        <div class="swiper-wrap">
          <v-swiper
            :banner="goodsDetail.gallery"
             type="goodsBanner"
            :vHeight="goodsDetail.gallery.length?'3.5rem':'1rem'"
          ></v-swiper>
        </div>
        <div class="serviceList">
          <li>
            <span>⭐</span>
            <span>30天无忧退货</span>
          </li>
          <li>
            <span>⭐</span>
            <span>40小时快速退款</span>
          </li>
          <li>
            <span>⭐</span>
            <span>满88元免邮费</span>
          </li>
        </div>
        <div class="goodsMsgWrap">
          <div class="goodsNameTitle">
            <span>{{goodsDetail.info.name}}</span>
          </div>
          <div class="goodsSubTitle">
            <span>{{goodsDetail.info.goods_brief}}</span>
          </div>
          <div class="goodsPrice">
            <span>￥ {{goodsDetail.info.retail_price}}</span>
          </div>
        </div>
        <div class="goodsSize">
          <div></div>
          <div>x 0</div>
          <div>
            选择规格
            <span>></span>
          </div>
        </div>
        <div class="goodsAttribute">
          <div class="goodsTitleLine">
            <span>—— 商品参数 ——</span>
          </div>
          <div class="goodsAttList" v-show="goodsDetail.attribute.length">
            <div class="attributeItem" v-for="item in goodsDetail.attribute" :key="item.id">
              <span>{{item.name}}</span>
              <span>{{item.value}}</span>
            </div>
          </div>
        </div>
        <div class="goodsImg" v-html="goodsDetail.info.goods_desc"></div>
        <div class="goodsQuestion">
          <div class="goodsTitleLine">
            <span>—— 常见问题 ——</span>
          </div>
          <div class="goodsProblme" v-for="item in goodsDetail.issue" :key="item.id">
            <div class="problme">
              <span>√</span>
              {{item.question}}
            </div>
            <div class="answer">{{item.answer}}</div>
          </div>
        </div>
        <div class="goodsWatchList">
          <div class="goodsTitleLine">
            <span>—— 大家都在看 ——</span>
          </div>
          <div class="newGoodsBox">
            <v-newGoodsItem :newGoodsList="goodsDetailList"></v-newGoodsItem>
          </div>
        </div>
      </div>
    </div>
    <v-footer>
      <div class="goodsFoot">
        <div class="isLike">收藏</div>
        <div class="cartNum">
          <i class="iconfont icon-weibiaoti--"></i>
          <span>0</span>
        </div>
        <div class="addCart">
            加入购物车
        </div>
        <div class="payGoods">
            立即购买
        </div>
      </div>
    </v-footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState("goods", ["goodsDetail", "goodsDetailList"])
  },
  methods: {
    ...mapActions("goods", ["getGoodsDetailAction", "getGoodsDetailListAction"])
  },
  created() {},
  mounted() {
    this.getGoodsDetailAction({ id: this.id });
    this.getGoodsDetailListAction({ id: this.id });
  }
};
</script>
<style  lang="scss">
@import url("//at.alicdn.com/t/font_1431758_oriotd1fx9h.css");
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.serviceList {
  width: 100%;
  height: 0.4rem;
  display: flex;
  li {
    flex: 1;
    list-style: none;
    display: flex;
    @extend %juzhong;
    span {
      &:nth-of-type(1) {
        flex: 2;
        @extend %juzhong;
        font-size: 12px;
      }
      &:nth-of-type(2) {
        flex: 8;
        @extend %juzhong;
        font-size: 12px;
        color: #666666;
      }
    }
  }
}
.goodsMsgWrap {
  width: 100%;
  height: 1.4rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
  .goodsNameTitle {
    width: 100%;
    height: 0.3rem;
    @extend %juzhong;
    font-size: 20px;
  }
  .goodsSubTitle {
    width: 100%;
    height: 0.2rem;
    @extend %juzhong;
    font-size: 15px;
  }
  .goodsPrice {
    width: 100%;
    height: 0.5rem;
    @extend %juzhong;
    color: red;
    font-size: 20px;
  }
}
.goodsSize {
  width: 100%;
  height: 0.5rem;
  display: flex;
  padding: 0 20px;
  margin-top: 1px;
  background: white;
  div {
    &:nth-of-type(1) {
      flex: 6;
    }
    &:nth-of-type(2) {
      flex: 1;
      font-size: 15px;
      color: #ff0000;
      @extend %juzhong;
    }
    &:nth-of-type(3) {
      flex: 3;
      font-size: 15px;
      @extend %juzhong;
    }
  }
}
.goodsAttribute {
  width: 100%;
  display: flex;
  flex-direction: column;
  @extend %juzhong;
  background: white;
  margin: 10px 0;
  .goodsTitleLine {
    width: 100%;
    height: 0.3rem;
    display: flex;
    @extend %juzhong;
    span {
      color: #2196f3;
    }
  }
  .goodsAttList {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;
    .attributeItem {
      width: 100%;
      display: flex;
      background: #ccc;
      margin: 5px 0;
      padding:10px;
      span {
        &:nth-of-type(1) {
          flex: 4;
          @extend %juzhong;
          flex-wrap: wrap;
          font-size: 16px;
          color: #808080;
        }
        &:nth-of-type(2) {
          flex: 6;
          @extend %juzhong;
          font-size: 15px;
        }
      }
    }
  }
}
.goodsImg {
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
    display: flex;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.goodsQuestion {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  .goodsTitleLine {
    width: 100%;
    height: 0.3rem;
    display: flex;
    @extend %juzhong;
    span {
      color: #2196f3;
    }
  }
  .goodsProblme {
    width: 100%;
    display: flex;
    flex-direction: column;
    .problme {
      width: 100%;
      height: 0.3rem;
      font-size: 16px;
      display: flex;
      align-items: center;
      span {
        color: red;
      }
    }
    .answer {
      width: 100%;
      height: 0.5rem;
      font-size: 15px;
      color: #808080;
    }
  }
}
.goodsWatchList {
  width: 100%;
  display: flex;
  flex-direction: column;
  .goodsTitleLine {
    width: 100%;
    height: 0.5rem;
    display: flex;
    @extend %juzhong;
    background: white;
    span {
      color: #2196f3;
    }
  }
}

.goodsFoot{
    width: 100%;
    height: 100%;
    display: flex;
    .isLike{
        flex:2;
         @extend %juzhong;
    }
    .cartNum{
        flex:2;
         @extend %juzhong;
         position: relative;
         i{
             font-size: 16px;
         }
         span{
             position: absolute;
             color: red;
             right:20%;
             top:10%
         }
    }
    .addCart{
        flex:3;
         @extend %juzhong;
         background: linear-gradient(90deg, #ff9500, #ff5e3a);
         color: white;
    }
    .payGoods{
        flex:3;
        @extend %juzhong;
        background: linear-gradient(90deg, #1d62f0, #19d5fd);
        color: white;
    }
}
</style>