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
      <div class="userPower"></div>
    </div>
    <v-footer>
      
    </v-footer>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      userMsg:window.localStorage.getItem("user")
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
%juzhong{
  display: flex;
  justify-content: center;
  align-items: center;
}
.userWrap{
  width: 100%;
  height: 1.5rem;
  background: url("http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png") no-repeat;
  background-size: 100%;
  padding: .35rem .2rem;
  display: flex;
  .userLogo{
    width: .8rem;
    background: url("http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png") no-repeat;
    background-size: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .userMsg{
    height: .8rem;
    padding: 10px 0 0 10px;
    display: flex;
    flex-direction: column;
    div{
      flex:1;
      align-items: center;
      color: white;
    }
  }
}
</style>