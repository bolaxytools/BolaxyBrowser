import React from 'react'
import { observer } from 'mobx-react'
import BaseListView from 'common/BaseListView';
import {ADDRESS_HEADER} from 'constants/index';
import AssetsItem from 'common/AssetsItem';
import {useOnMount} from 'utils/hooks';
import useRootStore from 'store/useRootStore';
import {Pagination} from 'antd';
import intl from 'react-intl-universal';

function Assets () {
  const {getAssets, assets, changePageIndex, changePageSize, total} = useRootStore().assetsStore
  useOnMount(getAssets)
  return (
    <div>
      <BaseListView title = {intl.get('ASSETS')} headers = {ADDRESS_HEADER}>
      {assets && assets.map((v: ISearchStore.Address, i: number) => (
        <div key = {String(i)}>
          <AssetsItem item = {v} flexList = {ADDRESS_HEADER}/>
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


export default observer(Assets)