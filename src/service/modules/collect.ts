import request from "@/utils/request"

export let requestLikeList=(params:any)=>{
   return request.get("/collect/list",{params})
}