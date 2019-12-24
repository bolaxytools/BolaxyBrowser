import React from 'react';
import styles from './index.less';
import intl from 'react-intl-universal';

interface IProps {
  title: string
  lineColor: string
  hash: string
  img: any
}

function DetailTitleView ({title, lineColor, hash, img} : IProps) {
  return (
    <div>
      <h5 className = {styles.title}>{title}</h5>
      <div className = {styles.content}>
        <img src = {img} alt=""/>
        <span>{intl.get('TYPE_NAME')}</span>
        <span className = {styles.line} style = {{backgroundColor: lineColor}}></span>
        <span>{hash}</span>
      </div>
    </div>
  )
}

export default DetailTitleView