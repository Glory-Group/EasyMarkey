<template>
  <div class="container">
    <div class="main">categorys</div>
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.go(-1)}">&lt;</div>
      <div class="header-content">
        <div class="search-input">
          <span>奇趣分类</span>
        </div>
      </div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      /**横向导航 */
      <v-nav :list="currentNavList" :type="'abeam'"></v-nav>categorys
    </div>
  </div>
</template>
<script>
import { mapGetters,mapMutations } from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    //state
    ...mapGetters("catelog", ["currentNavList"])
  },
  methods: {
    //methods
    ...mapMutations("catelog",["setcurrentPage"])
  },
  created() {
    //created
    this.setcurrentPage("caterorys")
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>