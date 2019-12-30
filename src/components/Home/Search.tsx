import React from 'react'
import styles from './search.less'
import searchImg from 'assets/search.png';
import { observer } from 'mobx-react';
import useRootStore from 'store/useRootStore';
import intl from 'react-intl-universal';

function Search () {
  let inputRef: React.RefObject<HTMLInputElement> = React.createRef()
  const {searchStore} = useRootStore()
  const {searchValue, setSearchValue, searchData} = searchStore
  // searchStore.setSearchValue('')
  const searchHandle = (value: string) => {
    setSearchValue(value)
    if (value !== '') {
      searchData({
        data: {
          content: value
        }
      })
    }
  }
  
  if (searchValue !== '') {
    searchHandle(searchValue)
  }
  const enterHandle = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.keyCode === 13) searchHandle(inputRef.current?.value || '')
  }

  const searchValueChange = (e: React.BaseSyntheticEvent) => {
    if (e.target.value === '') {
      setSearchValue('')
    }
  }
  return (
    <div className={styles.search}>
      <div className={styles.title}>
        <span>{intl.get('SEARCH_TITLE')}</span>
      </div>
      <div className={styles.searchBox}>
        <input type="text" placeholder={intl.get('SEARCH_P')} ref={inputRef} onKeyPress = {enterHandle} defaultValue = {searchValue} onChange = {searchValueChange}/>
        <div className={styles.searchBtn} onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            searchHandle(inputRef.current?.value || '')
          }}>
          <img src={searchImg} alt="search" height = {20} width = {20}/>
        </div>
      </div>
    </div>
  )
}


export default observer(Search)