import { Context, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export const useDravinci = (): Context => useContext(DravinciContext)
