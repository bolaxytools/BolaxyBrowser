import React from 'react'
import styles from './search.less'
import searchImg from 'assets/search.png';
import { observer } from 'mobx-react';
import useRootStore from 'store/useRootStore';
import intl from 'react-intl-universal';

function Search () {
  let inputRef: React.RefObject<HTMLInputElement> = React.createRef()
  const {searchStore} = useRootStore()
  const searchHandle = (value: string) => {
    searchStore.setSearchValue(value)
    if (value !== '') {
      searchStore.searchData({
        data: {
          content: value
        }
      })
    }
  }
  const enterHandle = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.keyCode === 13) searchHandle(inputRef.current?.value || '')
  }
  return (
    <div className={styles.search}>
      <div className={styles.title}>
        <span>{intl.get('SEARCH_TITLE')}</span>
      </div>
      <div className={styles.searchBox}>
        <input type="text" placeholder={intl.get('SEARCH_P')} ref={inputRef} onKeyPress = {enterHandle}/>
        <div className={styles.searchBtn} onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            searchHandle(inputRef.current?.value || '')
          }}>
          <img src={searchImg} alt="search"/>
        </div>
      </div>
    </div>
  )
}


export default observer(Search)