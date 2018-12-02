import axios from 'axios'
import '@/mock'
import store from '@/store'
import { getToken } from "@/utils/auth"
import { Message } from 'element-ui'


// axios.defaults.headers = {
//   'Content-Type':'application/x-www-form-urlencoded'
// }
// const service = axios
const service = axios.create({
  baseURL: process.env.API_URL,
  timeout: process.env.API_TIMEOUT
})




service.interceptors.request.use(config => {
  if(store.getters.token){
      config.headers['authorization'] = 'JWT '+ getToken()
  }
  return config
}, error => {
  Promise.reject(error)
})

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

function findError(error){
  if(error.response.data.hasOwnProperty('detail')){
    return error.response.data.detail
  }else if(error.response.data.hasOwnProperty('non_field_errors')){
    return error.response.data.non_field_errors
  }
  else{
    return '未知错误'
  }
}

service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: findError(error),
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject('error')
  })

export default service


// const res = response.data;
// if(res.code != 200){
//   Message({
//     message: res.message,
//     type: 'error',
//     duration: 5 * 1000
//   });
//   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//       confirmButtonText: '重新登录',
//       cancelButtonText: '取消',
//       type: 'warning'
//     }).then(() => {
//       store.dispatch('FedLogOut').then(() => {
//         location.reload();// 为了重新实例化vue-router对象 避免bug
//       });
//     })
//   }
//   return Promise.reject('error');
// }else{
//   return response.data;
// }
