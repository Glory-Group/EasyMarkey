<template>
  <div class="scrollWrap" ref="scrollWrap">
    <div class="content">
      <slot :data="list.value"></slot>
      <div class="refresh">{{refreshTitle}}</div>
      <div class="upload">{{uploadTitle}}</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  props: {
    list: {
      type: Object,
      default: {
        query: {},
        limit: "",
        count: "",
        value: [],
        refreshDispatch: "",
        loadMoreDispatch: ""
      }
    }
  },
  components: {},
  data() {
    return {
      uploadTitle: "上拉加载",
      refreshTitle: "下拉刷新"
    };
  },
  methods: {
    async refresh(url, page) {
      await this.$store.dispatch(this.list.refreshDispatch, { url, page });
    },
    async loadMore(url, page) {
      await this.$store.dispatch(this.list.loadMoreDispatch, { url, page });
    }
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.scrollWrap, {
        pullDownRefresh: {
          threshold: 90,
          stop: 40
        },
        pullUpLoad: {
          threshold: -90,
          stop: -40
        },
        click: true,
        probeType: 3,
        mouseWheel: true //鼠标滚轮
      });

      this.scroll.on("pullingUp", async () => {
        if ((this.scroll.y = -40)) {
          this.uploadTitle = "正在加载";
          if (this.list.query.page < this.list.query.totalPages) {
            await this.loadMore("/topic/list", this.list.query.page + 1);
            this.scroll.finishPullUp();
            this.uploadTitle = "上拉加载";
          } else {
            this.uploadTitle = "没有数据了····";
          }
        }
      });

      this.scroll.on("pullingDown", async () => {
        if ((this.scroll.y = 40)) {
          this.refreshTitle = "正在刷新";
          if (this.list.query.page < this.list.query.totalPages) {
            await this.refresh("/topic/list", this.list.query.page + 1);
            this.scroll.finishPullDown();
            this.refreshTitle = "上拉刷新";
          }else{
            this.refreshTitle="没有数据了····"
          }
        }
      });
    } else {
      this.scroll.refresh();
    }
  }
};
</script>
<style scoped lang="scss">
.scrollWrap {
  overflow: hidden;
}
.content {
  width: 100%;
  height: auto;
  position: relative;
}

.refresh {
  width: 100%;
  height: 0.44rem;
  background-color: cornflowerblue;
  line-height: 0.44rem;
  text-align: center;
  position: absolute;
  top: -0.44rem;
}
.upload {
  height: 0.44rem;
  background-color: cornflowerblue;
  line-height: 0.44rem;
  text-align: center;
}
</style>