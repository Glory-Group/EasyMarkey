<template>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">

</style>