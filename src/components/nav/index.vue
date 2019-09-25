<template>
  <nav :class="type==='column'?'column-nav':'abeam-nav'">
    <div class="nav-content">
      <div
        :class="currentIndex===index?'nav-item active':'nav-item'"
        v-for="(item,index) in list"
        :key="item.id"
        @click="()=>changeTab(item,index)"
      >{{item.name}}</div>
    </div>
  </nav>
</template>
<script>
import { mapMutations,mapActions } from "vuex";
export default {
  props: {
    list: {
      type: Array
    },
    type: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  methods: {
    ...mapMutations("catelog", ["setcurrentIndex"]),
    ...mapActions("catelog",["changeTabAction"]),
    changeTab(item, index) {
      this.currentIndex = index;
      this.setcurrentIndex(index);
      this.changeTabAction({id:item.id})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
//纵向导航条样式
.column-nav {
  width: 1rem;
  height: 100%;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
  .nav-item {
    height: 0.44rem;
    line-height: 0.44rem;
    border-left: 1px solid rgba(0, 0, 0, 0);
  }
  .active {
    border-color: #108ee9;
    color: #108ee9;
  }
}
//横向导航条样式
.abeam-nav {
  width: 100%;
  height: 0.32rem;
  line-height: 0.32rem;
  background-color: #fff;
  overflow: auto;
  .nav-content {
    display: flex;
    flex-wrap: nowrap;
    width: auto;
    width: 200%;
    height: 100%;
    .nav-item {
      height: 100%;
      display: flex;
      width: 20%;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0);
    }
    .active {
      border-bottom: 1px solid #108ee9;
      color: #108ee9;
    }
  }
}
</style>