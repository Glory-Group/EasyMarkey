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

export let requestCheckItem=(params:any)=>{
   return request.post("/cart/checked",params)
}

export let requestDeleteItem=(params:any)=>{
    return request.post("/cart/delete",params)
}

export let requestUpdateList=(params:any)=>{
    return request.post("/cart/update",params)
}