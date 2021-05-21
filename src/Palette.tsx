import React from 'react'
import { usePalette } from './usePalette'
import { IActiveElements, IColor } from './Dravinci'

export const Palette: React.VFC = () => {
  const { palette, setColor, color: activeColor } = usePalette()

  return (
    <div>
      {palette.map((color) => (
        <ColorBox
          key={color}
          color={color}
          setColor={setColor}
          activeColor={activeColor}
        />
      ))}
    </div>
  )
}

type IProps = Pick<IActiveElements, 'color' | 'setColor'> & {
  activeColor: IColor
}

const ColorBox: React.FC<IProps> = ({ color, setColor, activeColor }) => (
  <>
    <input
      type={'radio'}
      name={'color'}
      value={color}
      checked={color === activeColor}
      onChange={(e) => setColor(e.target.value as IColor)}
    />
    {color}
  </>
)
