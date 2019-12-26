import React, {useRef} from 'react'
import { findDOMNode } from 'react-dom';
import { observer } from 'mobx-react'
import styles from './index.less'
import logo from 'assets/logo.png';
import {INav, nav} from './nav';
import useRootStore from 'store/useRootStore';
import {SUPPOER_LOCALES, LOCALES_KEYS, LOCALSTORAGE_KEYS} from 'constants/index';
import push_down_white from 'assets/push_down_white.png';
import push_down_highlight from 'assets/push_down_highlight.png';
import {useOnMount} from 'utils/hooks';
import { find } from 'lodash';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom'

function navList(navs: INav[], currentPath: string) {
  return (
    <ul>
      {navs.map(v => (
         <li key={String(v.id)}>
          <Link className={currentPath.includes(v.path + '/') || currentPath === v.path ? styles.selected : styles.unSelected} to={v.path}>{intl.get(v.title)}</Link>
       </li>
      ))}
    </ul>
  )
}


function Header() {
  const {location} = useRootStore().routerStore
  const navs = navList(nav, location.pathname)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [currentLang, setCurrentLang] = React.useState(LOCALES_KEYS.EN_US)
  const setLang = () => {
    const local = localStorage.getItem(LOCALSTORAGE_KEYS.LANG) as LOCALES_KEYS
    setCurrentLang(local)
  }
  useOnMount(setLang)
  const refFa = useRef(null);
  const changeLange = (value: LOCALES_KEYS) => {
    window.localStorage.setItem(LOCALSTORAGE_KEYS.LANG, value)
    window.location.reload()
  }
  const docClick = () => {
    window.document.onclick = ({target}: MouseEvent) => {
      const faComponent = findDOMNode(refFa.current)
      if (faComponent) {
        const isChild = faComponent.contains(target as Node)
        if (!isChild) modalVisible && setModalVisible(false)
      }
    }
  }
  useOnMount(docClick)
  return (
      <header className = {styles.header}>
        <Link to="/"><img src = {logo} alt = 'bolaxy' width = {126} height = {18}></img></Link>
        <div className = {styles.navBox}>
          {navs}
          <div className = {styles.language} ref = {refFa}>
              <div className = {modalVisible ? styles.langBtn_open : styles.langBtn_close} onClick = {() => {setModalVisible(!modalVisible)}}>
                  <span>{find(SUPPOER_LOCALES, {value: currentLang})?.name}</span>
                  <img src={modalVisible ? push_down_highlight : push_down_white} width = {10} height = {7} alt=""/>
              </div>
              <div className = {modalVisible ? styles.show : styles.hide}>
                {SUPPOER_LOCALES.map(v => {
                  if (currentLang === v.value)
                  return null
                  else
                  return <div key = {v.value} className = {styles.langItem} onClick = {() => changeLange(v.value)}>
                            <span>{v.name}</span>
                          </div>
                })}
              </div>
          </div>
        </div>
      </header>
  )
}

export default observer(Header)
