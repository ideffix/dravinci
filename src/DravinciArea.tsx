import React, { MouseEventHandler, useRef, useState } from 'react'
import { useActiveElements } from './useActiveElements'

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>

type Offset = {
  offsetX: number
  offsetY: number
}

export const DravinciArea: React.FC<CanvasProps> = ({ ...rest }) => {
  const [isPainting, setIsPainting] = useState(false)
  const [prevPos, setPrevPos] = useState<Offset>({ offsetX: 0, offsetY: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { activeColor } = useActiveElements()

  const onMouseDown: MouseEventHandler<HTMLCanvasElement> = ({
    nativeEvent,
  }) => {
    const { offsetX, offsetY } = nativeEvent
    setIsPainting(true)
    setPrevPos({ offsetX, offsetY })
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
    const { offsetX, offsetY } = currPos
    const { offsetX: x, offsetY: y } = prevPos

    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.beginPath()
      ctx.strokeStyle = activeColor
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.lineWidth = 5
      ctx.moveTo(x, y)
      ctx.lineTo(offsetX, offsetY)
      ctx.stroke()
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
