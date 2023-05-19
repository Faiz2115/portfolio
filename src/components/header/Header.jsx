import React, { useState,useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './style.scss'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'



const Header = () => {

  const [show, setShow] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileMenu,setMobileMenu] = useState("");
  const [mobileIcon,setMobileIcon] = 
  useState(RxHamburgerMenu)


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

  const showHeader = () => {

    if (mobileMenu === '') {
        setMobileMenu('mobile-view')
        setMobileIcon(AiOutlineClose)
    }
    else {
      setMobileMenu('')
      setMobileIcon(RxHamburgerMenu)

    }
}

  return (
    <navbar className={`header-container ${show}  ${mobileMenu} `}>
      <Link to='/' className="logo">
        <h1>F<span>aiz</span></h1>
      </Link>

      <div className={`navlinks`}>
        <ul>
          <li>
            <NavLink to="/" >
              <span>
                01.
              </span>
              Home
            </NavLink>

            {/* <NavLink to="about" >
              <span>
                02.
              </span>
              About
            </NavLink> */}

            <NavLink to="portfolio" >
              <span>
                02.
              </span>
              Projects
            </NavLink>

            <NavLink to="about" >
              <span>
                03.
              </span>
              Contact
            </NavLink>
            
            <NavLink to="/blog" className='blog'>
               Blog
            </NavLink>
          </li>
        </ul>
      </div>
          <div className="hamburger-menu"
          onClick={showHeader}
          >
          {mobileIcon}

          

          </div>
    </navbar>
  )
}

export default Header