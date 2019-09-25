<template>
    <div
      :class="item.goods_brief?'hotGoods-item':'goods-item' "
      @click="()=>{jumpedDetail(item.id)}"
    >
      <img v-lazy="item.list_pic_url" />
      <div class="goods-info hotGoods-info">
        <div class="goods-name hotGoods-name">{{item.name}}</div>
        <div class="hotGoods-info-item" v-show="item.goods_brief">{{item.goods_brief}}</div>
        <div class="goods-price hotGoods-price">￥ {{item.retail_price}}</div>
      </div>
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
  methods: {
    jumpedDetail(id) {
      if (this.$router.history.current.path.includes("/goods")&&this.$router.history.current.path!=="/goodsSearch") {
        this.$router.push("/goods/" + id);
        this.$router.go(0);
      } else {
        this.$router.push("/goods/" + id);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}

  .goods-item {
  width:49%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  background: white;
  margin: 0 1px 1px 1px;

  img {
    width: 100%;
    height: 1.4rem;
  }
  .goods-info {
    width: 100%;
    display: flex;
    flex-direction: column;

    .goods-name {
      flex: 1;
      color: black;
      @extend %juzhong;
    }
    .goods-price {
      flex: 1;
      @extend %juzhong;
      color: #8b0000;
    }
  }
}



.hotGoods-item {
  display: flex;
  height: 1.5rem;
  padding: 5px 0;
  border-top: 1px solid #ccc;

  img {
    width: 1.4rem;
    height: 1.4rem;
  }
  .hotGoods-info {
    flex: 1;
    padding: 25px 0;
    display: flex;
    flex-direction: column;

    .hotGoods-name {
      font-size: 16px;
      color: black;
      height: 0.3rem;
    }
    .hotGoods-info-item {
      font-size: 14px;
      height: 0.3rem;
      color: #a9a9a9;
    }
    .hotGoods-price {
      font-size: 15px;
      height: 0.3rem;
      color: #8b0000;
    }
  }
}
</style>