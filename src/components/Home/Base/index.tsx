import React from 'react';
import styles from './index.less';
import money from 'assets/money.png';
import diamonds_blue from 'assets/diamonds_blue.png';
import DealItem from 'common/DealItem';
import BlockItem from 'common/BlockItem';
import {DEAL_HEADER, BLOCK_HEADER} from 'constants/index';
import {useOnMount} from 'utils/hooks';
import useRootStore from 'store/useRootStore';
import { observer } from 'mobx-react';
import {formatCash, formatNumber} from 'utils';
import ListHeaderView from 'common/ListHeaderView';
import {PAGE_PATH} from 'constants/index';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

interface COIProps {
  homeData: IHomeStore.IHome
  routerStore: RouterStore
}
const CircleOverview = ({homeData, routerStore}: COIProps) => {
  const {content, contentInfo} = styles
  const toJump = (path: string) => {
	  routerStore.history.push(path)
  }
  const {chain_id, block_count, address_count, main_coin_count, tx_count, gas_cost_count} = homeData
  return (
    <div className={styles.circleOverview}>
      <div className={styles.titleDv}>
        <span>{intl.get('CIRCLE_OVERVIEW')}</span>
        <span>chainId：{chain_id}</span>
      </div>
      <div className={styles.contentDv}>
        <div className={content}>
          <div className={contentInfo}>
            <p>{formatCash(address_count)}</p>
            <p>{intl.get('ADDRESS_COUNT')}</p>
          </div>
          <div className={contentInfo} onClick = {() => toJump(PAGE_PATH.DEAL)}>
            <p>{formatCash(tx_count)}</p>
            <p>{intl.get('TX_COUNT')}</p>
          </div>
          <div className={contentInfo} onClick = {() => toJump(PAGE_PATH.BLOCK)}>
            <p>{formatCash(block_count)}</p>
            <p>{intl.get('BLOCK_COUNT')}</p>
          </div>
        </div>
        <div className={content}>
          <div className={contentInfo}>
            <p>{formatCash(formatNumber(main_coin_count))}</p>
            <p>{intl.get('COIN_COUNT')}</p>
          </div>
          <div className={contentInfo}>
            <p>{formatCash(gas_cost_count)}</p>
            <p>{intl.get('GAS_COUNT')}</p>
          </div>
          <div className={contentInfo}></div>
        </div>
      </div>
    </div>
  )
}
interface IProps {
  title: String,
  titleIcon: any,
  headers: any[],
  children?: React.ReactNode
  path: string
}
const NewList = ({title, titleIcon, headers, children, path}: IProps) => {
  return (
    <div>
      <div className = {styles.newTitle}>
        <span>{title}</span>
      </div>
      <div className = {styles.contentBox}>
        <div className = {styles.imgTitle}>
          <img src={titleIcon} alt="" width = {16} height = {17}/>
          <span>{title}</span>
        </div>
        <ListHeaderView headers = {headers}/>
        <div className={styles.infoList}>
          {children}
        </div>
        <div className = {styles.more}>
          <Link to={path}>{intl.get('MORE')} →</Link>
        </div>
      </div>
    </div>
  )
}


function Base () {
  const {homeStore, routerStore} = useRootStore()
  useOnMount(homeStore.getHomeData)
  const homeData = homeStore.homeData
  const {txs, blocks} = homeData
  return (
    <div className = {styles.homeBase}>
      <CircleOverview homeData = {homeData} routerStore = {routerStore}/>
      <NewList title = {intl.get('NEW_TXS')} titleIcon = {money} headers = {DEAL_HEADER} path = {PAGE_PATH.DEAL}>
        {txs && txs.map((v, i) => (
          <div key = {String(i)}>
            <DealItem item = {v} flexList = {DEAL_HEADER}/>
          </div>
        ))}
      </NewList>
      <NewList title = {intl.get('NEW_BLOCKS')} titleIcon = {diamonds_blue} headers = {BLOCK_HEADER} path = {PAGE_PATH.BLOCK}>
        {blocks && blocks.map((v, i) => (
          <div key = {String(i)}>
            <BlockItem item = {v} flexList = {BLOCK_HEADER}/>
          </div>
        ))}
      </NewList>
    </div>
  )
}

export default observer(Base)