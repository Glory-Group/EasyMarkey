import request from "@/utils/request"

export let requestTopicList=(params:any)=>{
    return request.get("/topic/list",{params})
}