<template>
     <div class="newGoods-wrap">
                  <div class="newGoods-item" v-for="(item) in newGoodsList" :key="item.id"   @click="()=>{jumpedDetail(item.id)}" >  
                      <img v-lazy="item.list_pic_url"  >
                      <div class="newGoods-name">{{item.name}}</div>
                      <div class="newGoods-price">￥ {{item.retail_price}}</div>
                  </div>
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
  methods: {
      jumpedDetail(id){
         this.$router.push('/goods/'+id)
      }
  },
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
 
          .newGoods-wrap{
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              .newGoods-item{
                  width: 49%;
                  height: 2rem;
                  display: flex;
                  flex-direction: column;
                  background: white;
                  margin-bottom: 1px;
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
      
</style>