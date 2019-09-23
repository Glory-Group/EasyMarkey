import request from "@/utils/request"

export let loginRequest=(params:any)=>{
    return request.post("/auth/loginByMobile",params)
}