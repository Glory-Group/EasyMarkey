import {requestHomeList,requestBrandDetail,requestBrandDetailList} from "@/service/index"

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
      cateList:[],//加载页数对应数据
      brandDetail:[],//品牌详情
      brandDetailList:[],//品牌列表

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
       },

       //设置brandDetail数据
       setBrandDetail(state:any,payload:any){
        state.brandDetail=payload.brand

       },

       //设置setBrandDetailList数据
       setBrandDetailList(state:any,payload:any){
       state.brandDetailList=payload.data
       console.log(payload)
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
        
       },

       //调用获取brandDetail接口
       async brandDetailAction(context:any,params:any){
         const result:any = await requestBrandDetail(params)
        if(result.errno===0){
          context.commit("setBrandDetail",result.data)
        }else{
          context.commit("setBrandDetail",result)
        }
       },

       //调用获取brandDetailList接口
       async brandDetailListAction(context:any,params:any){
         const result:any = await requestBrandDetailList(params)
         if(result.errno===0){
          context.commit("setBrandDetailList",result.data)
        }else{
          context.commit("setBrandDetailList",result)
        }
       }


    },
    getters:{
    }
}