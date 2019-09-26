import { requestLikeList } from "@/service/index"

export default {
    namespaced: true,
    state:{
       likeGoodsList:[]
    },
    mutations: {
        setLikeGoodsList(state:any,payload:any){
            state.likeGoodsList=payload
        }
    },
    actions: {
       async getLikeListAction({commit}:any,params:any){
              let result:any = await requestLikeList(params)
             if(result.errno===0){
                 commit('setLikeGoodsList',result.data)
             }
        }
    }
}