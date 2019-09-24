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
          />
        </div>
      </div>
      <div class="header-right">
        <span>取消</span>
      </div>
    </v-header>
    <div class="main">
      <div class="main-content">
        <div class="search-history">
          <span v-for="(item,index) in historyKeywordList" :key="index" class="search-item">{{item}}</span>
        </div>
        <div class="search-hot">
          <span v-for="(item,index) in hotKeywordList" :key="index" class="search-item">{{item.keyword}}</span>
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
      // defaultKeyword:this.searchData.defaultKeyword,
      // historyKeywordList,
      // hotKeywordList
    };
  },
  computed: {
    ...mapGetters("catelog", [
      "defaultKeyword",
      "historyKeywordList",
      "hotKeywordList"
    ])
  },
  methods: {
    ...mapActions("catelog", ["goodsSearchAction", "initSearchAction"]),
    searchGoods(e) {
      this.goodsSearchAction({ keyword: e.target.value });
    }
  },
  created() {
    this.initSearchAction();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
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
.search-item{
  display: inline-block;
  padding: .08rem .12rem;
  border: 1px solid #ccc;
  border-radius: .4rem;
  margin: .03rem;
}
</style>