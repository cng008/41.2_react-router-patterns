import React from 'react'
import { Redirect, useParams, Link } from 'react-router-dom'

/** see a color in all its glory */

const Color = () => {
  const { color } = useParams()

  // error handler for invalid param
  if (color.length !== 6) {
    return <Redirect to="/colors" />
  }

  return (
    <div style={{ backgroundColor: '#' + color }}>
      {color}
      <Link to="/back">Back</Link>
    </div>
  )
}

export default Color
