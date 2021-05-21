import React from 'react'
import { useActiveElements } from './useActiveElements'

export const Preview: React.VFC = () => {
  const { color, tool } = useActiveElements()

  return (
    <div>
      <div>Active color: {color}</div>
      <div>Active tool: {tool}</div>
    </div>
  )
}
