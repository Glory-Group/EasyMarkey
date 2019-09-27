import { requestGoodList } from "@/service/index"
const state={
   query:{
       brandId:'',
       categoryId:'',
       sort:'',
       order:'',
       page:1,
       size:'',
       totalPage:''
   },
   limit:10,
   count:0,
   value:[]
}


const mutations={
   setPage(state:any,payload:any){
       state.query.page=payload
   },
   setValue(state:any,payload:any){
       state.value=payload.data
       state.count=payload.count
   },
   appendValue(state:any,payload:any){
       state.value=state.value.concat(payload.data)
       state.count=payload.count
   }
}

const actions={
     async pullRefresh({commit,state}:any,payload:any){
         commit('setPage',payload.page)
         let params:any={};
         for (let key in state.query){
             if(state.query[key]){
                 params[key]=state.query[key]
             }
         }
        
         let data = await requestGoodList(payload.url,params)
         commit('setValue',data.data)
     },

     async loadMore({commit,state}:any,payload:any){
        commit('setPage',payload.page)
        let params:any={};
        for (let key in state.query){
            if(state.query[key]){
                params[key]=state.query[key]
            }
        }
        let data = await requestGoodList(payload.url,params)
        commit('appendValue',data.data)
     }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}