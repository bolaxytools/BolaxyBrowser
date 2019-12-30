import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.less'
import DetailTitleView from 'common/DetailTitleView';
import airplane_deal from 'assets/airplane_deal.png';
import send_deal from 'assets/send_deal.png';
import { RootConsumer } from 'components/App/Provider'
import {queryURL, formatNumber} from 'utils/index';
import {PAGE_PATH} from 'constants/index';
import intl from 'react-intl-universal';

interface IProps {
  dealStore: IDealStore.DealStore
  searchStore: ISearchStore.SearchStore
  routerStore: RouterStore
}

@observer
class DealDetails extends React.Component<IProps> {

  private txhash: string = ''
  componentWillMount() {
    const {getTransactionDetails} = this.props.dealStore
    this.txhash = queryURL('txhash')
    getTransactionDetails(this.txhash)
  }

  back = () => {
    this.props.routerStore.replace(PAGE_PATH.DEAL)
  }

  searchAddress = (addr: string) => {
    const {setSearchValue} = this.props.searchStore
    setSearchValue(addr)
    console.log(addr)
    this.props.routerStore.replace(PAGE_PATH.HOME)
  }

  render () {
    const {transactionDetails} = this.props.dealStore
    return (
      <section>
        <div className = {styles.container}>
          <DetailTitleView title = {intl.get('TX_DETAILS')} hash = {intl.get('HASH_VALUE') + this.txhash} img = {airplane_deal} lineColor = '#C182AE'/>
          <div className = {styles.backBtn} onClick = {this.back}>
            <span>{intl.get('BACK_TO_TXS')}</span>
          </div>
          <div className = {styles.content}>
            {this.renderH(transactionDetails, this.searchAddress)}
            {this.renderB(transactionDetails)}
          </div>
        </div>
      </section>
    )
  }

  renderH ({addr_from, addr_to} : IHomeStore.Transaction, searchAddress: (addr: string) => void) {
    return (
      <div className = {styles.contentH}>
        <div className = {styles.hTitle}>
          <span>{intl.get('FROM')}</span>
          <span>{intl.get('TO')}</span>
        </div>
        <div className = {styles.hContent}>
          <p onClick = {() => searchAddress(addr_from)}>{addr_from}</p>
          <img src={send_deal} alt="" width={60} height={60}/>
          <p onClick = {() => searchAddress(addr_to)}>{addr_to}</p>
        </div>
      </div>
    )
  }

  renderB ({amount, miner_fee, block_height} : IHomeStore.Transaction) {
    return (
      <ul className = {styles.contentB}>
        <li>
          <div>
            <div className = {styles.progressTitle}>
              <span>inner</span>
              <span>outer</span>
              <span>main</span>
            </div>
            <div className = {styles.progress}>
              <span style = {{width: '100px'}}></span>
            </div>
          </div>
          <p>{intl.get('CONFIRM_LEVEL')}</p>
        </li>
        <li>
          <span>{formatNumber(amount) || 0}</span>
          <p>{intl.get('AMOUNT')}</p>
        </li>
        <li>
          <span>{formatNumber(miner_fee) || 0}</span>
          <p>{intl.get('FEE')}</p>
        </li>
        <li>
          <span>{block_height}</span>
          <p>{intl.get('BLOCK_HEIGHT')}</p>
        </li>
      </ul>
    )
  }
}

function Wrapper () {
  return (
    <RootConsumer>
          {({ dealStore, routerStore, searchStore }) => (
              <DealDetails
                dealStore = {dealStore}
                routerStore = {routerStore}
                searchStore = {searchStore}
              />
          )}
      </RootConsumer>
  )
}

export default Wrapper