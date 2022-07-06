import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './NewColorForm.css'

/** form that will let user add a new color
 * redirect to the colors index with new color appearing at the top.
 */

const NewColorForm = ({ addColor }) => {
  const INITIAL_VALUE = '#5760E4'
  const [colorInput, setColorInput] = useState(INITIAL_VALUE)
  const history = useHistory()

  const handleChange = evt => {
    const { name, value } = evt.target
    setColorInput({ [name]: value.toUpperCase() })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const removeHex =
      colorInput.color[0] === '#'
        ? colorInput.color.substring(1)
        : colorInput.color

    addColor(removeHex)
    // setColor(INITIAL_VALUE)
    history.push('/colors') //imperatively redirect to colors index
  }

  return (
    <div className="NewColorForm-Container">
      <h2>Select a Color</h2>
      <form className="NewColorForm" onSubmit={handleSubmit}>
        <label htmlFor="color"></label>
        <input
          className="NewColorForm-Input"
          type="color"
          name="color"
          defaultValue={INITIAL_VALUE}
          value={colorInput.color}
          onChange={handleChange}
        />
        <button>add</button>
      </form>
      <Link to="/back">
        <button className="button-85">back</button>
      </Link>
    </div>
  )
}

export default NewColorForm
