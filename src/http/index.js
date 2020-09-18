import axios from 'axios'
let token='usertokenxxxx'
axios.interceptors.request.use( (config)=> {
    config.headers['Akdsbfdsfsdf']='Bearer '+token
 return config
  });

// Add a response interceptor
axios.interceptors.response.use( (config) =>{
 switch(config.status){
     case 200:
         return config.data
         default:
             alert('网络请求错误')

 }
  });
  export default axios