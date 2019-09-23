import vfooter from "../footer/index.vue"
import TopicItem from "../topicItem/index.vue"
export default{
    install(Vue:any){
        Vue.component("v-footer",vfooter)
        Vue.component("TopicItem",TopicItem)
    }
}