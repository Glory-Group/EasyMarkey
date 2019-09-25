<template>
  <div class="container">
    <div class="main">
      <div class="serviceList">
        <li>
          <span>⭐</span>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span>⭐</span>
          <span>40小时快速退款</span>
        </li>
        <li>
          <span>⭐</span>
          <span>满88元免邮费</span>
        </li>
      </div>
      <div class="shopList">
        <div class="shop-item" v-for="item in shopCarList " :key="item.id">
          <div class="left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
              alt
            />
          </div>
          <div class="mid">
            <img :src="item.list_pic_url" alt />
          </div>
          <div class="msg">
            <span v-text="bianji?'已选择':item.goods_name"></span>
            <span>￥ {{item.retail_price}}</span>
          </div>
          <div class="right">
            <span v-show="bianji">x{{item.number}}</span>
            <div class="num-list">
              <span class="num">-</span>
              <span class="num">{{item.number}}</span>
              <span class="num">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="payFor">
        <div class="left">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
          />
        </div>
        <div class="mid">
          <span>已选()</span>
          <span v-show="bianji">￥0</span>
        </div>
        <div class="allDo" @click="()=>this.bianji=true">编辑</div>
        <div class="pay">
          <span v-text="bianji?'删除':'下单'"></span>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      bianji: false
    };
  },
  computed: {
    ...mapState("shopCar", ["shopCarList"])
  },
  methods: {
    ...mapActions("shopCar", ["getShopCarListAction"])
  },
  created() {
    this.getShopCarListAction();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.serviceList {
  width: 100%;
  height: 0.4rem;
  display: flex;
  background: #f4f4f4;
  li {
    flex: 1;
    list-style: none;
    display: flex;
    @extend %juzhong;
    span {
      &:nth-of-type(1) {
        flex: 2;
        @extend %juzhong;
        font-size: 12px;
      }
      &:nth-of-type(2) {
        flex: 8;
        @extend %juzhong;
        font-size: 12px;
        color: #666666;
      }
    }
  }
}
.shopList {
  width: 100%;
  display: flex;
  flex-direction: column;
  .shop-item {
    display: flex;
    height: 1.1rem;
    padding: 0.1rem;
    padding-left: 0;
    background: white;
    margin-top: 1px;
    .left {
      flex: 1;
      @extend %juzhong;
      img {
        width: 0.19rem;
        height: 0.19rem;
      }
    }
    .right {
      flex: 3;
      display: flex;
      justify-content: flex-end;
    }
    .mid {
      flex: 2;
      @extend %juzhong;
      img {
        width: 0.9rem;
        height: 0.9rem;
      }
    }
    .msg {
      flex: 4;
      display: flex;
      flex-direction: column;
      span {
        flex: 1;
        display: flex;
        align-items: flex-end;
        &:nth-of-type(2) {
          color: red;
        }
      }
    }
  }
}
</style>