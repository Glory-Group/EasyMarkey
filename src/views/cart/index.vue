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
          <div class="left" v-show="item.checked===0">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
              @click="()=>checkList(item.checked,item.product_id)"
            />
          </div>
          <div class="left" v-show="item.checked===1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
              @click="()=>checkList(item.checked,item.product_id)"
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
            <span v-show="bianji===false">x{{item.number}}</span>
            <div v-show="bianji===true" class="num-list">
              <span class="num" @click="()=>changeNum(item,false)">-</span>
              <span class="num">{{item.number}}</span>
              <span class="num" @click="()=>changeNum(item,true)">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="payFor">
        <div
          class="left"
          v-show="allCheckMsg.checkedGoodsCount!=allCheckMsg.goodsCount||allCheckMsg.checkedGoodsCount===0"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
            @click="checkAll()"
          />
        </div>
        <div
          class="left"
          v-show="allCheckMsg.checkedGoodsCount===allCheckMsg.goodsCount&&allCheckMsg.checkedGoodsCount!=0"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
            @click="checkAll()"
          />
        </div>
        <div class="mid">
          <span>已选({{bianji?checkNum:allCheckMsg.checkedGoodsCount}})</span>
          <span v-show="bianji===false">￥{{allCheckMsg.checkedGoodsAmount}}</span>
        </div>
        <div class="allDo" @click="changeWord()">
          <span v-text="bianji?'完成':'编辑'"></span>
        </div>
        <div class="pay">
          <span v-show="bianji===false" @click="()=>payFor()">下单</span>
          <span v-show="bianji===true" @click="deleteList()">删除所选</span>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import goods from "../../store/modules/goods";
export default {
  props: {},
  components: {},
  data() {
    return {
      bianji: false,
      checkNum: "",
      checkAllList:false
    };
  },
  computed: {
    ...mapState("shopCar", ["shopCarList", "allCheckMsg"])
  },
  methods: {
    ...mapActions("shopCar", [
      "getShopCarListAction",
      "getCheckResultAction",
      "getDeleteMsgAction",
      "getUpdateMsgAction"
    ]),
    //单选
    async checkList(checked, productId) {
      if (checked === 1) {
        this.result = await this.getCheckResultAction({
          isChecked: 0,
          productIds: productId
        });
        this.checkAllList=false
      } else if (checked === 0) {
        this.result = await this.getCheckResultAction({
          isChecked: 1,
          productIds: productId
        });
      }
      if (this.result.errno === 0) {
  
        this.data = this.result.data.cartList.filter(
          item => item.checked === 1
        );
        this.checkNum = this.data.length;
      }
    },
    //全选
   checkAll() {
      this.shopCarList.forEach(async item=>{
         if (this.checkAllList) {
          this.result = await this.getCheckResultAction({
            isChecked: 0,
            productIds: item.product_id
          });
          this.checkAllList=false
        } else  {
          this.result = await this.getCheckResultAction({
            isChecked: 1,
            productIds: item.product_id
          });
          this.checkAllList=true
        }
           if (this.result.errno === 0) {
          this.data = this.result.data.cartList.filter(
            item => item.checked === 1
          );
          this.checkNum = this.data.length;
          this.getShopCarListAction();
        }
      
      })
    },
    //删除所选
    async deleteList() {
      let str = "";
      this.shopCarList.forEach(item => {
        if (item.checked === 1) {
          str += item.product_id + ",";
        }
      });
      str = str.slice(0, -1);
      let result = await this.getDeleteMsgAction({ productIds: str });
      if (result.errno === 0) {
        this.getShopCarListAction();
      }
    },
    //加加减减
    async changeNum(item, flag) {
      let { goods_id, id, number, product_id } = item;
      if (flag) {
        number = number + 1;
      } else {
        if (number > 0) {
          number = number - 1;
        }
      }
      let result = await this.getUpdateMsgAction({
        goodsId: goods_id,
        id,
        number,
        productId: product_id
      });
      if (result.errno === 0) {
        this.getShopCarListAction();
      }
    },
    //下单
    payFor() {
      alert("下单功能正在完善");
    },
    //修改文字
    changeWord() {
      this.bianji = !this.bianji;
      this.shopCartNum();
    },
    //已选
    shopCartNum() {
      this.data = this.shopCarList.filter(item => item.checked === 1);
      this.checkNum = this.data.length;
      console.log(this.data);
    }
  },
  created() {
    this.getShopCarListAction();
  },
  mounted() {},
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
      .num-list {
        width: 100%;
        display: flex;
        padding: 10px;
        span {
          width: 0.3rem;
          height: 0.3rem;
          border: 1px solid #ccc;
          @extend %juzhong;
          &:nth-of-type(2) {
            padding: 0 10px;
          }
        }
      }
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
.payFor {
  width: 100%;
  height: 0.55rem;
  display: flex;
  background: white;
  position: fixed;
  bottom: 0.45rem;
  .left {
    flex: 1;
    @extend %juzhong;
    img {
      width: 0.19rem;
      height: 0.19rem;
    }
  }
  .mid {
    flex: 3;
    @extend %juzhong;
  }
  .allDo {
    flex: 3;
    @extend %juzhong;
  }
  .pay {
    flex: 3;
    color: white;
    @extend %juzhong;
    background: #ab2b2b;
  }
}
</style>