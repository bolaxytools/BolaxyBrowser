import React from 'react'
import { observer } from 'mobx-react'
// import styles from './index.less'
import BaseListView from 'common/BaseListView';
import {DEAL_HEADER} from 'constants/index';
import DealItem from 'common/DealItem';
import {useOnMount} from 'utils/hooks';
import useRootStore from 'store/useRootStore';
import {Pagination} from 'antd';
import intl from 'react-intl-universal';

function Deal () {
  const {getTransactions, transactions, changePageIndex, changePageSize, total} = useRootStore().dealStore
  useOnMount(getTransactions)
  return (
    <div>
      <BaseListView title = {intl.get('TX')} headers = {DEAL_HEADER}>
      {transactions && transactions.map((v: IHomeStore.Transaction, i: number) => (
        <div key = {String(i)}>
          <DealItem item = {v} flexList = {DEAL_HEADER}/>
        </div>
      ))}
      </BaseListView>
      <div style = {{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '30px'
      }}>
        <Pagination
        showSizeChanger
        defaultCurrent = {1}
        total = {total}
        showQuickJumper
        onChange = {changePageIndex}
        onShowSizeChange = {changePageSize}
        />
      </div>
    </div>
  )
}

export default observer(Deal)