import { RouterStore } from 'mobx-react-router'

export const routerStore = new RouterStore()

export { default as searchStore } from './searchStore'
export { default as globalStore } from './globalStore'
export { default as homeStore } from './homeStore'
export { default as dealStore } from './dealStore'
export { default as blockStore } from './blockStore'
export { default as assetsStore } from './assetsStore'