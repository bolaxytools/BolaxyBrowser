import React from 'react';
import styles from './index.less';
import ListHeaderView from 'common/ListHeaderView';

interface IProps {
  title: string
  children?: React.ReactNode
  headers: any[]
}

function BaseListView ({children, headers, title} : IProps) {
  return (
    <main>
      <h3 className = {styles.title}>{title}</h3>
      <section>
        <div className = {styles.contentDv}>
          <ListHeaderView headers = {headers}/>
          <div className = {styles.list}>
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BaseListView