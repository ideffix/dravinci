import { IContext, DravinciContext, IActiveElements } from './Dravinci'
import { useContext } from 'react'

export type UsePaletteState = Pick<IContext, 'palette' | 'setPalette'> &
  Pick<
    IActiveElements,
    'activeColorIndex' | 'setActiveColorIndex' | 'activeColor'
  >

export const usePalette = (): UsePaletteState => {
  const {
    palette,
    setPalette,
    activeElements: { activeColorIndex, setActiveColorIndex, activeColor },
  } = useContext(DravinciContext)
  return {
    palette,
    setPalette,
    activeColorIndex,
    setActiveColorIndex,
    activeColor,
  }
}
