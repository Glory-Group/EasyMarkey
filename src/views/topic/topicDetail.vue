<template>
  <div class="container">
    <v-header>{{this.topicDetail.title&&this.topicDetail.title}}</v-header>
    <div class="main">
      <div class="topicDetailImg">
        <img src="//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg" />
        <img src="//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg" />
        <img src="//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg" />
        <img src="//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg" />
        <img src="//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg" />
        <img src="//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg" />
        <img src="//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg" />
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("topic", ["topicDetail"])
    //...mapState("topic", ["topicDetail", "topicList"])
  },
  methods: {
    ...mapActions("topic", ["getTopicDetail"])
  },
  created() {},
  mounted() {
    let { id } = this.$route.params;
    this.getTopicDetail(id);
    // console.log(JSON.parse(JSON.stringify(this.topicDetail)))
    console.log(this.topicDetail);
  }
};
</script>
<style scoped lang="scss">
.topicDetailImg{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>