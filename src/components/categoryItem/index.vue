<template>
  <dl class="category-item-wrap" @click="()=>jumpCateGorys()">
    <dt class="category-item-img">
      <img :src="item.wap_banner_url" alt />
    </dt>
    <dd class="category-item-des">{{item.name}}</dd>
  </dl>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    item: {
      type: Object
    },
    index:{
      type:Number
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations("catelog", ["setSubNav","setcurrentPage"]),
    ...mapActions("catelog",["changeTabAction"]),
    jumpCateGorys() {
      this.setSubNav(this.index);
      this.setcurrentPage("categorys")
      console.log(this.item.id,"11111111111111")
       this.changeTabAction({id:this.item.id})
      this.$router.push(`/categorys/${this.item.id}`);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.category-item-wrap {
  width: 1.28rem;
  height: 1.45rem;
  .category-item-img {
    width: 1.28rem;
    height: 1.28rem;
    padding: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .category-item-des {
    width: 100%;
    text-align: center;
  }
}
</style>