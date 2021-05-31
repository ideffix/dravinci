import React from 'react'
import { useSizer } from './useSizer'

export const Sizer: React.VFC = () => {
  const { activeSize, setActiveSize } = useSizer()
  return (
    <>
      Sizer:
      <input
        type={'range'}
        min={0}
        max={100}
        value={activeSize}
        onChange={(e) => setActiveSize(+e.target.value)}
      />
    </>
  )
}
