import React from 'react'
import Search from './Search';
import Base from './Base';
import { observer } from 'mobx-react';
import useRootStore from 'store/useRootStore';
import SearchBlock from './Block';
import SearchTx from './Deal';
import SearchAddress from './Address';
import SearchEmpty from './Empty';
import {SEARCH_TYPES} from 'constants/index';

function Home () {
  const {type, isEmpty, searchValue} = useRootStore().searchStore
  const searchView = (type: string, isEmpty: boolean) : React.ReactNode => {
    if (isEmpty) return <SearchEmpty/>
    switch(type) {
      case SEARCH_TYPES.ADDRESS:
        return <SearchAddress/>
      case SEARCH_TYPES.BLOCK:
        return <SearchBlock/>
      case SEARCH_TYPES.HASH:
        return <SearchTx/>
    }
  }
  return (
    <main>
      <Search/>
      {
        searchValue === '' ? <Base/> : searchView(type, isEmpty)
      }
    </main>
  )
}

export default observer(Home)