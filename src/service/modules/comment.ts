import request from "@/utils/request"
export let requestCommentList=(params:any)=>{
    return request.get("/comment/list",{
        params
    })
}