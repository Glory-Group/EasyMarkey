import {
    requestInitCatelog,
    requestChangeTab,
    requestGoodsSearch,
    requestInitSearch,
    requestGoodsList,
    requestClearHistory
} from "@/service/index"

export default {
    namespaced: true,
    state: {
        categoryList: [],//catelog页面分类的nav导航列表
        currentCategory: {},//catelog页面当前分类页
        currentIndex: 0,//nav导航的当前下标
        currentNavList: [],//nav组件使用的列表
        currentPage: "catelog",//目前使用导航的页面
        searchData: {},//goodsSearch页面的数据
        defaultKeyword: {},
        historyKeywordList: {},
        hotKeywordList: {},
        goodsList: [],//查询页面 返回查询结果
        front_name:"",
        categoryId:0,
        subGoodsList:[],//category页面的数据列表
    },
    mutations: {
        //初始化分类页的数据
        initData(state: any, payload: any) {
            state.categoryList = payload.categoryList
            state.currentCategory = payload.currentCategory
            state.currentNavList = payload.categoryList
            window.localStorage.setItem("currentNavList",JSON.stringify(payload.categoryList))
        },
        setcurrentCategory(state: any, payload: any) {
            state.currentCategory = payload
            state.front_name=payload.front_name
            state.categoryId=payload.id
        },
        setcurrentNavList(state: any, payload: any) {
            state.currentNavList = payload
            window.localStorage.setItem("currentNavList",JSON.stringify(payload))
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
        },
        setGoodsList(state: any, payload: any) {
            state.goodsList = payload
        },
        setSubNav(state: any) {
            state.currentNavList = state.currentCategory.subCategoryList
            window.localStorage.setItem("currentNavList",JSON.stringify(state.currentNavList))
        },
        setSubGoosList(state:any,payload:any){
            state.subGoodsList=payload
        },
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
            }
            if(state.currentPage === "categorys"){
                let goodsList:any=await requestGoodsList({categoryId:state.categoryId})
                if(goodsList.errno===0){
                    commit("setSubGoosList",goodsList.data.data)
                }
            }
            return result;
        },
        async goodsSearchAction(context: any, payload: any) {
            let { commit, state } = context
            let result: any = await requestGoodsSearch(payload)
            if (result.errno === 0) {
                let goodsList: any = await requestGoodsList({ keyword: result.data[0] })
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
        async clearHistoryAction(context:any){
            let result:any=await requestClearHistory()
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
        hotKeywordList: (state: any) => state.hotKeywordList,
        goodsList: (state: any) => state.goodsList,
        front_name:(state:any)=>state.front_name,
        subGoodsList:(state:any)=>state.subGoodsList,
        currentPage:(state:any)=>state.currentPage,
    }
}