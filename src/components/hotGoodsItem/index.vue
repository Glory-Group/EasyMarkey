<template>
   <div class="hotGoods-wrap">
              <router-link class="hotGoods-item" v-for="item in hotGoodsList" :key="item.id" :to="'/goods/'+item.id"  >  
                 <img v-lazy="item.list_pic_url" >
                 <div class="hotGoods-info">
                     <div class="hotGoods-name">{{item.name}}</div>
                     <div class="hotGoods-info-item">{{item.goods_brief}}</div>
                     <div class="hotGoods-price">￥ {{item.retail_price}}</div>
                 </div>
              </router-link>
             </div>
</template>
<script>
export default {
  props: {
      hotGoodsList:{
          type:Array
      }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    // jumpedDetail(id){
    //     this.$router.replace('/goods/'+id)
    // }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">

</style>