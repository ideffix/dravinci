import { IColor, ITool, Offset } from '../Dravinci'
import { DrawablePencil } from './pencil'
import { DrawableRubber } from './rubber'

export type Drawable = {
  draw: (
    ctx: CanvasRenderingContext2D,
    prevPos: Offset,
    currentPos: Offset,
    config: DrawableConfig
  ) => void
}

export type DrawableConfig = {
  color: IColor
}

export const DrawableToolMap: Record<ITool, Drawable> = {
  pencil: DrawablePencil,
  rubber: DrawableRubber,
}
