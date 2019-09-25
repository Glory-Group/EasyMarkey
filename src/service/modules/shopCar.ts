import request from "@/utils/request"

export let requestCartGoodsCount=()=>{
    return request.get("/cart/goodscount")
}

export let requestaddCart=(params:any)=>{
    return request.post("/cart/add",params)
}

export let requestCarList=()=>{
    return request.get("/cart/index")
}