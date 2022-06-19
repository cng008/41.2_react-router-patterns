import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      <NavLink exact to="/dogs/whiskey">
        Whiskey
      </NavLink>
      <NavLink exact to="/dogs/duke">
        Suke
      </NavLink>
      <NavLink exact to="/dogs/perry">
        Perry
      </NavLink>
      <NavLink exact to="/dogs/tubby">
        Tubby
      </NavLink>
    </nav>
  )
}

export default NavBar
