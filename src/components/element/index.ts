import vfooter from "../footer/index.vue"
import TopicItem from "../topicItem/index.vue"
import ChannelItem from "../channelItem/index.vue"
import BrandItem from "../brandItem/index.vue"
import GoodsItem from "../goodsItem/index.vue"
import vheader from "../header/index.vue"
import commentITem from "../commentItem/index.vue"
import Swiper from "../swiper/index.vue"
import nav from "../nav/index.vue"
import categoryItem from "../categoryItem/index.vue"
import searchItem from "../searchItem/index.vue"
import scroll from "../scrollView/index.vue"
export default{
    install(Vue:any){
        Vue.component("v-footer",vfooter)
        Vue.component("TopicItem",TopicItem)
        Vue.component("v-channelItem",ChannelItem)
        Vue.component("v-brandItem",BrandItem)
        Vue.component("v-goodsItem",GoodsItem)
        Vue.component("v-header",vheader)
        Vue.component("v-commentItem",commentITem)
        Vue.component("v-swiper",Swiper)
        Vue.component("v-nav",nav)
        Vue.component("v-categoryItem",categoryItem)
        Vue.component("v-searchItem",searchItem)
        Vue.component("v-scroll",scroll)
    }
}   