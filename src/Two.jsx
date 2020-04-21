import React from 'react'
import Map from './Map'
import './Label'

export default () => (
    <div>
      <h1>Two</h1>
      <p>in this module, I've only imported Map and Label, yet Mask works too.</p>
      <button onClick={Map.label.foo}>label foo</button>
      <button onClick={Map.mask.foo}>mask foo</button>
    </div>
)

