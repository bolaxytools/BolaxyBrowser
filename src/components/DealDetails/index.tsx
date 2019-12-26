import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.less'
import DetailTitleView from 'common/DetailTitleView';
import airplane_deal from 'assets/airplane_deal.png';
import send_deal from 'assets/send_deal.png';
import { RootConsumer } from 'components/App/Provider'
import {queryURL} from 'utils/index';
import {PAGE_PATH} from 'constants/index';
import intl from 'react-intl-universal';

interface IProps {
  dealStore: IDealStore.DealStore
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
            {this.renderH(transactionDetails)}
            {this.renderB(transactionDetails)}
          </div>
        </div>
      </section>
    )
  }

  renderH ({addr_from, addr_to} : IHomeStore.Transaction) {
    return (
      <div className = {styles.contentH}>
        <div className = {styles.hTitle}>
          <span>{intl.get('FROM')}</span>
          <span>{intl.get('TO')}</span>
        </div>
        <div className = {styles.hContent}>
          <p>{addr_from}</p>
          <img src={send_deal} alt="" width={60} height={60}/>
          <p>{addr_to}</p>
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
          <span>{amount}</span>
          <p>{intl.get('AMOUNT')}</p>
        </li>
        <li>
          <span>{miner_fee}</span>
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
          {({ dealStore, routerStore }) => (
              <DealDetails
                dealStore = {dealStore}
                routerStore = {routerStore}
              />
          )}
      </RootConsumer>
  )
}

export default Wrapper