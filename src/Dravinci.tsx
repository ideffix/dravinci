import React, { Dispatch, SetStateAction, useState } from 'react'

export type Context = {
  tools: Tools
  setTools: Dispatch<SetStateAction<Tools>>
  palette: Palette
  setPalette: Dispatch<SetStateAction<Palette>>
  activeElements: ActiveElements
}

export type ActiveElements = {
  tool: Tool
  setTool: Dispatch<SetStateAction<Tool>>
  color: Color
  setColor: Dispatch<SetStateAction<Color>>
}

export type Tools = Tool[]

export type Tool = 'pencil' | 'rubber'

export type Color = '#000000' | '#ffffff'

export type Palette = Color[]

const defaultPalette: Palette = ['#000000', '#ffffff']

const defaultTools: Tool[] = ['pencil', 'rubber']

const stubDispatcher = () => {}

const defaultContextValue: Context = {
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
