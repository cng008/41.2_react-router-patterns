import React from 'react'
import { Link } from 'react-router-dom'
import './ColorsList.css'

/** a list of all available colors */

const ColorsList = ({ colors }) => {
  return (
    <div className="ColorsList">
      <h1>COLOR FACTORY</h1>
      <Link to="/colors/new">
        <button className="button-85">add a new color</button>
      </Link>
      <div className="ColorsList-div">
        {colors.map(({ color, id }) => (
          <div key={id}>
            <Link to={`/colors/${color}`}>
              <button
                className="ColorsList-Color"
                style={{ backgroundColor: '#' + color }}
              ></button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorsList
