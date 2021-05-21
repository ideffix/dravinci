import React, { Dispatch, SetStateAction, useState } from 'react'

export type IContext = {
  tools: ITools
  setTools: Dispatch<SetStateAction<ITools>>
  palette: IPalette
  setPalette: Dispatch<SetStateAction<IPalette>>
  activeElements: IActiveElements
}

export type IActiveElements = {
  tool: ITool
  setTool: Dispatch<SetStateAction<ITool>>
  color: IColor
  setColor: Dispatch<SetStateAction<IColor>>
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
    color: defaultPalette[0],
    setColor: stubDispatcher,
    tool: defaultTools[0],
    setTool: stubDispatcher,
  },
}

export const DravinciContext = React.createContext(defaultContextValue)

export const Dravinci: React.FC = ({ children }) => {
  const [tool, setTool] = useState(defaultContextValue.activeElements.tool)
  const [color, setColor] = useState(defaultContextValue.activeElements.color)

  const [palette, setPalette] = useState(defaultContextValue.palette)
  const [tools, setTools] = useState(defaultContextValue.tools)

  return (
    <DravinciContext.Provider
      value={{
        tools,
        setTools,
        palette,
        setPalette,
        activeElements: { tool, setTool, color, setColor },
      }}
    >
      {children}
    </DravinciContext.Provider>
  )
}
