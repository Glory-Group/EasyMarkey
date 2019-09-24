<template>
  <div class="container">
    <div class="main" ref="main">
      <div class="main-content">
        <div v-for="(item) in topicList" :key="item.id" class="main-content-item">
          <TopicItem :item="item"></TopicItem>
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
    };
  },
  computed: {
    ...mapGetters("topic", ["topicList", "totalPages", "currentPage"])
  },
  methods: {
    ...mapActions("topic", ["topicListAction"]),
    ...mapMutations("topic", ["setCurrentPage",])
  },
  created() {
    //获取列表数据
    !this.topicList.length&&this.topicListAction({ page: this.page });
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.main, {
      click: true,
      probeType: 3
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