import React from 'react';
import styles from './index.less';
import intl from 'react-intl-universal';

interface IProps {
  headers: any[]
}

function ListHeaderView ({headers} : IProps) {
  return (
    <div className = {styles.newHeader}>
      {headers.map(({title, flex}) => (
        <span key = {title} style = {{flex: flex}}>{intl.get(title)}</span>
      ))}
    </div>
  )
}

export default ListHeaderView