import { requestTopicList, requestTopicDetail, requestCommentList, requestRelatedTopic,postComment } from "@/service/index"

export default {
    namespaced: true,
    state: {
        topicList: [],//专题页列表
        totalPages: 0,//专题页的总页数
        currentPage: 1,//专题页的当前页
        topicDetail: {},//专题详情
        topicId: 0,//专题ID
        topicDetailContent:"",//专题详情页的上面图片内容
        topicComment: [],//专题留言列表
        relatedTopic: [],//相关主题列表
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
        setTopicDetail(state: any, payload: any) {
            state.topicDetail = payload
            state.topicDetailContent=payload.content
        },
        settopicId(state: any, payload: any) {
            state.topicId = payload
        },
        setTopicComment(state: any, payload: any) {
            state.topicComment = payload
        },
        setRelatedTopic(state: any, payload: any) {
            state.relatedTopic = payload
        }

    },
    actions: {
        //获取专题页列表
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
        //获取专题详情页
        async getTopicDetail(context: any, payload: any) {
            let { commit } = context
            let result: any = await requestTopicDetail({ id: payload })
            commit("settopicId", payload)
            if (result.errno === 0) {
                commit("setTopicDetail", result.data)
               
            }
            return result;
        },
        //获取专题页留言
        async getCommentAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestCommentList({ valueId: state.topicId, typeId: 1 })
            if (result.errno === 0) {
                commit("setTopicComment", result.data.data)
            }
            return result;
        },
        //获取相关专题
        async relatedTopicAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestRelatedTopic({ id: state.topicId })
            if (result.errno === 0) {
                commit("setRelatedTopic", result.data)             
            }
            return result;
        },
        //添加专题页留言
        async addCommentAction(context:any,payload:any){
            let {commit,state}=context
            let params={
                typeId:1,
                valueId:state.topicId,
                content:payload
            }
            let result:any =await postComment(params)
            return result;
        }

    },
    getters: {
        topicList: (state: any) => state.topicList,
        totalPages: (state: any) => state.totalPages,
        topicDetail: (state: any) => state.topicDetail,
        topicComment: (state: any) => state.topicComment,
        topicId:(state:any)=>state.topicId,
        relatedTopic: (state: any) => state.relatedTopic,
        topicDetailContent:(state:any)=>state.topicDetailContent
    }

}