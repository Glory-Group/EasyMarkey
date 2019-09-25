import { requestInitCatelog, requestChangeTab, requestGoodsSearch, requestInitSearch } from "@/service/index"

export default {
    namespaced: true,
    state: {
        categoryList: [],//catelog页面分类的nav导航列表
        currentCategory: {},//catelog页面当前分类页
        currentIndex: 0,//nav导航的当前下标
        currentNavList: [],//nav组件使用的列表
        currentPage: "catelog",//目前使用导航的页面
        currentId: 0,//当前页面id
        searchData: {},//goodsSearch页面的数据
        defaultKeyword: {},
        historyKeywordList: {},
        hotKeywordList: {}
    },
    mutations: {
        initData(state: any, payload: any) {
            state.categoryList = payload.categoryList
            state.currentCategory = payload.currentCategory
            state.currentNavList = payload.currentCategory
        },
        setcurrentIndex(state: any, payload: any) {
            state.currentIndex = payload
            if (state.currentPage === "catelog") {
                state.currentId = state.categoryList[payload].id
            }
        },
        setcurrentCategory(state: any, payload: any) {
            state.currentCategory = payload
        },
        setcurrentNavList(state: any, payload: any) {
            state.currentNavList = payload
        },
        setcurrentPage(state: any, payload: any) {
            state.currentPage = payload
        },
        setInitSearch(state: any, payload: any) {
            let { defaultKeyword, historyKeywordList, hotKeywordList } = payload
            state.searchData = payload
            state.defaultKeyword = defaultKeyword
            state.historyKeywordList = historyKeywordList
            state.hotKeywordList = hotKeywordList
        }
    },
    actions: {
        async initCatelogAction(context: any) {
            let { commit, state } = context
            let result: any = await requestInitCatelog()
            if (result.errno === 0) {
                commit("initData", result.data)
            }
            return result;
        },
        async changeTabAction(context: any, payload: any) {
            let { commit, state } = context
            if (state.currentPage === "catelog") {
                let result: any = await requestChangeTab(payload)
                if (result.errno === 0) {
                    commit("setcurrentCategory", result.data.currentCategory)
                    commit("setcurrentNavList", result.data.currentCategory.subCategoryList)
                }
                return result;
            }
            return "aaa"
        },
        async goodsSearchAction(context: any, payload: any) {
            let { commit, state } = context
            let result = await requestGoodsSearch(payload)
            console.log(result, "search")
            return result;
        },
        async initSearchAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestInitSearch()
            console.log(result, "initsearch")
            if (result.errno === 0) {
                commit("setInitSearch", result.data)
            }
            return result;
        }
    },
    getters: {
        categoryList: (state: any) => state.categoryList,
        currentCategory: (state: any) => state.currentCategory,
        currentNavList: (state: any) => state.currentNavList,
        searchData: (state: any) => state.searchData,
        defaultKeyword: (state: any) => state.defaultKeyword,
        historyKeywordList: (state: any) => state.historyKeywordList,
        hotKeywordList: (state: any) => state.hotKeywordList
    }
}