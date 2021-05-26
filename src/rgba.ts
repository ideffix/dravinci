export class RGBA {
  red: number
  green: number
  blue: number
  alpha: number

  constructor(red: number, green: number, blue: number, alpha: number) {
    this.red = red
    this.green = green
    this.blue = blue
    this.alpha = alpha
  }

  equals(toCompare: RGBA): boolean {
    return (
      this.red === toCompare.red &&
      this.green === toCompare.green &&
      this.blue === toCompare.blue &&
      this.alpha === toCompare.alpha
    )
  }

  static fromNonAlphaString(colorStr: string): RGBA {
    return new RGBA(
      fromHex(colorStr.slice(1, 3)),
      fromHex(colorStr.slice(3, 5)),
      fromHex(colorStr.slice(5)),
      255
    )
  }

  static to2DRGBAMatrix(img: ImageData): RGBA[][] {
    const res: RGBA[][] = []
    let row: RGBA[] = []
    for (let i = 0; i < img.data.length; i += 4) {
      row.push(
        new RGBA(img.data[i], img.data[i + 1], img.data[i + 2], img.data[i + 3])
      )
      if (row.length === img.width) {
        res.push(row)
        row = []
      }
    }
    return res
  }

  static toImageData(matrix: RGBA[][]): ImageData {
    const arr: number[] = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(
          ...[
            matrix[i][j].red,
            matrix[i][j].green,
            matrix[i][j].blue,
            matrix[i][j].alpha,
          ]
        )
      }
    }
    return new ImageData(
      new Uint8ClampedArray(arr),
      matrix[0].length,
      matrix.length
    )
  }
}

const fromHex = (str: string): number => parseInt(str, 16)
