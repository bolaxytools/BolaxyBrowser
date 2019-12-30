import { SearchStore as SearchStoreModel } from './index'

export as namespace ISearchStore

export interface SearchStore extends SearchStoreModel {}

export interface Address {
  name: string // 名称
  contract: string // 合约地址
  type: string // 类型
  symbol: string // 简称
  quantity: number // 数量
  logo: string
}