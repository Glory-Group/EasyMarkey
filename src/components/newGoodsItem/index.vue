<template>
     <div class="newGoods-wrap">
                  <a class="newGoods-item" v-for="(item) in newGoodsList" :key="item.id" :href="'/goods/'+item.id">
                      <img v-lazy="item.list_pic_url" >
                      <div class="newGoods-name">{{item.name}}</div>
                      <div class="newGoods-price">￥ {{item.retail_price}}</div>
                  </a>
             </div>
</template>
<script>
export default {
  props: {
      newGoodsList:{
          type:Array
      }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
%juzhong{
  display: flex;
  justify-content: center;
  align-items: center;
}
 .newGoodsBox{
          width: 100%;
          display: flex;
          flex-direction: column;
          .newGoods-title{
              width: 100%;
              height: 0.5rem;
              font-size: 16px;
              @extend %juzhong;
          }
          .newGoods-wrap{
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              .newGoods-item{
                  width: 50%;
                  height: 2rem;
                  display: flex;
                  flex-direction: column;
                  img{
                      width: 100%;
                      height: 1.4rem;
                  }
                  .newGoods-name{
                      flex:1;
                      color: black;
                      @extend %juzhong;
                  }
                  .newGoods-price{
                      flex:1;
                      @extend %juzhong;
                      color: #8b0000;
                  }
              }
          }
      }
</style>