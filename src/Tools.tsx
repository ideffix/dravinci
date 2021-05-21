import React from 'react'
import { useTools } from './useTools'
import { IActiveElements, IColor, ITool } from './Dravinci'

export const Tools: React.VFC = () => {
  const { setTool, tools, tool } = useTools()

  return (
    <div>
      {tools.map((t) => (
        <Tool key={t} tool={t} setTool={setTool} activeTool={tool} />
      ))}
    </div>
  )
}

type IProps = Pick<IActiveElements, 'tool' | 'setTool'> & { activeTool: ITool }

const Tool: React.FC<IProps> = ({ tool, setTool, activeTool }) => (
  <>
    <input
      type={'radio'}
      name={'tool'}
      value={tool}
      checked={tool === activeTool}
      onChange={(e) => setTool(e.target.value as ITool)}
    />
    {tool}
  </>
)
