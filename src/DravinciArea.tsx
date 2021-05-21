import React from 'react'

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>

export const DravinciArea: React.FC<CanvasProps> = ({ ...rest }) => (
  <canvas {...rest} />
)
