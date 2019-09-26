import request from "@/utils/request"

export let requestGoodsDetail=(params:any)=>{
    return request.get("/goods/detail",{params})
}

export let requestGoodsDetailList=(params:any)=>{
    return request.get("/goods/related",{params})
}
export let requestGoodsList=(params:any)=>{
    return request.get("/goods/list",{params})
}
