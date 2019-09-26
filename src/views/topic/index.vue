<template>
  <div class="container">
    <div class="main" ref="main">
      <div class="main-content">
        <div v-for="(item) in topicList" :key="item.id" class="main-content-item">
          <TopicItem :item="item" :isShow=true></TopicItem>
        </div>
        <div class="upload">{{uploadTitle}}</div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  props: {},
  components: {},
  data() {
    return {
      page: 1,
      uploadTitle: "上拉加载",
      mouseWheel:true,
      list:{}
    };
  },
  computed: {
    ...mapGetters("topic", ["topicList", "totalPages", "currentPage"])
  },
  methods: {
    ...mapActions("topic", ["topicListAction"]),
    ...mapMutations("topic", ["setCurrentPage",]),
    // initList(val){
    //   //  query: Object, //查询条件
    //   // limit: Number,// 每次查询的数量 默认10
    //   // count: Number, //最后一次查询结果返回的长度 用来控制loadMore的显示与否
    //   // refreshDispatch: String ,//// pull-refresh //查询的store dispacthName, 当需要下拉刷新的时候才传
    //   // loadMoreDispatch: String,// loadMore 查询的store dispacthName
    //   // value:  Array //查询结果
    //  // return this.topicList
    //   this.list={limit:10,loadMoreDispatch:"topic/topicListAction",currentPage:"topic/setCurrentPage",topicList:val?val:this.topicList,totalPages:this.totalPages}
    // }
  },
  created() {
    //获取列表数据
    !this.topicList.length&&this.topicListAction({ page: this.page });

  },
  mounted() {
    this.scroll = new BScroll(this.$refs.main, {
      click: true,
      probeType: 3,
      mouseWheel:true,//鼠标滚轮
    });
    this.scroll.on("scrollEnd", e => {
      if (e.y === this.scroll.maxScrollY) {
        if (this.page < this.totalPages) {
          this.uploadTitle = "正在加载......";
          setTimeout(() => {
            this.uploadTitle = "上拉加载";
            this.page = this.page + 1;
            this.setCurrentPage(this.page);
            this.topicListAction({ page: this.page });
          }, 1000);
        } else {
          this.uploadTitle = "没有数据了。。。";
        }
      }
    });
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