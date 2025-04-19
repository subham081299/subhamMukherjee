import React from 'react'
import Header from './components/Header'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Skills from '../sections/Skills' 
import Contact from '../sections/Contact'

const App = () => {
  return (
    <div >
     <Header />
     <Hero />
     <Projects />
     <About />
     <Skills />
     <Contact />
    </div>
  )
}

export default App
