<template>
  <div class="channelBox">
    <div class="channel-item" v-for="(item,index) in channel" :key="item.id" @click="()=>jumpCategory(item,index)">
      <span>
        <img v-lazy="item.icon_url" :alt="item.name" />
      </span>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import {mapMutations,mapActions} from "vuex"
export default {
  props: {
    channel: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("catelog",["initCatelogAction","changeTabAction"]),
    jumpCategory(item){
      this.initCatelogAction()
       this.changeTabAction({id:item.id})
      this.$router.push(`/categorys/${item.id}`)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
</style>