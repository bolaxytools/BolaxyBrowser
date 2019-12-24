import { HomeStore as HomeStoreModel } from './index'

export as namespace IHomeStore

export interface HomeStore extends HomeStoreModel {}

export interface Transaction {
  tx_type: number // 交易类型，暂时为0
  addr_from: string // 交易的发起者地址(出款人)
  addr_to: string // 交易的接收者地址(收款人)
  amount: string // 交易额
  miner_fee: string // 手续费
  tx_hash: string // 交易唯一标识
  block_height: number // 交易块高
  tx_time: number // 交易时间
  memo?: string // 备注信息
}

export interface Blocks {
  height: string // 区块高度
  hash: string // 区块hash
  tx_count: string // 交易数量
  block_time?: string // 区块打包时间
  signers: string[] // 区块签名者，多个
}

export interface IHome {
  chain_id?: string // 圈子chainId
  block_count?: number // 区块总数
  address_count?: number // 活跃地址总数
  main_coin_count?: number // 积分币总数
  tx_count?: number // 交易总数
  cross_max?: number // 可跨链转账总数
  gas_cost_count?: number // 全网消耗gas总数
  txs?: Transaction[] // 最新交易列表
  blocks?: Blocks[] // 最新区块列表
}
