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
 .brand-wrap{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .brand-item{
            width: 50%;
            height: 1.1rem;
            position: relative;
            color: black;
            img{
              width: 100%;
              height: 100%;
            }
            .brand-name{
              position: absolute;
              top:0.05rem;
              left:0.1rem
            }
            .brand-price{
              position: absolute;
              top:0.25rem;
              left:0.1rem;
              color: #a9a9a9;
            }
          }
        }
</style>