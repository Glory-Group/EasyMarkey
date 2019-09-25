<template>
  <div class="container">
    <v-header>
      <div class="header-back"></div>
      <div class="header-content">
        <div class="search-input" @click="jumpSearch">
          <span>搜索商品，共239款好物</span>
        </div>
      </div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="main-content">
        <v-nav :type="'column'"></v-nav>
        <div class="catelog-wrap">
          <div class="catelog-content">
            <div class="catelog-banner">
              <img v-lazy="currentCategory.banner_url" alt />
              <span class="catelog-banner-descripe">{{currentCategory.front_name}}</span>
            </div>
            <div class="catelog-title">
              <div>{{currentCategory.name}}分类</div>
            </div>
            <div class="sub-catelog-wrap">
              <v-categoryItem
                v-for="(item,index) in currentCategory.subCategoryList"
                :key="item.id"
                :item="item"
                :index="index"
              ></v-categoryItem>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("catelog", ["currentCategory"])
  },
  methods: {
    ...mapActions("catelog", ["initCatelogAction"]),
    ...mapMutations("catelog",["setcurrentPage"]),
    jumpSearch() {
      this.$router.push("/goodsSearch");
    }
  },
  created() {
    !this.currentCategory.length&&this.initCatelogAction();
    this.setcurrentPage("catelog")
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.search-input {
  width: 100%;
  height: 0.28rem;
  background-color: #ededed;
  color: #666;
  text-align: center;
  line-height: 0.28rem;
  border-radius: 5px;
}
.main-content {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.catelog-wrap {
  background: #fff;
  width: 2.75rem;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.catelog-content {
  height: auto;
  width: 100%;
  .catelog-banner {
    width: 100%;
    height: 1rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .catelog-banner-descripe {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 16px;
    }
  }
  .catelog-title {
    width: 100%;
    height: 0.34rem;
    text-align: center;
    line-height: 0.34rem;
    color: #108ee9;
  }
  .sub-catelog-wrap {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding: 0 .05rem .05rem .05rem;
  }
}
</style>