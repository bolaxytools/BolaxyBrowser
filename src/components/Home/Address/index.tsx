import React from 'react';
import styles from './index.less';
import useRootStore from 'store/useRootStore';
import { observer } from 'mobx-react';
import intl from 'react-intl-universal';
import {formatNumber} from 'utils/index';
const addressItem = (item: ISearchStore.Address): React.ReactNode => (
  <div className = {styles.addressItem}>
    <div className = {styles.symbol}>
      <img src={item.logo} width='18px' height='18px' alt=""/>
      <span>{item.symbol + ' balance'}</span>
    </div>
    <span>{formatNumber(item.quantity)}</span>
  </div>
)

function SearchAddress () {
  const {addressList, searchValue} = useRootStore().searchStore
  return (
    <div className = {styles.content}>
      <h5>{intl.get('ADDRESS_INFO')}</h5>
      <div className = {styles.addressInfo}>
        <span>{intl.get('ADDRESS')}</span>
        <span className = {styles.line}></span>
        <span>{searchValue}</span>
      </div>
      <div className = {styles.searchContent}>
        <p>{intl.get('QUERY_RESULT')}</p>
        {addressList.map((v, i) => <div key = {String(i)}>
          {addressItem(v)}
        </div>)}
      </div>
    </div>
  )
}

export default observer(SearchAddress)