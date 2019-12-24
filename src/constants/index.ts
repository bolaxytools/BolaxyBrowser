import {INav, nav} from 'components/Header/nav';

export const successCode = 10001

export enum SEARCH_TYPES {
    ADDRESS = 'dz',
    HASH = 'hx',
    BLOCK = 'kg'
}

export enum LOCALSTORAGE_KEYS {
    LANG = 'lang'
}

export enum PAGE_PATH {
    HOME = '/',
    DEAL = '/deal',
    BLOCK = '/block',
    ASSETS = '/assets',
    DEAL_DETAILS = '/deal/details?txhash=',
    BLOCK_DETAILS = '/block/details?height='
}


export const DEFAULT_BASEURL = 'http://192.168.9.127:48080/explore'

export const DEAL_HEADER = [
    {
        title: 'TYPE',
        flex: 1
    },
    {
        title: 'TX_HASH',
        flex: 3
    },
    {
        title: 'COIN',
        flex: 1
    },
    {
        title: 'TIME',
        flex: 1
    }
]

export const BLOCK_HEADER = [
    {
        title: 'BLOCK_HEIGHT',
        flex: 3
    },
    {
        title: 'BLOCK_HASH',
        flex: 4
    },
    {
        title: 'TX',
        flex: 2
    },
    {
        title: 'TIME',
        flex: 2
    }
]

export const ADDRESS_HEADER = [
    {
        title: 'NAME',
        flex: 3
    },
    {
        title: 'ADDRESS',
        flex: 5
    },
    {
        title: 'TYPE',
        flex: 3
    },
    {
        title: 'SYMBOL',
        flex: 2
    },
    {
        title: 'VOLUME',
        flex: 2
    }
]

export const ROUTE_LIST: INav[] = nav.concat([{
    id: 5,
    title: '交易详情',
    path: '/deal/details',
    component: 'DealDetails',
    exact: true
},
{
    id: 6,
    title: '区块详情',
    path: '/block/details',
    component: 'BlockDetails',
    exact: true
}])

export enum LOCALES_KEYS {
    EN_US = 'en-US',
    ZH_CN = 'zh-CN',
    ZH_TW = 'zh-TW'
}

export const SUPPOER_LOCALES = [
    {
        name: 'English',
        value: LOCALES_KEYS.EN_US
    },
    {
        name: '简体中文',
        value: LOCALES_KEYS.ZH_CN
    },
    {
        name: '繁体中文',
        value: LOCALES_KEYS.ZH_TW
    }
]
