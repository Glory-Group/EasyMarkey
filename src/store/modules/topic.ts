import { requestTopicList, requestTopicDetail, requestCommentList, requestRelatedTopic } from "@/service/index"

export default {
    namespaced: true,
    state: {
        topicList: [],//专题页列表
        totalPages: 0,//专题页的总页数
        currentPage: 1,//专题页的当前页
        topicDetail: {},//专题详情
        topicId: 0,//专题ID
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
        },
        settopicId(state: any, payload: any) {
            state.topicId = payload
        },
        setTopicComment(state: any, payload: any) {
            state.topicComment = payload
        },
        setRelatedTopic(state: any, payload: any) {
            console.log(payload,"payload")
            state.relatedTopic = payload
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
            let { commit } = context
            let result: any = await requestTopicDetail({ id: payload })
            commit("settopicId", payload)
            if (result.errno === 0) {
                commit("setTopicDetail", result.data)
            }
            return result;
        },
        async getCommentAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestCommentList({ valueId: state.topicId, typeId: 1 })
            if (result.errno === 0) {
                commit("setTopicComment", result.data.data)
            }
            return result;
        },
        async relatedTopicAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestRelatedTopic({ id: state.topicId })
            console.log(result, "iiiiiiiiiiiiiiiiii")
            if (result.errno === 0) {
                commit("setRelatedTopic", result.data)
            }
            return result;
        }

    },
    getters: {
        topicList: (state: any) => state.topicList,
        totalPages: (state: any) => state.totalPages,
        topicDetail: (state: any) => state.topicDetail,
        topicComment: (state: any) => state.topicComment,
        relatedTopic: (state: any) => state.relatedTopic
    }

}