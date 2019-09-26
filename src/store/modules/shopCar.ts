import {requestaddCart,requestCarList,requestCheckItem,requestDeleteItem,requestUpdateList} from "@/service/index"
export default {
    namespaced: true,
    state:{
      carCount:'',
      shopCarList:[],
      allCheckMsg:[]
    },
    mutations: {
        setCarCount(state:any,payload:any){
            state.carCount=payload.cartList.length
        },
        setShopList(state:any,payload:any){
            state.shopCarList=payload.cartList
            state.allCheckMsg=payload.cartTotal
        }
    },
    actions: {
        async  getCarCountAction({commit}:any){
             let result:any= await requestCarList()
             if(result.errno===0){
                 commit('setCarCount',result.data)
             }else{
                commit('setCarCount',result)
             }
        },
        async getaddCarAction({commit}:any,params:any){
            let result:any= await requestaddCart(params)
            if(result.errno===0){
                return result
            }else{
              return result
            }
        },
        async getShopCarListAction({commit}:any){
            let result:any=await requestCarList()
            if(result.errno===0){
                commit('setShopList',result.data)
            }else{
               commit('setShopList',result)
            }
        },
        async getCheckResultAction({commit}:any,params:any){
            let result:any= await requestCheckItem(params)
            commit('setShopList',result.data)
            return result
        },
        async getDeleteMsgAction({commit}:any,params:any){
            let result:any= await requestDeleteItem(params)
            return result
        },

        async getUpdateMsgAction({commit}:any,params:any){
            let result:any=await requestUpdateList(params)
            return result
        }
    }
}