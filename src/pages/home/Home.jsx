import React from 'react'
import AboutMe from '../../components/aboutMe/AboutMe'
import Banner from '../../components/banner/Banner'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'

const Home = () => {
  return (
    <>
      <Banner/>
      <AboutMe />
      <Projects/>
      <Skills/>
    </>

  )
}

export default Home