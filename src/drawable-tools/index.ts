import { IColor, ITool, Offset } from '../Dravinci'
import { DrawablePencil } from './pencil'
import { DrawableRubber } from './rubber'
import { DrawableBucket } from './bucket'

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
  size: number
}

export const DrawableToolMap: Record<ITool, Drawable> = {
  bucket: DrawableBucket,
  pencil: DrawablePencil,
  rubber: DrawableRubber,
}
