import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.less'
import DetailTitleView from 'common/DetailTitleView';
import signal_block from 'assets/signal_block.png';
import {useOnMount} from 'utils/hooks';
import {PAGE_PATH} from 'constants/index';
import useRootStore from 'store/useRootStore';
import {queryURL} from 'utils/index';
import intl from 'react-intl-universal';

interface IProps {
  item?: string[]
}

function Signals ({item} : IProps) {
  return (
    <div>
      {item && item.map((v, i) => (
        <div className = {styles.item} key = {String(i)}>
          <span>{v}</span>
        </div>
      ))}
    </div>
  )
}


function BlockDetails () {
  const {blockStore, routerStore} = useRootStore()
  const {blockDetails, getBlockDetails, isCanDown} = blockStore
  const height = Number(queryURL('height'))
  useOnMount(getBlockDetails, height)
  const {hash, tx_count, signers} = blockDetails
  const toBack = () => {
    routerStore.replace(PAGE_PATH.BLOCK)
  }
  const toUpBlock = () => {
    const h = height - 1
    if (h < 0) return
    routerStore.replace(PAGE_PATH.BLOCK_DETAILS + h)
  }
  const toDownBlock = () => {
    if (!isCanDown) return
    const h = height + 1
    routerStore.replace(PAGE_PATH.BLOCK_DETAILS + h)
  }
  return (
    <div className = {styles.container}>
      <DetailTitleView title = {intl.get('BLOCK_DETAILS')} lineColor = '#76AA4F' hash = {intl.get('BLOCK_H') + hash} img = {signal_block}/>
      <div className = {styles.jumpDv}>
        <div onClick = {toBack}>
          <span>{intl.get('BACK_BLOCKS')}</span>
        </div>
        <div className = {styles.updown}>
          <span onClick = {toUpBlock}>{intl.get('UP_BLOCK')}</span>
          <span onClick = {toDownBlock}>{intl.get('DOWN_BLOCK')}</span>
        </div>
      </div>
      <div className = {styles.content}>
        <div className = {styles.contentH}>
          <div>
            <span>{blockDetails.height}</span>
            <span>{intl.get('BLOCK_HEIGHT')}</span>
          </div>
          <div>
            <span>{tx_count}</span>
            <span>{intl.get('TX')}</span>
          </div>
        </div>
        <div className = {styles.contentB}>
          <p className = {styles.bTitle}>{intl.get('SIGNERS')}</p>
          <Signals item = {signers}></Signals>
        </div>
      </div>
    </div>
  )
}

export default observer(BlockDetails)
