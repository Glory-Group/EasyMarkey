<template>
    <div class="cateGoryBox">
         <div class="cateGory-item" v-for="(item) in cateGoryList" :key="item.id" >
                <div class="cateGory-title">{{item.name}}</div>
                <div class="cateGory-wrap">
                    <a class="cate-wrap-item" v-for="itn in item.goodsList" :key="itn.id" :href="'/goods/'+item.id">
                        <img v-lazy="itn.list_pic_url" >
                        <div class="cateGory-name">{{itn.name}}</div>
                        <div class="cateGory-price"> ￥ {{itn.retail_price}}</div>
                    </a>
                    <a class="cate-wrap-item"  :href="'/categorys/'+item.id">
                      <span class="cateGory-more" >更多{{item.name}}好物</span>
                      <div class="cateGory-info">
                          <img style=" width: 0.3rem; height: 0.3rem;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more">
                      </div>
                    </a>
                </div>
         </div>
    </div>
</template>
<script>
export default {
  props: {
      cateGoryList:{
          type:Array
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
%juzhong{
    display: flex;
    justify-content: center;
    align-items: center;
}
.cateGoryBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    .cateGory-item{
        width: 100%;
        display: flex;
        flex-direction: column;
        .cateGory-title{
            width: 100%;
            height:0.5rem;
            @extend %juzhong;
        }
        .cateGory-wrap{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .cate-wrap-item{
                width: 50%;
                height: 2.37rem;
                display: flex;
                flex-direction: column;
                @extend %juzhong;
                img{
                    width: 1.67rem;
                    height:1.69rem;
                }
                .cateGory-name{
                    width:1.67rem;
                    height:0.3rem;
                     @extend %juzhong;
                     font-size: 13px;
                     color: black;
                }
                .cateGory-price{
                    @extend %juzhong;
                    color: red;
                }
                .cateGory-more{
                    color: black;
                    margin-bottom:10px;
                }
                .cageGory-info{
                    @extend %juzhong;
                }

            }
        }
    }
}
</style>