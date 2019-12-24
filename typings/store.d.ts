import { RouterStore as _RouterStore } from 'mobx-react-router'

declare global {
    /**
     * type from mobx-react-router
     *
     * @interface RouterStore
     * @extends {_RouterStore}
     */
    interface RouterStore extends _RouterStore {}

    /**
     * type for all store
     *
     * @interface IStore
     */
    interface IStore {
        homeStore: IHomeStore.HomeStore
        searchStore: ISearchStore.SearchStore
        globalStore: IGlobalStore.GlobalStore
        dealStore: IDealStore.DealStore
        blockStore: IBlockStore.BlockStore
        assetsStore: IAssetsStore.AssetsStore
        routerStore: RouterStore
    }
}
