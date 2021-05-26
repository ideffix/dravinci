export const createFilled2DArray = <T>(
  width: number,
  height: number,
  value: T
): T[][] => Array.from(Array(height), () => new Array(width).fill(value))
