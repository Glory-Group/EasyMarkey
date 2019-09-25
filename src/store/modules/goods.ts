import {requestGoodsDetail,requestGoodsDetailList} from "@/service/index"
export default {
    namespaced: true,
    state:{
        goodsDetail:[],
        goodsDetailList:[]
    },
    mutations: {

        //goods详情
        setGoodsDetail(state:any,payload:any){
            
           state.goodsDetail=payload
           console.log(payload)
        },

        //goods详情列表
        setGoodsDetailList(state:any,payload:any){
           state.goodsDetailList=payload.goodsList
        }
    },
    actions: {
        async getGoodsDetailAction({commit}:any,params:any){
            
            let result :any = await requestGoodsDetail(params)
            if(result.errno===0){
                commit('setGoodsDetail',result.data)
            }else{
                commit('setGoodsDetail',result)
            }
          
        },

        async getGoodsDetailListAction({commit}:any,params:any){
            let result:any = await requestGoodsDetailList(params)
            if(result.errno===0){
                commit('setGoodsDetailList',result.data)
            }else{
                commit('setGoodsDetailList',result)
            }
        }

    }
}