import { IContext, DravinciContext, IActiveElements } from './Dravinci'
import { useContext } from 'react'

export type UsePaletteState = Pick<IContext, 'palette' | 'setPalette'> &
  Pick<IActiveElements, 'color' | 'setColor'>

export const usePalette = (): UsePaletteState => {
  const {
    palette,
    setPalette,
    activeElements: { color, setColor },
  } = useContext(DravinciContext)
  return { palette, setPalette, color, setColor }
}
