<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/home')}">&lt;</div>
      <div class="header-content">{{brandDetail.name}}</div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="content">
        <div class="brand-top">
          <img :src="brandDetail.list_pic_url" />
          <div class="brand-desc">
            <span>{{brandDetail.simple_desc}}</span>
          </div>
        </div>
        <div class="newGoodsBox">
          <v-goodsItem v-for="item in brandDetailList" :key="item.id" :item="item"></v-goodsItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState("home", ["brandDetail", "brandDetailList"])
  },
  methods: {
    ...mapActions("home", ["brandDetailAction", "brandDetailListAction"])
  },
  created() {
    this.brandDetailAction({ id: this.id });
    this.brandDetailListAction({ brandId: this.id });
  },
  mounted() {
    
  }
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.brand-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 2.1rem;
  }
  .brand-desc {
    width: 100%;
    height: 1rem;
    padding: 20px;
    color: #808080;
    font-size: 14px;
  }
}
</style>