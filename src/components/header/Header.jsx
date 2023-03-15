import React, { useState,useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './style.scss'

const Header = () => {

  // const [dark, setDark] = useState(" ")
  const [show, setShow] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = ()=>{
    if(window.scrollY > 50)
    {
      if(window.scrollY > lastScrollY )
      {
        setShow('hide')
      }
      else{
        setShow('show')
      }

    }
    else{
      setShow('')
      
    }
    setLastScrollY(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar)
    return ()=>{
      window.removeEventListener("scroll",controlNavbar)
    }
  },[lastScrollY])

  return (
    <navbar className={`header-container ${show}`}>
      <Link to='/' className="logo">
        <h1>F<span>aiz</span></h1>
      </Link>

      <div className="navlinks">
        <ul>
          <li>
            <NavLink to="/" >
              <span>
                01.
              </span>
              Home
            </NavLink>

            <NavLink to="about" >
              <span>
                02.
              </span>
              About
            </NavLink>

            <NavLink to="portfolio" >
              <span>
                03.
              </span>
              Projects
            </NavLink>

            <NavLink to="about" >
              <span>
                04.
              </span>
              Contact
            </NavLink>
            
            <NavLink to="/blog" className='blog'>
               Blog
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <div className="blog">

      </div> */}
    </navbar>
  )
}

export default Header