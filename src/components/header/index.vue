<template>
  <header class="header">
    <slot></slot>
  </header>
</template>
<script>
export default {
  props: {
    backPath: {
      type: String
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
<style scoped lang="">
</style>