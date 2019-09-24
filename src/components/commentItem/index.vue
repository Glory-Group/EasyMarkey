<template>
  <div class="topic-comment-item">
    <div class="comment-top">
      <span class="username">匿名用户</span>
      <span class="add-time">{{item.add_time}}</span>
    </div>
    <div class="comment-bottom">{{item.content}}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.topic-comment-item {
  width: 3.55rem;
  margin-left: 0.1rem;
  height: 0.7rem;
  border-bottom: 1px solid #ccc;
}
.comment-top {
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  .username {
    flex: 6;
  }
  .add-time {
    flex: 4;
    color: #ccc;
  }
}
.comment-bottom {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 16px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>