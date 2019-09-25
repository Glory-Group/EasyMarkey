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
<<<<<<< HEAD
import { mapGetters,mapMutations } from "vuex"
=======
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
>>>>>>> ae3d3b7e6e3505fae82ddc22ec9260067efec46e
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