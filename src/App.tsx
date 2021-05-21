import React, { CSSProperties } from 'react'
import { Dravinci } from './Dravinci'
import { DravinciArea } from './DravinciArea'
import { DravinciToolbox } from './DravinciToolbox'

const areaStyle: CSSProperties = {
  border: '2px solid black',
}

const App: React.VFC = ({}) => (
  <Dravinci>
    <DravinciArea style={areaStyle} width={500} height={400} />
    <DravinciToolbox />
  </Dravinci>
)

export default App
