import { Offset } from '../Dravinci'
import { Drawable, DrawableConfig } from './index'

export const DrawablePencil: Drawable = {
  draw(
    ctx: CanvasRenderingContext2D,
    prevPos: Offset,
    currentPos: Offset,
    config: DrawableConfig
  ): void {
    ctx.beginPath()
    ctx.strokeStyle = config.color
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = config.size
    ctx.moveTo(prevPos.offsetX, prevPos.offsetY)
    ctx.lineTo(currentPos.offsetX, prevPos.offsetY)
    ctx.stroke()
  },
}
