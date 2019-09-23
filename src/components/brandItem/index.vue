<template>
    <div class="brand-wrap">
                   <a class="brand-item"   v-for="(item) in brandList" :key="item.id" :href="'/brandDetail/'+item.id" >
                      <b class="brand-name" >{{item.name}}</b>
                      <span class="brand-price" >{{item.floor_price}}元起</span>
                      <img v-lazy="item.new_pic_url" >
                   </a>
             </div>
</template>
<script>
export default {
  props: {
      brandList:{
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