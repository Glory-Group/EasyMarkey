import request from "@/utils/request"

export let requestInitCatelog=()=>{
    return request.get("/catalog/index")
}
export let requestChangeTab=(params:any)=>{
    return request.get("/catalog/current",{params})
}