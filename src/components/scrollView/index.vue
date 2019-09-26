<template>
  <div class="scroll-wrap" ref="scrollWrap">
      <div class="content">
           <div v-for="(item) in list.topicList&&list.topicList" :key="item.id" class="main-content-item">
          <TopicItem :item="item" :isShow=true></TopicItem>
        </div>
        <div class="upload">{{uploadTitle}}</div>
      </div>
  </div>
</template>
<script>
import { mapActions, mapGetters ,mapMutations} from "vuex";
import BScroll from "better-scroll";
export default {
  props: {
     list: {
    //   query: Object, //查询条件
      limit: Number,// 每次查询的数量 默认10
    //   count: Number, //最后一次查询结果返回的长度 用来控制loadMore的显示与否
    //   refreshDispatch: String ,//// pull-refresh //查询的store dispacthName, 当需要下拉刷新的时候才传
      loadMoreDispatch: String,// loadMore 查询的store dispacthName
      currentPage:String,//加载的页数
    //   value:  Array ,//查询结果
      topicList:Array,
      totalPages:Number
    }

  },
  components: {},
  data() {
    return {
        uploadTitle: "上拉加载",
        page:1
    };
  },
  computed: {
//...mapGetters("topic", ["topicList", "totalPages", "currentPage"])
  },
  methods: {
//...mapActions("topic", ["topicListAction"]),
//...mapMutations("topic", ["setCurrentPage",]),
  },
  created() {},
  mounted() {
      console.log(JSON.parse(JSON.stringify(this.list )))
    this.scroll = new BScroll(this.$refs.scrollWrap, {
      click: true,
      probeType: 3,
      mouseWheel: true //鼠标滚轮
    });
     this.scroll.on("scrollEnd", e => {
      if (e.y === this.scroll.maxScrollY) {
        if (this.page < this.list.totalPages) {
          this.uploadTitle = "正在加载......";
          setTimeout(() => {
            this.uploadTitle = "上拉加载";
            this.page = this.page + 1;
            let fn=this.$store._actions[this.list.loadMoreDispatch][0]
            let P=this.$store._mutations[this.list.currentPage][0]
            P(this.page);
            fn({ page: this.page,size:this.limit });
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
.scroll-wrap {
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