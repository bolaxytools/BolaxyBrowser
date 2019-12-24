import { useContext } from 'react'

import { RootContext } from 'components/App/Provider'

export default function useRootStore() {
    return useContext(RootContext)
}
