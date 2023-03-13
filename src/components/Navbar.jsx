import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {

  const [dark, setDark] = useState(" ")

  window.addEventListener("scroll", () => {
    window.scrollY > 300 && setDark('dark-navbar')
    window.scrollY < 300 && setDark(' ')
  })

  return (
    <nav className={`navbar-container ${dark}`}>
      <Link to ='/' className="logo">
        <h1>F<span>aiz</span></h1>
      </Link>
      <div className="navlinks">
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="portfolio" >Portfolio</NavLink>
            <NavLink to="templates" >Templates</NavLink>
            <NavLink to="contact" >Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="blog">
      <NavLink to="/blog" >Blog</NavLink>

      </div>
    </nav>
  )
}

export default Navbar