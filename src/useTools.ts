import { ActiveElements, Context, DravinciContext } from './Dravinci'
import { useContext } from 'react'

export type UseToolsState = Pick<Context, 'tools' | 'setTools'> &
  Pick<ActiveElements, 'tool' | 'setTool'>

export const useTools = (): UseToolsState => {
  const {
    tools,
    setTools,
    activeElements: { setTool, tool },
  } = useContext(DravinciContext)
  return { tools, setTools, setTool, tool }
}
