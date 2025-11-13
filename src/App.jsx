import React from 'react'
import Hero from './components/Hero'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'


const App = () => {
  return (

     <div className="transition-colors duration-500">
       
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
    </div>
   
  )
}

export default App






