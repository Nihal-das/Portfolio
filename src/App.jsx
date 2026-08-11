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

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-500 bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-white/5">
        © {new Date().getFullYear()} Nihal P Y — built with React &amp; Tailwind CSS
      </footer>
    </div>
  )
}

export default App
