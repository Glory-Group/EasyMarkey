import request from "@/utils/request"


export let requestGoodList=(url:string,params:any)=>{
    return request.get(url,{params})
}