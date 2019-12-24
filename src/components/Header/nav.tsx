import React from 'react'
import Loadable from 'react-loadable'

const loadComponent = (loader: () => Promise<any>) => Loadable({loader,
  loading: () => <div>Loading...</div>
})

export const asynchronousComponents = {
  Assets: loadComponent(() => import(/* webpackChunkName: "assets" */ 'components/Assets')),
  Blocks: loadComponent(() => import(/* webpackChunkName: "blocks" */ 'components/Blocks')),
  Home: loadComponent(() => import(/* webpackChunkName: "home" */ 'components/Home')),
  Deal: loadComponent(() => import(/* webpackChunkName: "deal" */ 'components/Deal')),
  DealDetails: loadComponent(() => import(/* webpackChunkName: "assets" */ 'components/DealDetails')),
  BlockDetails: loadComponent(() => import(/* webpackChunkName: "assets" */ 'components/BlockDetails')),
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface INav {
  title: string
  id: number
  pid?: number
  path: string
  component?: AsynchronousComponentKeys
  exact?: boolean
}

export const nav: INav[] = [
  {
      id: 1,
      path: '/',
      title: 'OVERVIEW',
      component: 'Home',
      exact: true
  },
  {
      id: 2,
      path: '/deal',
      title: 'TX',
      component: 'Deal',
      exact: true
  },
  {
    id: 3,
    path: '/block',
    title: 'BLOCK',
    component: 'Blocks',
    exact: true
  },
  {
    id: 4,
    path: '/assets',
    title: 'ASSETS',
    component: 'Assets',
    exact: true
  }
]

export default nav
