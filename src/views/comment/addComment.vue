<template>
  <div class="container">
    <v-header>
        <div
        class="header-back"
        @click="()=>{this.$router.history.go(-1)}"
      >&lt;</div>
      <div class="header-content">填写留言</div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="comment-wrap">
        <textarea class="comment-content" maxlength="80" v-model="content"></textarea>
        <span class="num">{{content.length}}/80</span>
      </div>
      <div class="btn-box">
        <span class="btn-white"></span>
        <button @click="addTopicComment">留言</button>
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
      content: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions("topic", ["addCommentAction"]),
    async addTopicComment() {
      let result = await this.addCommentAction(this.content);
      if (result.errno === 0) {
        alert(result.data);
        setTimeout(() => {
          this.$router.history.go(-1);
        }, 500);
      }else{
        alert(result.data)
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.comment-wrap {
  width: 3.55rem;
  height: 1.7rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  position: relative;
}
.num {
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
}
.comment-content {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
}
.btn-box {
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  .btn-white {
    flex: 8;
  }
  button {
    height: 0.3rem;
    width: 1rem;
    border: none;
    background-color: #108ee9;
    color: #fff;
    font-size: 16px;
    border-radius: 0.05rem;
    margin-right: 0.1rem;
  }
}
</style>