import * as Cookie from 'js-cookie';

const key = 'token';
//从cookie中取值
export let getToken: ()=>any = ()=>{
    return Cookie.get(key);
};

export let setToken: (val: string)=>void = (val)=>{
    //设置七天免登陆
    Cookie.set(key, val, { expires: 7 });
};
//向cookie中存值
export let removeToken: ()=>void = ()=>{
    Cookie.remove(key);
};