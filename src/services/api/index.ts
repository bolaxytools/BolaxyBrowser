import http from 'utils/http'
import {BaseParams} from '../apiInterface';

const baseApi = '/explore'

export default {
  getHomeData: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/index', data)
  },
  searchData: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/search', data)
  },
  dealList: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/txlist', data)
  },
  blocks: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/getblock', data)
  },
  assets: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/getassets', data)
  },
  blockInfo: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/getblockbyid', data)
  },
  dealInfo: (data?: BaseParams): Promise<any> => {
    return http.post!(baseApi + '/gettxbyhash', data)
  }
}