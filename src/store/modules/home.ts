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
    }
}