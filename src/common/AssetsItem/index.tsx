import React from 'react';
import styles from './index.less';
import {formatCash} from 'utils';

interface IProps {
  item: ISearchStore.Address,
  flexList: any[]
}

function AssetsItem ({item, flexList} : IProps) {
  const {hashText} = styles
  const {symbol, contract, type, name, quantity} = item
  return (
    <div className = {styles.item}>
      <span className = {hashText} style={{flex: flexList[0].flex}}>{name}</span>
      <span className = {hashText} style={{flex: flexList[1].flex}}>{contract}</span>
      <span style={{flex: flexList[2].flex}}>{type}</span>
      <div style={{flex: flexList[3].flex}}>
        <img src="" alt=""/>
        <span>{symbol}</span>
      </div>
      <span style={{flex: flexList[4].flex}}>{formatCash(quantity)}</span>
    </div>
  )
}

export default AssetsItem