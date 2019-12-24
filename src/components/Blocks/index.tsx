import React from 'react'
import { observer } from 'mobx-react'
import BaseListView from 'common/BaseListView';
import {BLOCK_HEADER} from 'constants/index';
import BlockItem from 'common/BlockItem';
import {useOnMount} from 'utils/hooks';
import useRootStore from 'store/useRootStore';
import {Pagination} from 'antd';
import intl from 'react-intl-universal';

function Blocks () {
  const {getBlocks, blocks, changePageIndex, changePageSize, total} = useRootStore().blockStore
  useOnMount(getBlocks)
  return (
    <div>
      <BaseListView title = {intl.get('BLOCK')} headers = {BLOCK_HEADER}>
        {blocks && blocks.map((v: IHomeStore.Blocks, i: number) => (
          <div key = {String(i)}>
            <BlockItem item = {v} flexList = {BLOCK_HEADER}/>
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


export default observer(Blocks)