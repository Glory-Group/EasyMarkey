<template>
  <div class="scroll-wrap" ref="scrollWrap">
    <div class="scroll-content">
      <slot></slot>
      <div class="upload">{{uploadTitle}}</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: [
    "limit",
    "count",
    "refreshDispatch",
    "loadMoreDispatch",
    "value",
    "totalPage",
    "current",
    "changeCurrent",
    "id"
  ],
  components: {},
  data() {
    return {
      uploadTitle: "上拉加载"
    };
  },
  computed: {},
  methods: {},
  created() {
    this.uploadTitle = "上拉加载";
  },
  mounted() {
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
    this.scroll.on("pullingUp", () => {
      if (this.current < this.totalPage) {
        this.uploadTitle = "正在加载......";
        setTimeout(() => {
          this.uploadTitle = "上拉加载";
          this.loadMoreDispatch();
          this.scroll.refresh();
          this.scroll.finishPullUp();
        }, 1000);
      }else{
         this.uploadTitle = "没有数据了";
      }
    });

    // myScroll.on('pullingDown', function () {

    //   setTimeout(function () {
    //     myScroll.refresh()
    //     myScroll.finishPullDown()
    //   }, 3000)

    // })
  },
  updated() {}
};
</script>
<style scoped lang="scss">
.scroll-wrap {
  height: 100%;
  overflow: hidden;
  .scroll-content {
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
}
.upload {
  width: 100%;
  height: 0.44rem;
  background-color: cornflowerblue;
  line-height: 0.44rem;
  text-align: center;
}
//   {
//     //每次查询的数量 默认10
//     limit: {
//       type: Number
//     },
//     //最后一次查询结果返回的长度 用来控制loadMore的显示与否
//     count: {
//       type: Number
//     },
//     //pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
//     refreshDispatch: {
//       type: any
//     },
//     //查询的store dispacthName
//     loadMoreDispatch: {
//       type: any
//     },
//     //查询结果
//     value: {
//       type: any
//     }
//   },
</style>
