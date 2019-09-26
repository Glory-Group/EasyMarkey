import { requestaddressList } from "@/service/index"
export default {
    namespaced: true,
    state:{
       addressList:[]
    },
    mutations: {
        setAddressList(state:any,payload:any){
            state.addressList=payload
        }
    },
    actions: {
        async getAddressListAction({commit}:any){
           let result:any= await requestaddressList()
        }
    }
}