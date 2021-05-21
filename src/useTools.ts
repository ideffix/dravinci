import { IActiveElements, IContext, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export type UseToolsState = Pick<IContext, 'tools' | 'setTools'> &
  Pick<IActiveElements, 'tool' | 'setTool'>

export const useTools = (): UseToolsState => {
  const {
    tools,
    setTools,
    activeElements: { setTool, tool },
  } = useContext(DravinciContext)
  return { tools, setTools, setTool, tool }
}
