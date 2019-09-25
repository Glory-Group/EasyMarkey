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
      <v-nav :list="currentNavList" :type="'abeam'"></v-nav>categorys
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
    //state
    ...mapGetters("catelog", ["currentNavList"])
  },
  methods: {
    //methods
    ...mapMutations("catelog", ["setcurrentPage"])
  },
  created() {
    //created
    this.setcurrentPage("categorys");
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>