<template>
  <div class="container">
    <div class="main">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="login-main">
        <div class="input-wrap">
          <input type="text" v-model="mobile" placeholder="请输入用户名" />
        </div>
        <div class="input-wrap">
          <input type="password" v-model="password" placeholder="请输入密码" />
        </div>
        <div class="login-btn">
          <button @click="handleLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      mobile: "15323807318",
      password:"123456"
    };
  },
  computed: {},
  methods: {
    ...mapActions("login", ["loginAction"]),
    async handleLogin(){
        let params={
            mobile:this.mobile,
            password:this.password
        }
        let result=await this.loginAction(params)
        if(result.errno===0){
            alert("登录成功")
            this.$router.push("/home")
        }else{
            alert("登录失败")
        }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 100%;
  height: 1.2rem;
  text-align: center;
  padding: 50px 0 0 0;
  img {
    width: 1.6rem;
    height: 0.54rem;
  }
}
.login-main {
  width: 100%;
  padding: 0.9rem 0.2rem 0 0.2rem;
}
.input-wrap {
  height: 0.9rem;
  @extend %juzhong;
  border-bottom: 1px solid #ccc;
  input {
    width: 100%;
    height: 0.72rem;
    border: none;
    padding: 0.01rem 0;
    font-size: 0.2rem;
    font-family: sans-serif;
    line-height: 1.15;
  }
}
.login-btn {
  width: 100%;
  padding: 0.5rem 0 0 0;
  button {
    width: 100%;
    height: 0.47rem;
    background-color: #108ee9;
    border: none;
    @extend %juzhong;
    border-radius: 0.05rem;
    font-size: 18px;
    color: #fff;
  }
}
</style>