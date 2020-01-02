import React from 'react';
import styles from './index.less';
import airplane from 'assets/airplane.png';
import {routerStore} from 'store/index';
import moment from 'moment';
import {PAGE_PATH} from 'constants/index';
import intl from 'react-intl-universal';

interface IProps {
  item: IHomeStore.Transaction,
  flexList: any[]
}

function DealItem ({item, flexList}: IProps) {
  const {tx_hash, tx_time, symbol} = item
  const toDetails = (e: React.MouseEvent) => {
    e.preventDefault()
    routerStore.history.push(PAGE_PATH.DEAL_DETAILS + tx_hash)
  }
  return (
    <div className={styles.item} onClick = {toDetails}>
      <div className={styles.imgText} style={{flex: flexList[0].flex}}>
        <img src={airplane} alt="" width={14} height={14}/>
        <span>{intl.get('TX')}</span>
      </div>
      <p className={styles.hashText} style={{flex: flexList[1].flex}}>{tx_hash}</p>
      <div style={{flex: flexList[2].flex}}>
        <img src="" alt=""/>
        <span>{symbol}</span>
      </div>
      <p style={{flex: flexList[3].flex}}>{moment(tx_time).format('YYYY-MM-DD HH:mm:ss')}</p>
    </div>
  )
}

export default DealItem