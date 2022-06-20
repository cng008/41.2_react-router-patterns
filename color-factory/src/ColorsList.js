import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import NewColorForm from './NewColorForm'

/** a list of all available colors */

const ColorsList = ({ defaultColors }) => {
  const [colors, setColor] = useState(defaultColors)
  const addColor = newColor => {
    setColor(colors => [...colors, { color: newColor, id: uuid() }])
  }

  return (
    <div>
      <h1 className="ColorsList-h1">Color Factory</h1>
      {/* <Link to="/colors/new">Add a new color</Link> */}
      <NewColorForm addColor={addColor} />
      <div className="ColorsList-div">
        {colors.map(({ color, id }) => (
          <div key={id}>
            <Link to={`/colors/${color}`}>{color}</Link>
            {/* // <Color key={id} color={color} /> */}
          </div>
        ))}
      </div>
      <Link to="/back">Back</Link>
    </div>
  )
}

export default ColorsList
