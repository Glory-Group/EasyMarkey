<template>
  <div class="container">
    <div class="main">
      <div class="userWrap">
        <div class="userLogo"></div>
        <div class="userMsg">
          <div>{{userMsg}}</div>
          <div>普通用户</div>
        </div>
      </div>
      <div class="userPower">
        <div
          class="power-item"
          v-for="(item,index) in userPowerList"
          :key="index"
          :style="{color:item.color}"
          @click="jumpedCollect(item)"
        >
          <span>
            <i :class="item.icon" style="width:.3rem;height:.3rem"></i>
          </span>

          <span>{{item.title}}</span>
        </div>
      </div>
      <div class="login-out">
        <span>退出登录</span>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      userMsg: window.localStorage.getItem("user"),
      userPowerList: [
        {
          icon: "iconfont icon-tianjiawendang ",
          title: "我的收藏",
          color: "#2196f3"
        },
        { icon: "iconfont icon-dizhi", title: "地址管理", color: "#2196f3" },
        { icon: "iconfont icon-dingdan", title: "我的订单" },
        { icon: "iconfont icon-zhoumo", title: "周么拼单" },
        { icon: "iconfont icon-wode-youhuiquan ", title: "优惠券" },
        { icon: "iconfont icon-youxuan ", title: "优选购" },
        { icon: "iconfont icon-icon-test", title: "我的红包" },
        { icon: "iconfont icon-vip", title: "会员plus" },
        { icon: "iconfont  icon-desadanshi", title: "邀请返利" },
        { icon: "iconfont icon-yijian ", title: "意见反馈" },
        { icon: "iconfont  icon-kefu", title: "客服咨询" },
        { icon: "iconfont icon-anquan", title: "账户安全" }
      ]
    };
  },
  computed: {},
  methods: {
    jumpedCollect(item){
      if(item.title==='我的收藏'){
        this.$router.push("/collect")
      }else if(item.title==='地址管理'){
        this.$router.push("/address")
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import url("//at.alicdn.com/t/font_1431758_35mrdihe5ls.css");
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.userWrap {
  width: 100%;
  height: 1.5rem;
  background: url("http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png")
    no-repeat;
  background-size: 100%;
  padding: 0.35rem 0.2rem;
  display: flex;
  .userLogo {
    width: 0.8rem;
    background: url("http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png")
      no-repeat;
    background-size: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .userMsg {
    height: 0.8rem;
    padding: 10px 0 0 10px;
    display: flex;
    flex-direction: column;
    div {
      flex: 1;
      align-items: center;
      color: white;
    }
  }
}
.userPower {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .power-item {
    width: 32.5%;
    height: 1.25rem;
    background: white;
    margin: 1px;

    flex-direction: column;
    @extend %juzhong;
    span {
      height: 0.6rem;
      &:nth-of-type(1) {
        @extend %juzhong;
      }
      i {
        font-size: 0.3rem;
      }
    }
  }
}
.login-out {
  width: 100%;
  height: 0.5rem;
  margin: 10px 0;
  background: white;
  @extend %juzhong;
}
</style>