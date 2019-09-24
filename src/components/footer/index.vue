<template>
  <div>
    <footer class="footer">
      <slot>
         <router-link class="foot-item" active-class="active" v-for="(item,index) in tabList" :key="index" :to="item.url"  >
          <span :class="pathname===item.url? 'itemIcon activeIcon' :'itemIcon'" >
              <i :class=" item.icon" ></i>
          </span>
          <span class="itemName" >{{item.name}}</span>
        </router-link>
      </slot>
       
    </footer>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      tabList: [
        {
          icon: "iconfont icon-shouye-yuanshijituantubiao",
          name: "首页",
          url: "/home"
        },
        { icon: "iconfont icon-fuzhi", name: "专题", url: "/topic" },
        { icon: "iconfont icon-leimupinleifenleileibie", name: "分类", url: "/catelog" },
        { icon: "iconfont icon-weibiaoti--", name: "购物车", url: "/cart" },
        { icon: "iconfont icon-wode", name: "我的", url: "/mine" }
      ],
      pathname:this.$route.path
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    
  }
};
</script>
<style scoped lang="scss">
@import url("//at.alicdn.com/t/font_1431758_oriotd1fx9h.css");
.footer{
  display: flex;
}
.foot-item{
  flex:1;
  display: flex;
  flex-direction: column;
   color: black;
}
.active{
    color: #2196f3;
    font-weight: bolder;
}
.itemIcon{
    flex:1;
    text-align: center;
    font-size: 0.44rem;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
      width: 0.14rem;
      height: 0.14rem;
      display: flex;
     
    }
}
.itemName{
    flex:1;
    text-align: center;
    font-size: 0.14rem;
    transition: all .5s;

}
.activeIcon{
    animation: bounceTo 0.5s;
}
@keyframes bounceTo {
    from, 20%, 40%, 60%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    to {
        transform: scale(1);
    }
}
</style>