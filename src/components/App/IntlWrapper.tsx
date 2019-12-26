import React from 'react'
import intl from 'react-intl-universal'
import { find } from 'lodash'
import { ConfigProvider } from 'antd'
import { Locale } from 'antd/lib/locale-provider'
import { useOnMount } from 'utils/hooks'
import { LOCALSTORAGE_KEYS } from 'constants/index'
import { getLocaleLoader } from 'locales/loader'
import {SUPPOER_LOCALES, LOCALES_KEYS} from 'constants/index';

interface IProps {
    children?: React.ReactNode
}

export default function IntlWrapper({ children }: IProps) {
    const [currentLocale, setCurrentLocale] = React.useState('')
    const [antdLocaleData, setAntdLocaleData] = React.useState<Locale>()
    function loadLocales() {
        let targetLocale = intl.determineLocale({ localStorageLocaleKey:  LOCALSTORAGE_KEYS.LANG}) as LOCALES_KEYS
        // default is English
        if (!find(SUPPOER_LOCALES, { value: targetLocale })) {
            targetLocale = LOCALES_KEYS.EN_US
        }
        window.localStorage.setItem(LOCALSTORAGE_KEYS.LANG, targetLocale)
        getLocaleLoader(targetLocale).then(res => {
            intl.init({ currentLocale: targetLocale, locales: { [targetLocale]: res.localeData } }).then(() => {
                setCurrentLocale(targetLocale)
                setAntdLocaleData(res.antdLocaleData)
            })
        })
    }

    useOnMount(loadLocales)

    if (!currentLocale) {
        return <div>Loading...</div>
    }
    return (
        <ConfigProvider locale={antdLocaleData}>
           {children}
        </ConfigProvider>
    )
}
