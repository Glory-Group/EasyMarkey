<template>
    <div class="brand-wrap">
                   <div class="brand-item"   v-for="(item) in brandList" :key="item.id" @click="()=>jumpedDetail(item.id)"  >
                      <b class="brand-name" >{{item.name}}</b>
                      <span class="brand-price" >{{item.floor_price}}元起</span>
                      <img v-lazy="item.new_pic_url" >
                   </div>
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
  methods: {
    jumpedDetail(id){
      this.$router.push('/brandDetail/'+id)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
 .brand-wrap{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .brand-item{
            width: 49%;
            height: 1.1rem;
            position: relative;
            color: black;
            margin-bottom: 1px;
            background: white;
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