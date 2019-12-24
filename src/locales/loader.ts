import { Locale } from 'antd/lib/locale-provider'
import {LOCALES_KEYS} from 'constants/index';

export interface LocaleResponse {
    localeData: any
    antdLocaleData: Locale
}

export function getLocaleLoader(locale: string): Promise<LocaleResponse> {
    switch (locale) {
        case LOCALES_KEYS.ZH_CN:
            return new Promise(async resolve => {
                const loc = await import(/* webpackChunkName: "zh-CN" */ './zh_CN.json').then(m => m.default)
                const antdLoc = await import(
                    /* webpackChunkName: "antd-zh-CN" */ 'antd/lib/locale-provider/zh_CN'
                ).then(m => m.default)
                resolve({ localeData: loc, antdLocaleData: antdLoc })
            })
        case LOCALES_KEYS.ZH_TW:
            return new Promise(async resolve => {
                const loc = await import(/* webpackChunkName: "zh-TW" */ './zh_TW.json').then(m => m.default)
                const antdLoc = await import(
                    /* webpackChunkName: "antd-zh-TW" */ 'antd/lib/locale-provider/zh_TW'
                ).then(m => m.default)
                resolve({ localeData: loc, antdLocaleData: antdLoc })
            })
        default:
            return new Promise(async resolve => {
                const loc = await import(/* webpackChunkName: "en-US" */ './en_US.json').then(m => m.default)
                const antdLoc = await import(
                    /* webpackChunkName: "antd-en-US" */ 'antd/lib/locale-provider/en_US'
                ).then(m => m.default)
                resolve({ localeData: loc, antdLocaleData: antdLoc })
            })
    }
}
