import {requestCartGoodsCount,requestaddCart,requestCarList} from "@/service/index"
export default {
    namespaced: true,
    state:{
      carCount:'',
      shopCarList:[]
    },
    mutations: {
        setCarCount(state:any,payload:any){
            state.carCount=payload.cartTotal.goodsCount
        },
        setShopList(state:any,payload:any){
            state.shopCarList=payload.cartList
        }
    },
    actions: {
        async  getCarCountAction({commit}:any){
             let result:any= await requestCartGoodsCount()
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
            console.log(result.data)
            if(result.errno===0){
                commit('setShopList',result.data)
            }else{
               commit('setShopList',result)
            }
        }
    }
}