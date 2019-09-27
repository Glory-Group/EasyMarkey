<template>
  <div class="container">
    <v-scroll
      :list="{...category,
      refreshDispatch:'category/pullRefresh',
      loadMoreDispatch:'category/loadMore'}"
    >
      <template v-slot:default="slotProps">
        <div v-for="(item) in slotProps.data" :key="item.id" class="main-content-item">
          <TopicItem :item="item" :isShow="true"></TopicItem>
        </div>
      </template>
    </v-scroll>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({ category: state => state.category })
  },
  methods: {
    ...mapActions("category", ["pullRefresh"]),
  },
  created() {
  },
  mounted() {
    this.pullRefresh({ url: "/topic/list", page: 1 });
    console.log(this.category);
  }
};
</script>
<style scoped lang="scss">
.main {
  overflow: hidden;
}
.main-content {
  width: 100%;
  height: auto;
}
.main-content-item {
  width: 100%;
}
.upload {
  height: 0.44rem;
  background-color: cornflowerblue;
  line-height: 0.44rem;
  text-align: center;
}
</style>