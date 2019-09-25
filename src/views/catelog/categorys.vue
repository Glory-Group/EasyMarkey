<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/catelog')}">&lt;</div>
      <div class="header-content">
        <div class="search-input">
          <span>奇趣分类</span>
        </div>
      </div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="main-content">
        <v-nav :list="currentNavList" :type="'abeam'"></v-nav>
        <div class="main-content-title">{{front_name}}</div>
        <div class="main-content-goods">
          <v-goodsItem v-for="item in subGoodsList" :key="item.id" :item="item">
          </v-goodsItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("catelog", ["currentNavList", "front_name","subGoodsList"])
  },
  methods: {
    ...mapMutations("catelog", ["setcurrentPage"])
  },
  created() {
    this.setcurrentPage("categorys");
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.main-content {
  width: 100%;
}
.main-content-title{
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.main-content-goods{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>