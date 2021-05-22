import { IActiveElements, IContext, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export type UseToolsState = Pick<IContext, 'tools' | 'setTools'> &
  Pick<IActiveElements, 'activeToolIndex' | 'setActiveToolIndex' | 'activeTool'>

export const useTools = (): UseToolsState => {
  const {
    tools,
    setTools,
    activeElements: { setActiveToolIndex, activeToolIndex, activeTool },
  } = useContext(DravinciContext)
  return { tools, setTools, setActiveToolIndex, activeToolIndex, activeTool }
}
