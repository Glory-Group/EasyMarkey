import request from "@/utils/request"
export let requestHomeList = () => {
    return request.get("/")
}