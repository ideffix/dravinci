import React, { Dispatch, SetStateAction, useState } from 'react'

export type Offset = {
  offsetX: number
  offsetY: number
}

export type IContext = {
  tools: ITools
  setTools: Dispatch<SetStateAction<ITools>>
  palette: IPalette
  setPalette: Dispatch<SetStateAction<IPalette>>
  activeElements: IActiveElements
}

export type IActiveElements = {
  activeTool: ITool
  setActiveTool: Dispatch<SetStateAction<ITool>>
  activeColor: IColor
  activeColorIndex: number
  setActiveColorIndex: Dispatch<SetStateAction<number>>
}

export type ITools = ITool[]

export type ITool = 'pencil' | 'rubber' | 'bucket'

export type IColor = string

export type IPalette = IColor[]

const defaultPalette: IPalette = [
  '#000000',
  '#ffffff',
  '#FF0000',
  '#FFFF00',
  '#00FF00',
  '#0000FF',
]

const defaultTools: ITool[] = ['pencil', 'rubber', 'bucket']

const stubDispatcher = () => {}

const defaultContextValue: IContext = {
  tools: defaultTools,
  setTools: stubDispatcher,
  palette: defaultPalette,
  setPalette: stubDispatcher,
  activeElements: {
    activeColor: defaultPalette[0],
    activeColorIndex: 0,
    setActiveColorIndex: stubDispatcher,
    activeTool: defaultTools[0],
    setActiveTool: stubDispatcher,
  },
}

export const DravinciContext = React.createContext(defaultContextValue)

export const Dravinci: React.FC = ({ children }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(
    defaultContextValue.activeElements.activeColorIndex
  )
  const [activeTool, setActiveTool] = useState(
    defaultContextValue.activeElements.activeTool
  )

  const [palette, setPalette] = useState(defaultContextValue.palette)
  const [tools, setTools] = useState(defaultContextValue.tools)

  const activeColor = palette[activeColorIndex]

  return (
    <DravinciContext.Provider
      value={{
        tools,
        setTools,
        palette,
        setPalette,
        activeElements: {
          activeColorIndex,
          setActiveColorIndex,
          activeTool,
          setActiveTool,
          activeColor,
        },
      }}
    >
      {children}
    </DravinciContext.Provider>
  )
}
