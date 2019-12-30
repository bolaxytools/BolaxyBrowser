import React from 'react';
import styles from './index.less';
import signal from 'assets/signal.png';
import {formatCash} from 'utils';
import moment from 'moment';
import {routerStore} from 'store/index';
import {PAGE_PATH} from 'constants/index';

interface IProps {
  item: IHomeStore.Blocks,
  flexList: any[]
}

function BlockItem ({item, flexList}: IProps) {
  const {height, hash, tx_count, block_time} = item
  const toDetails = (e: React.MouseEvent) => {
    e.preventDefault()
    routerStore.history.push(PAGE_PATH.BLOCK_DETAILS + height)
  }
  return (
    <div className={styles.item} onClick = {toDetails}>
      <div className={styles.imgText} style={{flex: flexList[0].flex}}>
        <img src={signal} alt="" width = {14} height = {11}/>
        <span>{formatCash(height)}</span>
      </div>
      <p className={styles.hashText} style={{flex: flexList[1].flex}}>{hash}</p>
      <div style={{flex: flexList[2].flex}}>
        <span>{formatCash(tx_count)}</span>
      </div>
      <p style={{flex: flexList[3].flex}}>{moment(Number(block_time || 0)).format('YYYY-MM-DD HH:mm:ss')}</p>
    </div>
  )
}

export default BlockItem