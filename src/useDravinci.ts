import { IContext, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export const useDravinci = (): IContext => useContext(DravinciContext)
