import React from 'react'
import {GrFacebookOption, GrGithub, GrInstagram, GrLinkedin, GrLinkedinOption} from "react-icons/gr"
import './style.scss'
const SocialLinks = () => {
  return (
        <div className="social-media">
              <ul>
                <li>
                  <a href="" target='_blank'>
                  <GrLinkedinOption className='icons'/>
                  </a>
                </li>
                <li>
                  <a href=""  target='_blank'>
                  <GrGithub className='icons'/>
                  </a>
                </li>
                <li>
                  <a href=""  target='_blank'>
                  <GrInstagram className='icons'/>
                  </a>
                </li>
                <li>
                  <a href=""  target='_blank'>
                  <GrFacebookOption className='icons'/>
                  </a>
                </li>
                
              </ul>
              <div className="line"></div>
        </div>

  )
}

export default SocialLinks