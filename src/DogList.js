import React from 'react'
import { Link } from 'react-router-dom'
import './DogList.css'

/** takes all the dog info from the props of <App /> */

const DogList = ({ dogs }) => {
  const pups = dogs.map((d, i) => (
    <div key={i} className="DogList-Dog">
      <Link to={`/dogs/${d.name.toLowerCase()}`}>
        <img src={d.src} alt={d.name} />
        <h2>{d.name}</h2>
      </Link>
    </div>
  ))

  return (
    <div className="DogList">
      <h1>WE HAVE DOGZ</h1>
      <p>CLICK ON THEM FOR MORE INFO</p>
      <div className="DogList-Dogs">{pups}</div>
    </div>
  )
}

export default DogList
