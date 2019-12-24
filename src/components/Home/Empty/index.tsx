import React from 'react';
import styles from './index.less';
import null_information from 'assets/null_information.png';
import intl from 'react-intl-universal';

function SearchEmpty () {
  return (
    <div className = {styles.searchContent}>
      <p>{intl.get('QUERY_RESULT')}</p>
      <div className = {styles.empty}>
        <img src={null_information} alt="empty"/>
        <p>{intl.get('EMPTY_RESULT')}</p>
      </div>
    </div>
  )
}

export default SearchEmpty