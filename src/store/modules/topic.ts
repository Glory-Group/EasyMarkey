import { requestTopicList,requestTopicDetail } from "@/service/index"

export default {
    namespaced: true,
    state: {
        topicList: [],
        totalPages: 0,
        currentPage: 1,
        topicDetail:{},
    },
    mutations: {
        initData(state: any, preload: any) {
            let { topicList, totalPages, currentPage } = preload
            state.topicList = state.topicList.concat(topicList);
            state.totalPages = totalPages;
        },
        setCurrentPage(state: any, payload: any) {
            state.currentPage = payload
        },
        setTopicDetail(state:any,payload:any){
            state.topicDetail=payload
        }
      
    },
    actions: {
        async topicListAction(context: any, params: any) {
            let { commit, state } = context
            let result: any = await requestTopicList(params)
            if (result.errno === 0) {
                commit("initData",
                    {
                        topicList: result.data.data,
                        totalPages: result.data.totalPages
                    })
            }
            return result;
        },
        async getTopicDetail(context: any, payload: any) {   
            let {commit}=context
            let result:any=await requestTopicDetail({id:payload})  
            if(result.errno===0){
                commit("setTopicDetail",result.data)
            }
            return result;  
        }
        
    },
    getters: {
        topicList: (state: any) => state.topicList,
        totalPages: (state: any) => state.totalPages,
        topicDetail: (state: any) => state.topicDetail
    }

}