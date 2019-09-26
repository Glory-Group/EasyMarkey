<template>
  <div class="container">
    <v-header>
      <div class="header-back" @click="()=>{this.$router.history.push('/home')}">&lt;</div>
      <div class="header-content">easyLikeGoods</div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="likeList-wrap">
         <v-goodsItem
                v-for="(int) in likeGoodsList"
                :key="int.id"
                :item="int"
                style="background:#fff"
          ></v-goodsItem>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('collect',['likeGoodsList'])
  },
  methods: {
    ...mapActions('collect',['getLikeListAction'])
  },
  created() {
    this.getLikeListAction({typeId:1})
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>