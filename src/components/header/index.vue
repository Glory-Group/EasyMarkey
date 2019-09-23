<template>
  <header class="header">
    <div class="header-back" @click="()=>{this.$router.history.go(-1)}">&lt;</div>
    <div class="header-content">
      <slot></slot>
    </div>
    <div class="header-right"></div>
  </header>
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