import React from 'react'
import { Redirect, useParams, Link } from 'react-router-dom'
import './Color.css'

/** see a color in all its glory */

const Color = () => {
  const { color } = useParams()

  // error handler for invalid param
  if (color.length !== 6) {
    return <Redirect to="/colors" />
  }

  return (
    <div className="Color" style={{ backgroundColor: '#' + color }}>
      <div className="Color-hex">
        <p>#{color}</p>
      </div>
      <Link to="/back">
        <button className="button-85">back</button>
      </Link>
    </div>
  )
}

export default Color
