import axios from 'axios'
import qs from 'qs'
import {getToken} from '~/utils/auth'
import store from '~/store'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.baseUrl, // api的base_url
  timeout: 10000 // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request拦截器
service.interceptors.request.use(config => {
  //  POST 传参序列化
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  console.log(store)
  console.log(store.token)
  const token = getToken()
  if (token) {
    config.headers['Trace-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(function (response) {
  console.log(response.data)
  let data = response.data

  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
  // post 方法
  post(url, data) {
    console.log('post request url', url)
    return service({
      method: 'post',
      url,
      params: data
    })
  },
  // get 方法
  get(url, data) {
    console.log('get request url', url)
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  // delete 方法
  delete(url, data) {
    console.log('delete request url', url)
    return service({
      methods: 'delete',
      url,
      params: data
    })
  }
}
