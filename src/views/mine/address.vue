<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/mine')}">&lt;</div>
      <div class="header-content">地址管理</div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="addressList" v-show="isadd===true" ></div>
      <div class="addressInfo" v-show="isadd===false" >
         <input type="text" placeholder="姓名" >
         <input type="text" placeholder="电话号码" >
      </div>
    </div>
    <v-footer>
      <div v-show="isadd===true" class="newAddress-foot">
        <span @click="addAddress()">新建地址</span>
      </div>
      <div v-show="isadd===false" class="address-foot">
        <span>取消</span>
        <span>保存</span>
      </div>
    </v-footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      isadd: true
    };
  },
  computed: {},
  methods: {
    ...mapActions("address", ["getAddressListAction"]),
    addAddress() {

    }
  },
  created() {
    this.getAddressListAction();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.newAddress-foot {
  width: 100%;
  display: flex;
  span {
    flex: 1;
    background: #108ee9;
    color: white;
    @extend %juzhong;
  }
}
.address-foot {
  width: 100%;
  display: flex;
  span {
    flex: 1;
    @extend %juzhong;
    background: white;
    &:nth-of-type(2) {
      background: #108ee9;
      color: white;
    }
  }
}
</style>