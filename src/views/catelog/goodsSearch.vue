<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/catelog')}">&lt;</div>
      <div class="header-content">
        <div class="search-ipt-box">
          <span></span>
          <input
            type="text"
            :placeholder="defaultKeyword.keyword"
            @keyup.enter="(e)=>searchGoods(e)"
            v-model="keyword"
          />
        </div>
      </div>
      <div class="header-right">
        <span @click="cancelSearch">取消</span>
      </div>
    </v-header>
    <div class="main">
      <div class="main-content" v-if="!isSearch">
        <div class="search-history" v-if="isHistory&&historyKeywordList.length">
          <div class="search-history-content">
            <div class="search-history-title">
              <span>历史记录</span>
              <i class="iconfont icon-delete" @click="clearHistory"></i>
            </div>
            <v-searchItem
              v-for="(item,index) in historyKeywordList"
              :key="index"
              :item="item"
              :changeKeyword="changeKeyword"
            ></v-searchItem>
          </div>
        </div>
        <div class="search-hot">
          <div class="search-hot-content">
            <div class="search-hot-title">热门搜索</div>
            <v-searchItem
              v-for="(item,index) in hotKeywordList"
              :key="index"
              :item="item.keyword"
              :changeKeyword="changeKeyword"
            ></v-searchItem>
          </div>
        </div>
      </div>
      <div class="main-content" v-if="isSearch">
        <div class="goods-wrap">
          <v-goodsItem v-for="item in goodsList.data" :key="item.id" :item="item"></v-goodsItem>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      keyword: "",
      isSearch: false,
      isHistory: true
    };
  },
  computed: {
    ...mapGetters("catelog", [
      "defaultKeyword",
      "historyKeywordList",
      "hotKeywordList",
      "goodsList"
    ])
  },
  methods: {
    ...mapActions("catelog", [
      "goodsSearchAction",
      "initSearchAction",
      "clearHistoryAction"
    ]),
    searchGoods(e) {
      this.goodsSearchAction({ keyword: this.keyword });
      this.isSearch = true;
    },
    changeKeyword(item) {
      this.keyword = item;
      this.isSearch = true;
    },
    cancelSearch() {
      this.isSearch = false;
      this.keyword = this.defaultKeyword.keyword;
      this.isHistory=true
      // this.$router.history.go(0);
      // this.initSearchAction()
    },
    async clearHistory() {
      let result = await this.clearHistoryAction();
      if (result.errno === 0) {
        setTimeout(() => {
          this.isHistory = false;
          alert("清除成功");
        }, 100);
      }
    }
  },
  created() {
    this.initSearchAction();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import url("//at.alicdn.com/t/font_1434233_kyu83air15r.css");
.search-ipt-box {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    height: 0.4rem;
    width: 0.3rem;
    background: #f5f5f9;
  }
  input {
    width: 2.3rem;
    height: 0.4rem;
    border: none;
    background: #f5f5f9;
    font-size: 16px;
  }
}
.search-history {
  width: 100%;
  background: #fff;
  margin: 0.05rem 0;
  padding: 0.1rem;
  padding-top: 0;
}
.search-history-content {
  width: 3.55rem;
  margin-left: 0.1rem;
}
.search-history-title {
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 16px;
  display: flex;
  span:first-of-type {
    flex: 8;
  }
  span:nth-of-type(2) {
    flex: 2;
  }
}
.search-hot {
  width: 100%;
  background: #fff;
  margin: 0.05rem 0;
  padding: 0.1rem;
  padding-top: 0;
}
.search-hot-content {
  width: 3.55rem;
  margin-left: 0.1rem;
}
.search-hot-title {
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 16px;
}
.goods-wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>