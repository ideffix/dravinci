import { Drawable, DrawableConfig } from './index'
import { Offset } from '../Dravinci'
import { RGBA } from '../rgba'
import { createFilled2DArray } from '../arrayUtils'

export const DrawableBucket: Drawable = {
  draw(
    ctx: CanvasRenderingContext2D,
    prevPos: Offset,
    currentPos: Offset,
    config: DrawableConfig
  ): void {
    const image = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
    const rgbaMatrix = RGBA.to2DRGBAMatrix(image)
    const fillColor = RGBA.fromNonAlphaString(config.color)
    const toChangeColor = rgbaMatrix[currentPos.offsetY][currentPos.offsetX]
    floodFill(
      rgbaMatrix,
      fillColor,
      toChangeColor,
      currentPos.offsetX,
      currentPos.offsetY
    )
    ctx.putImageData(RGBA.toImageData(rgbaMatrix), 0, 0)
  },
}

const floodFill = (
  rgbaMatrix: RGBA[][],
  fillColor: RGBA,
  toChangeColor: RGBA,
  x: number,
  y: number
) => {
  const visited = createFilled2DArray(
    rgbaMatrix.length,
    rgbaMatrix[0].length,
    false
  )
  const queue = [[x, y]]
  while (queue.length > 0) {
    const [x, y] = queue.pop() as number[]
    if (
      y >= rgbaMatrix.length ||
      y < 0 ||
      x >= rgbaMatrix[0].length ||
      x < 0 ||
      visited[y][x]
    ) {
      continue
    }
    const currentColor = rgbaMatrix[y][x]
    if (currentColor.equals(toChangeColor)) {
      visited[y][x] = true
      rgbaMatrix[y][x] = fillColor
      queue.push(
        ...[
          [x + 1, y],
          [x - 1, y],
          [x, y + 1],
          [x, y - 1],
        ]
      )
    }
  }
}
