<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{backCatelog()}">&lt;</div>
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
          <v-BScroll
            :totalPages="totalPages"
            :loadMoreDispatch="scrollUpload"
            :changeCurrent="setCategoryCurrentPage"
            :current="categoryCurrentPage"
            :totalPage="categoryTotalPages"
            :id="this.id"
          >
            <v-goodsItem v-for="item in subGoodsList" :key="item.id" :item="item"></v-goodsItem>
          </v-BScroll>
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
    return {
      id: this.$route.params.id,
      totalPages: this.subcategory && this.subcategory.totalPages
    };
  },
  computed: {
    ...mapGetters("catelog", [
      "currentNavList",
      "front_name",
      "subGoodsList",
      "catelogId",
      "subcategory",
      "categoryCurrentPage",
      "categoryTotalPages"
    ])
  },
  methods: {
    ...mapMutations("catelog", ["setcurrentPage", "setCategoryCurrentPage"]),
    ...mapActions("catelog", [
      "changeSubTabAction",
      "initCatelogAction",
      "changeTabAction",
      "currentCatelogAction",
      "scrollUpload"
    ]),
    async backCatelog() {
      let result = await this.initCatelogAction();
      let changeItem = await this.changeTabAction({ id: this.catelogId });
      if (result.errno === 0) {
        if (changeItem.errno === 0) {
          this.$router.history.push("/catelog");
        }
      }
    }
  },
  created() {
    this.setcurrentPage("categorys");
    this.changeSubTabAction(this.id);
    this.changeTabAction({id:this.id})
    this.currentNavList.length && this.currentCatelogAction();
    console.log(this.subcategory, "subcategory");
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.main-content {
  width: 100%;
  height: 100%;
}
.main-content-title {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: #fff;
}
.main-content-goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
</style>