import React from 'react';
import styles from './index.less';
import {BLOCK_HEADER} from 'constants/index';
import useRootStore from 'store/useRootStore';
import { observer } from 'mobx-react';
import BlockItem from 'common/BlockItem';
import ListHeaderView from 'common/ListHeaderView';
import intl from 'react-intl-universal';

function SearchBlock () {
  const {searchStore} = useRootStore()
  const blocks = searchStore.blocks
  return (
    <div className = {styles.content}>
      <h5>{intl.get('BLOCK')}</h5>
      <div className = {styles.searchContent}>
        <p>{intl.get('QUERY_RESULT')}</p>
        <ListHeaderView headers = {BLOCK_HEADER}/>
        <div>
          {blocks.map((v, i) => <div key = {String(i)}>
            <BlockItem item = {v} flexList = {BLOCK_HEADER}/>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default observer(SearchBlock)