import { observable, action } from 'mobx'
import { StoreExt } from 'utils/reactExt'
import { BaseParams } from '@services/apiInterface'
import { SEARCH_TYPES } from 'constants/index';

export class SearchStore extends StoreExt {
  /**
   * 区块数据
   *
   * @type {IHomeStore.Blocks}
   * @memberof SearchStore
   */
  @observable
  blocks: IHomeStore.Blocks[] = []

  /**
   * 交易数据
   *
   * @type {IHomeStore.Transaction}
   * @memberof SearchStore
   */
  @observable
  transactions: IHomeStore.Transaction[] = []

  /**
   * 地址数据
   *
   * @type {ISearchStore.Address}
   * @memberof SearchStore
   */
  @observable
  addressList: ISearchStore.Address[] = []

  /**
   * 搜索内容
   *
   * @memberof SearchStore
   */
  @observable
  searchValue: string = ''

   /**
   * 搜索内容是否为空
   *
   * @memberof SearchStore
   */
  @observable
  isEmpty: boolean = false

  /**
   * 搜索内容类型
   *
   * @memberof SearchStore
   */
  @observable
  type: string = ''

  @action
  searchData = async (dataParams: BaseParams): Promise<any> => {
    try {
      const res = await this.api.default.searchData(dataParams)
      const {ret_type, data} = res.data
      this.setIsEmpty(!data)
      if (data) {
        this.setType(ret_type)
        switch (ret_type) {
          case SEARCH_TYPES.ADDRESS: 
          this.setSearchAddress(data.asset_list)
          break
          case SEARCH_TYPES.BLOCK:
          this.setSearchBlocks(data)
          break
          case SEARCH_TYPES.HASH:
          this.setSearchTx(data)
          break
        }
      }
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  @action
  setSearchValue = (value: string) => {
    if (value === '') this.setIsEmpty(false)
    this.searchValue = value
  }

  @action
  setSearchBlocks = (block: IHomeStore.Blocks) => {
    this.blocks = [block]
  }

  @action
  setSearchTx = (transaction: IHomeStore.Transaction) => {
    this.transactions = [transaction]
  }

  @action
  setSearchAddress = (addressList: ISearchStore.Address[]) => {
    this.addressList = addressList
  }

  @action
  setIsEmpty = (isEmpty: boolean) => {
    this.isEmpty = isEmpty
  }

  @action
  setType = (type: string) => {
    this.type = type
  }
}


export default new SearchStore()