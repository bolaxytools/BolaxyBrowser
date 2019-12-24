import { observable, action } from 'mobx'
import { StoreExt } from 'utils/reactExt'

export class HomeStore extends StoreExt {
  /**
     * 首页数据
     *
     * @type {IHomeStore.IHome}
     * @memberof HomeStore
     */
  @observable
  homeData: IHomeStore.IHome = {}

  /**
   * 获取首页数据
   *
   * @memberof HomeStore
   */
  @action
  getHomeData = async (): Promise<any> => {
    try {
      const res = await this.api.default.getHomeData()
      this.setHomeData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  @action
  setHomeData = (homeData: IHomeStore.IHome): IHomeStore.IHome => {
      this.homeData = homeData
      return homeData
  }
}

export default new HomeStore()