import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './DogDetails.css'

/** shows all of the info about a single dog */

const DogDetails = ({ dog }) => {
  const { name } = useParams()

  if (name) {
    const currentDog = dog.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    )

    return (
      <div className="DogDetails">
        <h2>Dog Details</h2>
        <div className="DogDetails-card">
          <div className="DogDetails-Col">
            <img src={currentDog.src} alt={currentDog.name} />
          </div>
          <div className="DogDetails-Col">
            <h1>{currentDog.name}</h1>
            <h3>{currentDog.age} years old</h3>
            <ul>
              {currentDog.facts.map((fact, i) => (
                <li key={i}>
                  <span role="img" aria-label="dog print emoji">
                    🐾{' '}
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/dogs">
          <button className="button-73">Go Back</button>
        </Link>
      </div>
    )
  }
}

export default DogDetails
