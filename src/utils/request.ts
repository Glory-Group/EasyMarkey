import axios from 'axios';
import {AxiosResponse} from 'axios/index';
import {getToken} from "./saveToken";


const instance = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 1000,
     headers: {'x-nideshop-token': getToken()}
});

// 请求拦截器
instance.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
    // Do something with response data
    if (response.status !== 200){
     alert(response.statusText);
    }
    return response.data;
  },  (error) =>{
    // Do something with response error
    if (error.response.status && error.response.status !== 200){
     alert(error.response.statusText);
    }else{
      // message.error(error.response);
    }
    return Promise.resolve(error);
  }
);

export default instance;