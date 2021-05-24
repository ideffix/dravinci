import React from 'react'
import { useTools } from './useTools'
import { IActiveElements, ITool } from './Dravinci'

export const Tools: React.VFC = () => {
  const { tools, activeTool, setActiveTool } = useTools()

  return (
    <div>
      {tools.map((t, i) => (
        <Tool
          key={i}
          tool={t}
          activeTool={activeTool}
          setActiveTool={setActiveTool}
        />
      ))}
    </div>
  )
}

type IProps = {
  tool: ITool
} & Pick<IActiveElements, 'activeTool' | 'setActiveTool'>

const Tool: React.FC<IProps> = ({ tool, activeTool, setActiveTool }) => (
  <>
    <input
      type={'radio'}
      name={'tool'}
      value={tool}
      checked={tool === activeTool}
      onChange={(e) => setActiveTool(e.target.value as ITool)}
    />
    {tool}
  </>
)
