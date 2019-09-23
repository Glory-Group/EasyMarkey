<template>
  <div class="container">
    <div class="main">main</div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { requestHomeList } from "@/service/index";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    async getHomeList() {
      let result = await requestHomeList();
      console.log(result, "ppppppppp");
    }
  },
  created() {
    this.getHomeList();
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>