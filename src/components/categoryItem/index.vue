<template>
  <dl class="category-item-wrap" @click="()=>jumpCateGorys()">
    <dt class="category-item-img">
      <img :src="item.wap_banner_url" alt />
    </dt>
    <dd class="category-item-des">{{item.name}}</dd>
  </dl>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    jumpCateGorys(){
      this.$router.push(`/categorys/${this.item.id}`)
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
  .category-item-des{
      width: 100%;
      text-align: center;
  }
}
</style>