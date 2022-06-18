import React from 'react'
import { Link } from 'react-router-dom'

/** takes all the dog info from the props of <App /> */

const DogList = ({ dogs }) => {
  const pups = dogs.map((d, i) => (
    <div key={i}>
      <h2>
        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
      </h2>
      <img src={d.src} alt={d.name} />
    </div>
  ))

  return (
    <div>
      DogList
      {pups}
    </div>
  )
}

export default DogList
