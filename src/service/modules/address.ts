import request from "@/utils/request"

export let requestaddressList=()=>{
   return request.get("/address/list")
}