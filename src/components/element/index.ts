import vfooter from "../footer/index.vue"
import TopicItem from "../topicItem/index.vue"
import vheader from "../header/index.vue"
export default{
    install(Vue:any){
        Vue.component("v-footer",vfooter)
        Vue.component("TopicItem",TopicItem)
        Vue.component("v-header",vheader)
    }
}