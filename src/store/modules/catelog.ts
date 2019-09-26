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
        currentCatelog: {},//catelog页面当前分类页的数据
        currentCategory: {},
        catelogCurrentIndex: 0,//catelog nav导航的当前下标
        categoryCurrentIndex: 0,//category nav导航的当前下标
        currentNavList: [],//nav组件使用的列表
        currentPage: "catelog",//目前使用导航的页面
        searchData: {},//goodsSearch页面的数据
        defaultKeyword: {},//goodsSearch页面的数据
        historyKeywordList: {},//goodsSearch页面的数据
        hotKeywordList: {},//goodsSearch页面的数据
        goodsList: [],//查询页面 返回查询结果
        front_name: "",//catelog 页面的描述文字
        categoryFrontName: "",
        catelogId: 0,//catelog页面的id
        categoryId: 0,//category页面的id
        subGoodsList: [],//category页面的数据列表
        subcategory: {},//category页面的所有数据
        categoryTotalPages: 1,//分页数据 总页数
        categoryCurrentPage: 1,//分页数据 当前页数
    },
    mutations: {
        //初始化分类页的数据
        initData(state: any, payload: any) {
            state.currentCatelog = payload.currentCategory
            state.currentNavList = payload.categoryList
            window.localStorage.setItem("currentNavList", JSON.stringify(payload.categoryList))
        },
        //catelog页面tab切换
        setcurrentCategory(state: any, payload: any) {
            console.log(payload,"llllllllll")
            state.catelogId = payload.id
            state.currentCatelog = payload
            state.front_name = payload.front_name

        },
        //category页面tab切换
        setSubcategory(state: any, payload: any) {
            state.subcategory = payload
            state.subGoodsList =[...payload.data,...state.subGoodsList]
            state.categoryTotalPages = payload.totalPages
            state.categoryCurrentPage = payload.currentPage         
            window.localStorage.setItem("subGoodsList", JSON.stringify(state.subGoodsList))
           
        },
        clearSubList(state: any){
            state.subGoodsList=[]         
            state.categoryCurrentPage = 1 
        },
        setcategoryFrontName(state: any, payload: any) {
            window.localStorage.setItem("categoryFrontName", payload)
            state.categoryFrontName = window.localStorage.getItem("categoryFrontName")
        },
        //设置当前页面
        setcurrentPage(state: any, payload: any) {
            state.currentPage = payload
        },
        //设置当前导航下标
        setCurrentIndex(state: any, payload: any) {
            if (state.currentPage === "catelog") {
                window.localStorage.setItem("catelogCurrentIndex", payload)
            } else if (state.currentPage === "categorys") {
                window.localStorage.setItem("categoryCurrentIndex", payload)
            }
        },
        //h初始化goodsSearch 页面数据
        setInitSearch(state: any, payload: any) {
            let { defaultKeyword, historyKeywordList, hotKeywordList } = payload
            state.searchData = payload
            state.defaultKeyword = defaultKeyword
            state.historyKeywordList = historyKeywordList
            state.hotKeywordList = hotKeywordList
        },
        //设置搜索页面的商品列表
        setGoodsList(state: any, payload: any) {
            state.goodsList = payload
        },
        //设置category页面的导航
        setSubNav(state: any, payload: any) {
            state.currentNavList = state.currentCatelog.subCategoryList
            window.localStorage.setItem("currentNavList", JSON.stringify(state.currentNavList))
            window.localStorage.setItem("categoryCurrentIndex", payload)
        },
        //设置category bScroll当前页数
        setCategoryCurrentPage(state: any, payload: any) {
            let { categoryTotalPages, categoryCurrentPage } = state
            if (categoryCurrentPage < categoryTotalPages) {
                state.categoryCurrentPage = state.categoryCurrentPage * 1 + 1
            } else {
            }
        }
    },
    actions: {
        //初始化catelog页面的数据
        async initCatelogAction(context: any) {
            let { commit, state } = context
            let result: any = await requestInitCatelog()
            if (result.errno === 0) {
                commit("initData", result.data)
            }
            return result;
        },
        //nav组件 点击进行数据切换
        async changeTabAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestChangeTab(payload)
            console.log(result, "result")
            if (result.errno === 0) {
                if (state.currentPage === "catelog") {
                    commit("setcurrentCategory", result.data.currentCategory)
                    window.localStorage.setItem("catelogId", payload.id)
                } else {
                    //category页面使用nav组件 进行tab切换state.categoryId
                    let goodsList: any = await requestGoodsList({ categoryId: payload.id, page: 1 })
                    commit("clearSubList")
                    if (goodsList.errno === 0) {
                        console.log("alpppppppp", payload)
                        commit("setSubcategory", goodsList.data)
                        window.localStorage.setItem("categoryId", payload.id)
                        // window.localStorage.setItem("categoryFrontName",payload)
                        commit("setcategoryFrontName", result.data.currentCategory.front_name)
                    }
                }
            }
            return result;
        },
        //改变category页面的数据
        async changeSubTabAction(context: any, payload: any) {
            console.log("===============")
            let { commit, state } = context
            let id: any = window.localStorage.getItem("categoryId")
            let goodsList: any = await requestGoodsList({ categoryId: id, page: state.categoryCurrentPage * 1 })
            console.log("goodsList", goodsList)
            commit("setSubcategory", goodsList.data)
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
        //当前catelog页面的数据
        async currentCatelogAction(context: any, payload: any) {
            let { commit, state } = context
            let id = window.localStorage.getItem("catelogId")
            let result: any = await requestCurrentCatelog({ id })
            if (result.errno === 0) {
                commit("setcurrentCategory", result.data.currentCategory)
            }
            return result;
        },
        async scrollUpload(context: any, payload: any) {
            let { commit, state } = context
            commit("setCategoryCurrentPage")
            let id: any = window.localStorage.getItem("categoryId")
            let goodsList: any = await requestGoodsList({ categoryId: id, page: state.categoryCurrentPage * 1 })
            if (goodsList.errno === 0) {
                commit("setSubcategory", goodsList.data)
            }
            return goodsList;
        }
    },
    getters: {
        categoryList: (state: any) => state.categoryList,
        currentCatelog: (state: any) => state.currentCatelog,
        currentNavList: (state: any) => state.currentNavList,
        searchData: (state: any) => state.searchData,
        defaultKeyword: (state: any) => state.defaultKeyword,
        historyKeywordList: (state: any) => state.historyKeywordList,
        hotKeywordList: (state: any) => state.hotKeywordList,
        goodsList: (state: any) => state.goodsList,
        front_name: (state: any) => state.front_name,
        categoryFrontName: (state: any) => state.categoryFrontName,
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