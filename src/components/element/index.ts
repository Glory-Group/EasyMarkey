import vfooter from "../footer/index.vue"
import TopicItem from "../topicItem/index.vue"
import ChannelItem from "../channelItem/index.vue"
import BrandItem from "../brandItem/index.vue"
import NewGoodsItem from "../newGoodsItem/index.vue"
import HotGoodsItem from "../hotGoodsItem/index.vue"
export default{
    install(Vue:any){
        Vue.component("v-footer",vfooter)
        Vue.component("TopicItem",TopicItem)
        Vue.component("v-channelItem",ChannelItem)
        Vue.component("v-brandItem",BrandItem)
        Vue.component("v-newGoodsItem",NewGoodsItem)
        Vue.component("v-hotGoodsItem",HotGoodsItem)
    }
}   