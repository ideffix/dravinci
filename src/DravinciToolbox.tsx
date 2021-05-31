import React from 'react'
import { Tools } from './Tools'
import { Palette } from './Palette'
import { Preview } from './Preview'
import { Sizer } from './Sizer'

export const DravinciToolbox: React.FC = () => (
  <div>
    <Tools />
    <Palette />
    <Sizer />
    <Preview />
  </div>
)
