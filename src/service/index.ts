import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from '@/utils/cache'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (res: any) => {
      const token = LocalCache.getCache('token')
      if (token) {
        res.headers.Authorization = `Bearer ${token}`
      }
      console.log('单独请求拦截')
      return res
    },
    responseInterceptor: (res) => {
      console.log('单独响应拦截')
      return res
    }
  }
})
export default hyRequest
