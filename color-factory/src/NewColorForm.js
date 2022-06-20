import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

/** form that will let user add a new color
 * redirect to the colors index with new color appearing at the top.
 */

const NewColorForm = ({ addColor }) => {
  const INITIAL_VALUE = '#5760E4'
  const [colorInput, setColorInput] = useState(INITIAL_VALUE)

  const handleChange = evt => {
    const { name, value } = evt.target
    setColorInput({ [name]: value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const removeHex =
      colorInput.color[0] === '#'
        ? colorInput.color.substring(1)
        : colorInput.color

    addColor(removeHex)
    // setColor(INITIAL_VALUE)
    return <Redirect to="/colors" />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Select a Color</label>
        <input
          type="color"
          name="color"
          value={colorInput.color}
          onChange={handleChange}
        />
        <button>Add!</button>
      </form>
      <Link to="/back">Back</Link>
    </div>
  )
}

export default NewColorForm
