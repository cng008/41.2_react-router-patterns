import React from 'react'
import { Link } from 'react-router-dom'

// import NewColorForm from './NewColorForm'

/** a list of all available colors */

const ColorsList = ({ colors }) => {
  return (
    <div>
      <h1 className="ColorsList-h1">Color Factory</h1>
      <Link to="/colors/new">Add a new color</Link>
      <div className="ColorsList-div">
        {colors.map(({ color, id }) => (
          <div key={id}>
            <Link to={`/colors/${color}`}>{color}</Link>
            {/* // <Color key={id} color={color} /> */}
          </div>
        ))}
      </div>
      <Link to="/back">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default ColorsList
