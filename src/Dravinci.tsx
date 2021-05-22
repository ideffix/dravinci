import React, { Dispatch, SetStateAction, useState } from 'react'

export type IContext = {
  tools: ITools
  setTools: Dispatch<SetStateAction<ITools>>
  palette: IPalette
  setPalette: Dispatch<SetStateAction<IPalette>>
  activeElements: IActiveElements
}

export type IActiveElements = {
  activeTool: ITool
  activeToolIndex: number
  setActiveToolIndex: Dispatch<SetStateAction<number>>
  activeColor: IColor
  activeColorIndex: number
  setActiveColorIndex: Dispatch<SetStateAction<number>>
}

export type ITools = ITool[]

export type ITool = 'pencil' | 'rubber'

export type IColor = '#000000' | '#ffffff'

export type IPalette = IColor[]

const defaultPalette: IPalette = ['#000000', '#ffffff']

const defaultTools: ITool[] = ['pencil', 'rubber']

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
    activeToolIndex: 0,
    setActiveToolIndex: stubDispatcher,
  },
}

export const DravinciContext = React.createContext(defaultContextValue)

export const Dravinci: React.FC = ({ children }) => {
  const [activeToolIndex, setActiveToolIndex] = useState(
    defaultContextValue.activeElements.activeToolIndex
  )
  const [activeColorIndex, setActiveColorIndex] = useState(
    defaultContextValue.activeElements.activeColorIndex
  )

  const [palette, setPalette] = useState(defaultContextValue.palette)
  const [tools, setTools] = useState(defaultContextValue.tools)

  const activeTool = tools[activeToolIndex]
  const activeColor = palette[activeColorIndex]

  return (
    <DravinciContext.Provider
      value={{
        tools,
        setTools,
        palette,
        setPalette,
        activeElements: {
          activeToolIndex,
          setActiveToolIndex,
          activeColorIndex,
          setActiveColorIndex,
          activeTool,
          activeColor,
        },
      }}
    >
      {children}
    </DravinciContext.Provider>
  )
}
