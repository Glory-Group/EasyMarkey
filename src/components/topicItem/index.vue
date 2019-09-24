<template>
  <dl class="topic-item" @click="()=>jumpDetail(item.id)">
    <dt class="topic-item-img">
      <img :src="item.scene_pic_url" alt />
    </dt>
    <dd class="topic-item-content">
      <p>{{item.title}}</p>
      <p class="subtitle">{{item.subtitle}}</p>
      <p class="price_info">{{item.price_info}}元起</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      
    }
  },
  components: {},
  data() {
    return {
      id:0,
    };
  },
  computed: {},
  methods: {
    jumpDetail(id){
      this.$router.push("/topicDetail/"+id)
    }
  },
  created() {},
  mounted() {

  }
};
</script>
<style scoped lang="scss">
.topic-item {
  width: 100%;
  height: 2.9rem;
  .topic-item-img {
    width: 100%;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.topic-item-content {
  text-align: center;
  p {
    width: 100%;
    padding: 0.05rem 0.05rem 0.05rem 0.05rem;
  }
  .subtitle {
    width: 90%;
    margin-left: 5%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #ccc;
  }
  .price_info {
    color: red;
  }
}
</style>