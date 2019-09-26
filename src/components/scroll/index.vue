<template>
  <div class="scroll-wrap" ref="scrollWrap">
    <div class="scroll-content">
      <slot></slot>
      <!-- <div class="upload">{{uploadTitle}}</div> -->
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
      uploadTitle: "上拉加载",
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.scrollWrap, {
      click: true,
      probeType: 3,
      mouseWheel: true //鼠标滚轮
    });
    this.scroll.on("scrollEnd", e => {
      if (e.y === this.scroll.maxScrollY) {
        //this.changeCurrent();
        this.loadMoreDispatch()
        console.log(this.current, this.totalPage, "scrolll");

      }
    });
  }
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
