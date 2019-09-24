import vfooter from "../footer/index.vue"
import TopicItem from "../topicItem/index.vue"
import ChannelItem from "../channelItem/index.vue"
import BrandItem from "../brandItem/index.vue"
import NewGoodsItem from "../newGoodsItem/index.vue"
import HotGoodsItem from "../hotGoodsItem/index.vue"
import vheader from "../header/index.vue"
import CateGory from "../cateGory/index.vue"
import commentITem from "../commentItem/index.vue"
import nav from "../nav/index.vue"
import categoryItem from "../categoryItem/index.vue"
export default{
    install(Vue:any){
        Vue.component("v-footer",vfooter)
        Vue.component("TopicItem",TopicItem)
        Vue.component("v-channelItem",ChannelItem)
        Vue.component("v-brandItem",BrandItem)
        Vue.component("v-newGoodsItem",NewGoodsItem)
        Vue.component("v-hotGoodsItem",HotGoodsItem)
        Vue.component("v-header",vheader)
        Vue.component("v-cateGory",CateGory)
        Vue.component("v-commentItem",commentITem)
        Vue.component("v-nav",nav)
        Vue.component("v-categoryItem",categoryItem)
    }
}   