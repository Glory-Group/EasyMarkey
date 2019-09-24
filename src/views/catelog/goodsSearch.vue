<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/catelog')}">&lt;</div>
      <div class="header-content">
          <input type="text" placeholder="搜索">
      </div>
      <div class="header-right">
          <span>取消</span>
      </div>
    </v-header>
    <div class="main">goodsearch</div>
    <v-footer></v-footer>
  </div>
</template>
<script>
export default {
  props: {},
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
<style scoped lang="">
</style>