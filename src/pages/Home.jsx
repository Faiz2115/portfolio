import React from 'react'
import AboutMe from '../components/AboutMe'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

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