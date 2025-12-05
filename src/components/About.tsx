import React from 'react'
import aboutImg from '../assets/about-img.jpg'

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">Sobre <span>nós</span></h2>
      <div className="row">
        <div className="container-image">
          <img src={aboutImg} alt="Sobre-nos" />
        </div>
        <div className="content">
          <h3>O que faz nosso café especial</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam perferendis ratione maxime.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae repellendus qui voluptas provident.</p>
          <a href="#" className="btn">Saiba mais</a>
        </div>
      </div>
    </section>
  )
}

export default About
