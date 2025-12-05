import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Review from './components/Review'
import Address from './components/Address'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Review />
      <Address />
      <Footer />
    </>
  )
}

export default App
