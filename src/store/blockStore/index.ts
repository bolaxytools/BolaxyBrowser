import { observable, action } from 'mobx'
import { StoreExt } from 'utils/reactExt'

export class BlockStore extends StoreExt {
  /**
   * 区块数据
   *
   * @type {IHomeStore.Blocks}
   * @memberof BlockStore
   */
  @observable
  blocks: IHomeStore.Blocks[] = []

  /**
   * 区块详情
   *
   * @type {IHomeStore.Blocks}
   * @memberof BlockStore
   */
  @observable
  blockDetails: IHomeStore.Blocks = {} as IHomeStore.Blocks

  /**
   * total
   *
   * @memberof BlockStore
   */
  @observable
  total = 0

  /**
   * 判断能否获取下一块
   *
   * @memberof BlockStore
   */
  @observable
  isCanDown = true

  @action
  getBlocks = async (page: number = 1, pageSize: number = 10): Promise<any> => {
    try {
      const res = await this.api.default.blocks({data: {page, page_size: pageSize}})
      this.setBlocks(res.data.blocks, res.data.total || 0)
    } catch (error) {
      console.log(error)
    }
  }

  @action
  getBlockDetails = async (height: number) : Promise<any> => {
    try {
      const res = await this.api.default.blockInfo({data: {height}})
      this.setBlockDetails(res.data)
      this.setIsCanDown(true)
    } catch (error) {
      if (error.errCode === 10003) {
        this.setIsCanDown(false)
      }
      console.log(error)
    }
  }

  @action 
  setBlockDetails = (blockDetails: IHomeStore.Blocks) => {
    this.blockDetails = blockDetails
  }

  @action
  setBlocks = (blocks: IHomeStore.Blocks[], total: number) => {
    this.blocks = blocks
    this.total = total
  }

  @action
  changePageIndex = (page: number, pageSize?: number) => {
      this.getBlocks(page, pageSize)
  }

  private pageSize = 10

  @action
  changePageSize = (current: number, size: number) => {
      if (this.total < this.pageSize && this.total < size) return
      this.pageSize = size
      this.getBlocks(current, size)
  }

  @action
  setIsCanDown = (isCanDown: boolean) => {
    this.isCanDown = isCanDown
  }
}

export default new BlockStore()