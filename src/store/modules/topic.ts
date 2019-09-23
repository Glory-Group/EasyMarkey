import { requestTopicList } from "@/service/index"

export default {
    namespaced: true,
    state: {
        topicList: [],
        totalPages: 0,
        currentPage: 1,
    },
    mutations: {
        initData(state: any, preload: any) {
            let { topicList, totalPages, currentPage } = preload
            state.topicList = state.topicList.concat(topicList);
            state.totalPages = totalPages;
        },
        setCurrentPage(state:any,payload:any){
            console.log(payload)
            state.currentPage=payload
        }
    },
    actions: {
        async topicListAction(context: any, params: any) {
            let { commit, state } = context
            // console.log(context,";;;;;;;;;;;")
            let result: any = await requestTopicList(params)
            console.log(result, "rrrrrrrrrrrr")
            if (result.errno === 0) {
                commit("initData",
                    {
                        topicList: result.data.data,
                        totalPages: result.data.totalPages
                    })

            }
            return result;
        }
    },
    getters: {
        topicList: (state: any) => state.topicList,
        totalPages: (state: any) => state.totalPages
    }

}