import { observable, action } from 'mobx'
import { StoreExt } from 'utils/reactExt'

export class DealStore extends StoreExt {
  /**
   * 交易数据
   *
   * @type {IHomeStore.Transaction}
   * @memberof DealStore
   */
  @observable
  transactions: IHomeStore.Transaction[] = []

  /**
   * 交易详情
   *
   * @type {IHomeStore.Transaction}
   * @memberof DealStore
   */
  @observable
  transactionDetails: IHomeStore.Transaction = {} as IHomeStore.Transaction

  /**
   * total
   *
   * @memberof BlockStore
   */
  @observable
  total = 0

  @action
  getTransactions = async (page: number = 1, pageSize: number = 10): Promise<any> => {
    try {
      const res = await this.api.default.dealList({data: {page, page_size: pageSize}})
      this.setTransactions(res.data.txs, res.data.total || 0)
    } catch (error) {
      console.log(error)
    }
  }

  @action
  getTransactionDetails = async (txnash: string): Promise<any> => {
    try {
      const res = await this.api.default.dealInfo({data: {txnash}})
      this.setTransactionDetails(res.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  @action
  setTransactions = (transactions: IHomeStore.Transaction[], total: number) => {
    this.transactions = transactions
    this.total = total
  }

  @action
  setTransactionDetails = (transactionDetails: IHomeStore.Transaction) => {
    this.transactionDetails = transactionDetails
  }

  @action
  changePageIndex = (page: number, pageSize?: number) => {
      this.getTransactions(page, pageSize)
  }

  private pageSize = 10

  @action
  changePageSize = (current: number, size: number) => {
      if (this.total < this.pageSize && this.total < size) return
      this.pageSize = size
      this.getTransactions(current, size)
  }
}

export default new DealStore()