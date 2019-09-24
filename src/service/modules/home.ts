import request from "@/utils/request"

export let requestHomeList = () => {
    return request.get("/")
}

export let requestBrandDetail=(params:any)=>{
   return request.get("/brand/detail",{params})
}

export let requestBrandDetailList=(params:any)=>{
    return request.get("/goods/list",{params})
}