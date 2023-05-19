import React from 'react'
import AboutMe from '../../components/aboutMe/AboutMe'
import Banner from '../../components/banner/Banner'
import Email from '../../components/email/Email'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'
import SocialLinks from '../../components/socialLinks/SocialLinks'

const Home = () => {
  return (
    <>
      <Banner/>
      <SocialLinks/>
      <Email/>
      <AboutMe />
      <Projects/>
      <Skills/>
    </>

  )
}

export default Home