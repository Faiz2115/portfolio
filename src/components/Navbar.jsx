import React from 'react'
import {AiOutlineApartment, AiOutlineBook, AiOutlineContacts, AiOutlineHome} from "react-icons/ai"
const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className="logo">
                <h1>F<span>aiz</span></h1>
        </div>
        <div className="navlinks">
                <ul>
                    <li>
                        <a href="#" >
                       <AiOutlineHome className='icons'/>
                        Home
                        </a>
                        <a href="#" >
                        <AiOutlineBook className='icons'/>
                        About</a>
                        <a href="#">
                        <AiOutlineBook  className='icons'/>
                        Portfolio</a>
                        <a href="#">
                        <AiOutlineApartment  className='icons'/>
                        Certificates</a>
                        <a href="#">
                        <AiOutlineContacts  className='icons'/>
                        Templates</a>
                        <a href="#">
                        <AiOutlineContacts  className='icons'/>
                        Contact</a>
                    </li>
                </ul>
        </div>

        <div className="blog">
            <a href="#">Blog</a>

        </div>
    </nav>
  )
}

export default Navbar