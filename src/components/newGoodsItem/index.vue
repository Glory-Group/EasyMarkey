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

</style>