import React from 'react'
import { useParams, Link } from 'react-router-dom'

/** shows all of the info about a single dog */

const DogDetails = ({ dog }) => {
  const { name } = useParams()

  if (name) {
    const currentDog = dog.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    )

    return (
      <div>
        DogDetails
        <img src={currentDog.src} alt={currentDog.name} />
        <h2>{currentDog.name}</h2>
        <h3>{currentDog.age} years old</h3>
        <ul>
          {currentDog.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    )
  }
}

export default DogDetails
