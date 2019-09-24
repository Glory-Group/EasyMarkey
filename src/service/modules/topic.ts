import request from "@/utils/request"

export let requestTopicList=(params:any)=>{
    return request.get("/topic/list",{params})
}
export let requestTopicDetail=(params:any)=>{
    return request.get("/topic/detail",{params})
}
export let requestRelatedTopic=(params:any)=>{
    return request.get("/topic/related",{params})
}
//添加留言 typeId:1 专题页 0：商品
export let postComment=(params:any)=>{
    return request.post("/comment/post",params)
}