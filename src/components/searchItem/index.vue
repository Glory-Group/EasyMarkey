<template>
  <div class="search-item" @click="searchGoods">{{item}}</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: String
    },
    changeKeyword:{
        type:Function
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("catelog", ["goodsSearchAction"]),
    searchGoods() {
      this.goodsSearchAction({ keyword: this.item });
      this.changeKeyword(this.item)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.search-item {
  display: inline-block;
  padding: 0.06rem 0.12rem;
  border: 1px solid #ccc;
  border-radius: 0.04rem;
  margin: 0.03rem;
}
</style>