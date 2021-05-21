import { Context, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export type UsePaletteState = Pick<Context, 'palette' | 'setPalette'>

export const usePalette = (): UsePaletteState => {
  const { palette, setPalette } = useContext(DravinciContext)
  return { palette, setPalette }
}
