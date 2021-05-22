import React from 'react'
import { useTools } from './useTools'
import { IActiveElements, ITool } from './Dravinci'

export const Tools: React.VFC = () => {
  const { setActiveToolIndex, tools, activeToolIndex } = useTools()

  return (
    <div>
      {tools.map((t, i) => (
        <Tool
          key={i}
          activeToolIndex={activeToolIndex}
          setActiveToolIndex={setActiveToolIndex}
          tool={t}
          toolIndex={i}
        />
      ))}
    </div>
  )
}

type IProps = {
  toolIndex: number
  tool: ITool
} & Pick<IActiveElements, 'activeToolIndex' | 'setActiveToolIndex'>

const Tool: React.FC<IProps> = ({
  tool,
  toolIndex,
  activeToolIndex,
  setActiveToolIndex,
}) => (
  <>
    <input
      type={'radio'}
      name={'tool'}
      value={toolIndex}
      checked={toolIndex === activeToolIndex}
      onChange={(e) => setActiveToolIndex(+e.target.value)}
    />
    {tool}
  </>
)
