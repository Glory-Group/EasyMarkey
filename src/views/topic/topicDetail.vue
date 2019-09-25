<template>
  <div class="container">
    <v-header :backPath="backPath">
      <div class="header-back" @click="()=>{this.$router.history.push('/topic')}">&lt;</div>
      <div class="header-content">{{this.topicDetail.title&&this.topicDetail.title}}</div>
      <div class="header-right"></div>
    </v-header>
    <div class="main">
      <div class="topicDetailImg" v-html="topicDetailContent"></div>
      <div class="comment-wrap">
        <div class="comment-head">
          <span class="comment-title">精选留言</span>
          <span class="comment-add icon-icon-test iconfont" @click="addComment">+</span>
        </div>
        <div class="comment-content">
          <div v-show="topicComment.length===0" class="wait-comment">
            <div>
              <img
                src="data:image/png;base64,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"
                alt
              />
            </div>
            <div>等你来留言</div>
          </div>
          <v-commentItem v-for="item in topicComment.slice(0,5)" :key="item.id" :item="item"></v-commentItem>
          <div v-if="topicComment.length>5" class="more-comment"> 
              <span>查看更多评论</span>
          </div>
        </div>
      </div>
      <div class="relate-topic">
        <div class="relate-topic-title">推荐专题</div>
        <TopicItem
          class="relate-topic-item"
          v-for="item in relatedTopic"
          :key="item.id"
          :item="item"
          :isShow="false"
        ></TopicItem>
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
    return {
      backPath: "/topic",
      topicCommentList: []
    };
  },
  computed: {
    ...mapGetters("topic", [
      "topicDetail",
      "topicComment",
      "relatedTopic",
      "topicId",
      "topicDetailContent"
    ])
  },
  methods: {
    ...mapActions("topic", [
      "getTopicDetail",
      "getCommentAction",
      "relatedTopicAction"
    ]),
    addComment() {
      this.$router.push(`/topicCommentWrite/${this.topicId}`);
    }
  },
  created() {
    this.getCommentAction();
    this.relatedTopicAction();
  },
  mounted() {
    let { id } = this.$route.params;
    this.getTopicDetail(id);
  }
};
</script>
<style lang="scss">
@import url("//at.alicdn.com/t/font_1434233_kyu83air15r.css");
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  background-color: #f5f5f9;
}
.topicDetailImg {
  width: 3.75rem;
  img {
    width: 3.75rem;
  }
}
.comment-wrap {
  width: 100%;
  height: auto;
  background-color: #fff;
  margin-top: 0.1rem;
  .comment-head {
    width: 3.55rem;
    margin-left: 0.1rem;
    height: 0.6rem;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
    line-height: 0.6rem;
    display: flex;
    .comment-title {
      flex: 9;
    }
    .comment-add {
      flex: 1;
      font-weight: bolder;
      font-size: 20px;
    }
  }
  .comment-content {
    width: 100%;
  }
}
.wait-comment {
  margin: 0 auto;
  height: 1.5rem;
  border-bottom: 1px solid #ccc;
  div {
    text-align: center;
  }
}
.relate-topic {
  width: 3.55rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  .relate-topic-title {
    width: 100%;
    height: 0.4rem;
    @extend %juzhong;
  }
  .relate-topic-item {
    width: 100%;
    height: 2.62rem;
    padding: 0.1rem;
    background: #fff;
    margin-bottom: 0.1rem;
    img {
      width: 100%;
      height: 2rem;
    }
    .relate-topic-subtitle {
      width: 100%;
      height: 0.5rem;
      @extend %juzhong;
    }
  }
}
.more-comment{
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
}
</style>