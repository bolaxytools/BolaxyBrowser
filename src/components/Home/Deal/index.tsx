import React from 'react';
import styles from '../Block/index.less';
import {DEAL_HEADER} from 'constants/index';
import useRootStore from 'store/useRootStore';
import { observer } from 'mobx-react';
import DealItem from 'common/DealItem';
import ListHeaderView from 'common/ListHeaderView';
import intl from 'react-intl-universal';

function SearchTx () {
  const {searchStore} = useRootStore()
  const txs = searchStore.transactions
  return (
    <div className = {styles.content}>
      <h5>{intl.get('TX')}</h5>
      <div className = {styles.searchContent}>
        <p>{intl.get('QUERY_RESULT')}</p>
        <ListHeaderView headers = {DEAL_HEADER}/>
        <div>
          {txs.map((v, i) => <div key = {String(i)}>
            <DealItem item = {v} flexList = {DEAL_HEADER}/>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default observer(SearchTx)