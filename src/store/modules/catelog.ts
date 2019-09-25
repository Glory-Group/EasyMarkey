import {
    requestInitCatelog,
    requestChangeTab,
    requestGoodsSearch,
    requestInitSearch,
    requestGoodsList,
    requestClearHistory,
    requestCurrentCatelog
} from "@/service/index"

export default {
    namespaced: true,
    state: {
        categoryList: [],//catelog页面分类的nav导航列表
        currentCategory: {},//catelog页面当前分类页
        catelogCurrentIndex: 0,//catelog nav导航的当前下标
        categoryCurrentIndex: 0,//category nav导航的当前下标
        currentNavList: [],//nav组件使用的列表
        currentPage: "catelog",//目前使用导航的页面
        searchData: {},//goodsSearch页面的数据
        defaultKeyword: {},
        historyKeywordList: {},
        hotKeywordList: {},
        goodsList: [],//查询页面 返回查询结果
        front_name: "",
        catelogId: 0,
        categoryId: 0,
        subGoodsList: [],//category页面的数据列表
        subcategory: {},
        categoryTotalPages: 1,//分页数据 总页数
        categoryCurrentPage: 1,//分页数据 当前页数
    },
    mutations: {
        //初始化分类页的数据
        initData(state: any, payload: any) {
            //state.categoryList = payload.categoryList
            state.currentCategory = payload.currentCategory
            state.currentNavList = payload.categoryList
            window.localStorage.setItem("currentNavList", JSON.stringify(payload.categoryList))
        },
        setcurrentCategory(state: any, payload: any) {
            state.currentCategory = payload
            state.front_name = payload.front_name
            state.categoryId = payload.id
        },
        setcurrentNavList(state: any, payload: any) {
            state.currentNavList = payload
            window.localStorage.setItem("currentNavList", JSON.stringify(payload))
        },
        setcurrentPage(state: any, payload: any) {
            state.currentPage = payload

        },
        setCurrentIndex(state: any, payload: any) {
            if (state.currentPage === "catelog") {
                state.catelogCurrentIndex = payload
            } else if (state.currentPage === "categorys") {
                state.categoryCurrentIndex = payload
            }
        },
        setCatelogId(state: any, payload: any) {
            state.catelogId = payload
        },
        setInitSearch(state: any, payload: any) {
            let { defaultKeyword, historyKeywordList, hotKeywordList } = payload
            state.searchData = payload
            state.defaultKeyword = defaultKeyword
            state.historyKeywordList = historyKeywordList
            state.hotKeywordList = hotKeywordList
        },
        setGoodsList(state: any, payload: any) {
            state.goodsList = payload
        },
        setSubNav(state: any, payload: any) {
            state.currentNavList = state.currentCategory.subCategoryList
            window.localStorage.setItem("currentNavList", JSON.stringify(state.currentNavList))
            state.categoryCurrentIndex = payload
        },
        setSubGoosList(state: any, payload: any) {
            console.log("000000000000000")
            state.categoryCurrentPage=1
            state.subGoodsList = payload.data
            state.subcategory = payload
        },
        setSubcategory(state: any, payload: any) {
            console.log(payload, "subcategory.............")
            // state.categoryCurrentPage=1
            state.subcategory = payload
            state.categoryTotalPages = payload.totalPages
            state.categoryCurrentPage = payload.currentPage
        },
        setCategoryCurrentPage(state: any, payload: any) {
            let { categoryTotalPages, categoryCurrentPage } = state
            if (categoryCurrentPage < categoryTotalPages) {
                state.categoryCurrentPage = state.categoryCurrentPage + 1
            } else {

            }
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
            let result: any = await requestChangeTab(payload)
            if (result.errno === 0) {
                commit("setcurrentCategory", result.data.currentCategory)
                commit("setCatelogId", payload.id)
            }
            if (state.currentPage === "categorys") {
                let goodsList: any = await requestGoodsList({ categoryId: state.categoryId, page: state.categoryCurrentPage })
                if (goodsList.errno === 0) {
                    commit("setSubGoosList", goodsList.data)
                    commit("setSubcategory", goodsList.data)
                }
            }
            return result;
        },
        async changeSubTabAction(context: any, payload: any) {
            let { commit, state } = context
            let goodsList: any = await requestGoodsList({ categoryId: payload, page: state.categoryCurrentPage })
            commit("setSubGoosList", goodsList.data.data)
            return goodsList;
        },
        async goodsSearchAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestGoodsSearch(payload)
            if (result.errno === 0) {
                let goodsList: any = await requestGoodsList({ keyword: result.data[0], })
                if (goodsList.errno === 0) {
                    commit("setGoodsList", goodsList.data)
                }
            }
            return result;
        },
        async initSearchAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestInitSearch()
            if (result.errno === 0) {
                commit("setInitSearch", result.data)
            }
            return result;
        },
        async clearHistoryAction(context: any) {
            let result: any = await requestClearHistory()
            return result;
        },
        async currentCatelogAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestCurrentCatelog({ id: state.catelogId })
            if (result.errno === 0) {
                commit("setcurrentCategory", result.data.currentCategory)
            }
            return result;
        },
        async scrollUpload(context: any, payload: any) {
            let { commit, state } = context
            commit("setCategoryCurrentPage")
            let goodsList: any = await requestGoodsList({ categoryId: state.categoryId, page: state.categoryCurrentPage })
            if (goodsList.errno === 0) {
                commit("setSubGoosList", goodsList.data)
                commit("setSubcategory", goodsList.data)
            }
            return goodsList;
        }
    },
    getters: {
        categoryList: (state: any) => state.categoryList,
        currentCategory: (state: any) => state.currentCategory,
        currentNavList: (state: any) => state.currentNavList,
        searchData: (state: any) => state.searchData,
        defaultKeyword: (state: any) => state.defaultKeyword,
        historyKeywordList: (state: any) => state.historyKeywordList,
        hotKeywordList: (state: any) => state.hotKeywordList,
        goodsList: (state: any) => state.goodsList,
        front_name: (state: any) => state.front_name,
        subGoodsList: (state: any) => state.subGoodsList,
        currentPage: (state: any) => state.currentPage,
        catelogCurrentIndex: (state: any) => state.catelogCurrentIndex,
        categoryCurrentIndex: (state: any) => state.categoryCurrentIndex,
        catelogId: (state: any) => state.catelogId,
        subcategory: (state: any) => state.subcategory,
        categoryTotalPages: (state: any) => state.categoryTotalPages,//分页数据 总页数
        categoryCurrentPage: (state: any) => state.categoryCurrentPage,//分页数据 当前页数
    }
}