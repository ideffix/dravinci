import { IActiveElements } from './Dravinci'
import { useActiveElements } from './useActiveElements'

export type UseSizerState = Pick<
  IActiveElements,
  'activeSize' | 'setActiveSize'
>

export const useSizer = (): UseSizerState => {
  const { activeSize, setActiveSize } = useActiveElements()
  return {
    activeSize,
    setActiveSize,
  }
}
