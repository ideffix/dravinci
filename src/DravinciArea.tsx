import React, { MouseEventHandler, useRef, useState } from 'react'
import { useActiveElements } from './useActiveElements'
import { ITools, Offset } from './Dravinci'
import { DrawableToolMap } from './drawable-tools'

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>

const CLICKABLE_TOOLS: ITools = ['bucket']

export const DravinciArea: React.FC<CanvasProps> = ({ ...rest }) => {
  const [isPainting, setIsPainting] = useState(false)
  const [prevPos, setPrevPos] = useState<Offset>({ offsetX: 0, offsetY: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { activeColor, activeTool } = useActiveElements()

  const onMouseDown: MouseEventHandler<HTMLCanvasElement> = ({
    nativeEvent,
  }) => {
    const { offsetX, offsetY } = nativeEvent
    const currentPos = { offsetX, offsetY }
    if (CLICKABLE_TOOLS.includes(activeTool)) {
      paint(currentPos)
    } else {
      setIsPainting(true)
      setPrevPos({ offsetX, offsetY })
    }
  }

  const onMouseMove: MouseEventHandler<HTMLCanvasElement> = ({
    nativeEvent,
  }) => {
    if (isPainting) {
      const { offsetX, offsetY } = nativeEvent
      const currentPos = { offsetX, offsetY }
      paint(currentPos)
      setPrevPos(currentPos)
    }
  }

  const endPaintEvent = () => {
    if (isPainting) {
      setIsPainting(false)
    }
  }

  const paint = (currPos: Offset) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      DrawableToolMap[activeTool].draw(ctx, prevPos, currPos, {
        color: activeColor,
      })
    }
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={endPaintEvent}
      onMouseUp={endPaintEvent}
      {...rest}
    />
  )
}
