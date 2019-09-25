import request from "@/utils/request"
//初始化catelog页面
export let requestInitCatelog=()=>{
    return request.get("/catalog/index")
}
//catelog页的tab切换
export let requestChangeTab=(params:any)=>{
    return request.get("/catalog/current",{params})
}
//goodsSearch页面 模糊搜索
export let requestGoodsSearch=(params:any)=>{
    return request.get("/search/helper",{params})
}
//goodsSearch 页面 查询初始数据
export let requestInitSearch=()=>{
    return request.get("/search/index")
}