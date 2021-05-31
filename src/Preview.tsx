import React from 'react'
import { useActiveElements } from './useActiveElements'

export const Preview: React.VFC = () => {
  const { activeColor, activeTool, activeSize } = useActiveElements()

  return (
    <div>
      <div>Active color: {activeColor}</div>
      <div>Active tool: {activeTool}</div>
      <div>Active size: {activeSize}</div>
    </div>
  )
}
