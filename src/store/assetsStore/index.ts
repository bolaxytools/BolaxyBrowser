import { observable, action } from 'mobx'
import { StoreExt } from 'utils/reactExt'

export class AssetsStore extends StoreExt {
  /**
   * 区块数据
   *
   * @type {ISearchStore.Address}
   * @memberof BlockStore
   */
  @observable
  assets: ISearchStore.Address[] = []

  /**
   * total
   *
   * @memberof BlockStore
   */
  @observable
  total = 0

  private pageSize = 10

  @action
  getAssets = async (page: number = 1, pageSize: number = 10): Promise<any> => {
    try {
      const res = await this.api.default.assets({data: {page, page_size: pageSize}})
      this.setAssets(res.data.asset_list, res.data.total || 0)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  @action
  setAssets = (assets: ISearchStore.Address[], total: number) => {
    this.assets = assets
    this.total = total
  }

  @action
  changePageIndex = (page: number, pageSize?: number) => {
      this.getAssets(page, pageSize)
  }

  @action
  changePageSize = (current: number, size: number) => {
      if (this.total < this.pageSize && this.total < size) return
      this.pageSize = size
      this.getAssets(current, size)
  }
}

export default new AssetsStore()