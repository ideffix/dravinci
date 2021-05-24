import { IActiveElements, IContext, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export type UseToolsState = Pick<IContext, 'tools' | 'setTools'> &
  Pick<IActiveElements, 'activeTool' | 'setActiveTool'>

export const useTools = (): UseToolsState => {
  const {
    tools,
    setTools,
    activeElements: { activeTool, setActiveTool },
  } = useContext(DravinciContext)
  return { tools, setTools, setActiveTool, activeTool }
}
