import React from 'react'

import { Footer, Header, Features, Possibility, WhatGPT3, Blog } from './containers'
import { CTA, Brand, NavBar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App