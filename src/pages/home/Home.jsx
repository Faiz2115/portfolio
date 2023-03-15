import React from 'react'
import AboutMe from '../../components/aboutMe/AboutMe'
import Banner from '../../components/banner/Banner'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'
import SocialLinks from '../../components/socialLinks/SocialLinks'

const Home = () => {
  return (
    <>
      <Banner/>
      <SocialLinks/>
      <AboutMe />
      <Projects/>
      <Skills/>
    </>

  )
}

export default Home