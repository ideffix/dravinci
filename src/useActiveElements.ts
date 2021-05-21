import { ActiveElements, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export const usePalette = (): ActiveElements => {
  const { activeElements } = useContext(DravinciContext)
  return activeElements
}
