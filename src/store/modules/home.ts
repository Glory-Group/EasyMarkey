import {requestHomeList} from "@/service/index"

export default {
    namespaced: true,
    state: {
      homeList:[],//首页数据
      banner:[],//轮播图数据
      channel:[],//类型title数据
      brandList:[],//品牌数据
      newGoodsList:[],//新品首发数据
      hotGoodsList:[],//人气推荐数据
      categoryList:[],//类型列表数据
      topicList:[],//专题精选数据
      currentPage:0,//当前加载页数
      totalPage:1,//类型列表数据页数
      cateList:[]//加载页数对应数据
    },
    mutations: {
       //设置首页数据
       setHomeList(state:any,payload:any){
            console.log(payload)
            state.homeList=payload
            let obj=Object.entries(payload)
            obj.forEach((item,index)=>{
              state[item[0]]=item[1]
            })
            let data=JSON.parse(JSON.stringify(payload.categoryList))
            state.totalPage=data.length
            state.categoryList=data
            state.cateList=[...state.cateList,data[state.currentPage]]
         } ,
         //设置加载页数
       setCurrentPage(state: any, payload: any) {
         let {categoryList,totalPage}=state
         state.currentPage = payload
         if(state.currentPage<totalPage){
          state.cateList=[...state.cateList,categoryList[state.currentPage]]
         }else{
           state.cateList=[...state.cateList]
         }
       }
    },
    actions: {
        //调用获取首页数据接口
       async homeListAction(context:any){
         const result:any = await requestHomeList()
         if(result.errno===0){
            context.commit('setHomeList',result.data)
         }else{
            context.commit('setHomeList',result)
         }
        
       }
    },
    getters:{
    }
}