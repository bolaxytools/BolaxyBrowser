import React from 'react';
import styles from './index.less';
import {formatCash} from 'utils';

interface IProps {
  item: ISearchStore.Address,
  flexList: any[]
}

function AssetsItem ({item, flexList} : IProps) {
  const {hashText} = styles
  const {symbol, contract, type, name, quantity, logo} = item
  return (
    <div className = {styles.item}>
      <span className = {hashText} style={{flex: flexList[0].flex}}>{name}</span>
      <span className = {hashText} style={{flex: flexList[1].flex}}>{contract}</span>
      <span style={{flex: flexList[2].flex}}>{type}</span>
      <div className = {styles.imgText} style={{flex: flexList[3].flex}}>
        <img src={logo} alt="" width = {18} height = {18}/>
        <span>{symbol}</span>
      </div>
      <span style={{flex: flexList[4].flex}}>{formatCash(quantity)}</span>
    </div>
  )
}

export default AssetsItem