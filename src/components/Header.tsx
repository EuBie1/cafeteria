import React from 'react'
import logo from '../assets/logo.png'

const Header: React.FC = () => {
  return (
    <header className="header">
      <section>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#menu">Menu</a>
          <a href="#review">Avaliações</a>
          <a href="#address">Endereço</a>
        </nav>
        <div className="icons">
          <img
            width={30}
            height={30}
            src="https://img.icons8.com/ios-filled/30/ffffff/search--v2.png"
            alt="search"
          />
          <img
            width={30}
            height={30}
            src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"
            alt="cart"
          />
        </div>
      </section>
    </header>
  )
}

export default Header
