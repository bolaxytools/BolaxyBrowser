import React from 'react';
import { syncHistoryWithStore } from 'mobx-react-router'
import { Switch, Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import * as store from 'store/index'

import { BaseStyles } from 'styles/styles';
import Provider from './Provider'
import Header from '../Header';
import styles from './index.less';
import {asynchronousComponents} from 'components/Header/nav';
import {ROUTE_LIST} from 'constants/index';
import IntlWrapper from './IntlWrapper';

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, store.routerStore)

const AppWrapper = ({ children }: { children?: React.ReactNode }) => <div className = {styles.appWrapper}>{children}</div>
const TypeArea = ({ children }: { children?: React.ReactNode }) => <div className = {styles.typeArea}>{children}</div>
const App: React.FC = () => {
  return (
    <Provider>
      <BaseStyles/>
      <IntlWrapper>
        <AppWrapper>
          <TypeArea>
            <Router history = {history}>
              <Header></Header>
              <Switch>
                {ROUTE_LIST.map(m => {
                  if (!m.path) {
                      return null
                  }
                  return (
                    <Route
                        key = {m.id}
                        exact = {m.exact}
                        path = {m.path}
                        component = {m.component ? asynchronousComponents[m.component] : undefined}
                    />
                  )
                })}
              </Switch>
            </Router>
            <p className = {styles.footerText}>bolaxy © 2019</p>
          </TypeArea>
        </AppWrapper>
      </IntlWrapper>
    </Provider>
  );
}

export default App;
