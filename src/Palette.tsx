import React, { useRef } from 'react'
import { usePalette } from './usePalette'
import { IActiveElements, IColor } from './Dravinci'

export const Palette: React.VFC = () => {
  const { palette, setPalette, setActiveColorIndex, activeColorIndex } =
    usePalette()

  const changeColorProvider =
    (colorIndexToChange: number) => (newColor: IColor) => {
      setPalette(
        palette.map((el, i) => (i === colorIndexToChange ? newColor : el))
      )
    }

  return (
    <div>
      {palette.map((color, i) => (
        <ColorBox
          key={i}
          activeColorIndex={activeColorIndex}
          setActiveColorIndex={setActiveColorIndex}
          changeColor={changeColorProvider(i)}
          color={color}
          colorIndex={i}
        />
      ))}
    </div>
  )
}

type IProps = {
  changeColor: (color: IColor) => void
  color: IColor
  colorIndex: number
} & Pick<IActiveElements, 'activeColorIndex' | 'setActiveColorIndex'>

const ColorBox: React.FC<IProps> = ({
  activeColorIndex,
  setActiveColorIndex,
  changeColor,
  colorIndex,
  color,
}) => {
  const colorRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        type={'radio'}
        name={'color'}
        value={colorIndex}
        checked={colorIndex === activeColorIndex}
        onChange={(e) => setActiveColorIndex(+e.target.value)}
        onDoubleClick={() => colorRef.current?.click()}
      />
      {color}
      <input
        ref={colorRef}
        type={'color'}
        value={color}
        style={{ display: 'none' }}
        onChange={(e) => changeColor(e.target.value as IColor)}
      />
    </>
  )
}
