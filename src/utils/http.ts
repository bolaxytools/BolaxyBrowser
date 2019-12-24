import axios, { AxiosRequestConfig, Method } from 'axios'
import { successCode } from 'constants/index';
import {BaseParams} from '@services/apiInterface';
import { isPlainObject } from 'lodash'
import { message } from 'antd'
import intl from 'react-intl-universal';

interface HttpRequest {
    get?(url: string, data?: BaseParams, baseUrl?: string): Promise<any>
    post?(url: string, data?: BaseParams, baseUrl?: string): Promise<any>
    delete?(url: string, data?: BaseParams, baseUrl?: string): Promise<any>
    put?(url: string, data?: BaseParams, baseUrl?: string): Promise<any>
}

const http: HttpRequest = {}

const baseHttp = (url: string, method: Method = 'get', data?: BaseParams, baseUrl?: string) => {
  // 设置axios请求配置
  data = data ? data : {data: {}}
  const config: AxiosRequestConfig = {
    url,
    method: method
    // baseURL: baseUrl || DEFAULT_BASEURL
  }
  // 新建自定义配置axios实例，其中配置项只含有默认基础url
  const instance = axios.create()
  // 请求拦截
  instance.interceptors.request.use(
      cfg => {
          // 此处可以进行token设置
          return cfg
      },
      // 错误抛出
      error => Promise.reject(error)
  )
  // 相应请求拦截
  instance.interceptors.response.use(
      res => {
          // 此处对响应做处理
          if (isPlainObject(res) && res.data && res.data.err_code === successCode) {
            return res.data
          }
          const rData = typeof res.data === 'object' && !isNaN(res.data.length) ? res.data[0] : res.data
          return Promise.reject({
            msg: rData.err_msg,
            errCode: rData.err_code
        })
      },
      error => {
        return Promise.reject({
          msg: error.response.statusText || error.message || 'network error',
          errCode: '500'
        })
      }
  )
  if (method === 'get') {
      config.params = data
  } else {
      config.data = data
  }
  return (
      instance
          .request(config)
          .then(res => res)
          // 错误统一处理
          .catch(err => {
            message.destroy()
            message.error(intl.get(String(err.errCode)) || err.msg)
            throw err
          })
  )
}
http.get = (url: string, data?: BaseParams, baseUrl?: string) => (
  baseHttp(url, 'get', data, baseUrl)
)

http.post = (url: string, data?: BaseParams, baseUrl?: string) => (
  baseHttp(url, 'post', data, baseUrl)
)

http.delete = (url: string, data?: BaseParams, baseUrl?: string) => (
  baseHttp(url, 'delete', data, baseUrl)
)

http.put = (url: string, data?: BaseParams, baseUrl?: string) => (
  baseHttp(url, 'put', data, baseUrl)
)

export default http