import { IActiveElements, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export const useActiveElements = (): IActiveElements => {
  const { activeElements } = useContext(DravinciContext)
  return activeElements
}
