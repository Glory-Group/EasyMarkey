import { loginRequest } from "@/service/index"
 import {setToken} from "@/utils/saveToken"
export default {
    namespaced: true,
    state: {

    },
    mutations: {},
    actions: {
        async loginAction(context:any,params:any){
            
            let result:any = await loginRequest(params)
             if(result.errno===0){
                setToken(result.data.sessionKey)
                window.localStorage.setItem("user",result.data.mobile)
                window.localStorage.setItem("token",result.data.sessionKey)
             }
            return result;
        }
    },

}