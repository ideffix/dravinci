import { Drawable, DrawableConfig } from './index'
import { Offset } from '../Dravinci'

export const DrawableRubber: Drawable = {
  draw(
    ctx: CanvasRenderingContext2D,
    prevPos: Offset,
    currentPos: Offset,
    config: DrawableConfig
  ): void {
    const globalCompositeOperation = ctx.globalCompositeOperation
    ctx.beginPath()
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 5
    ctx.moveTo(prevPos.offsetX, prevPos.offsetY)
    ctx.lineTo(currentPos.offsetX, prevPos.offsetY)
    ctx.stroke()
    ctx.globalCompositeOperation = globalCompositeOperation
  },
}
