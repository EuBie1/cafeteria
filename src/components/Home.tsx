import React from 'react'
import homeImg from '../assets/home-img.jpg'

const Home: React.FC = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${homeImg})` }}>
      <section id="home">
        <div className="content">
          <h3>Code com o melhor café da região</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos tempore repellendus deleniti ex
            facilis quibusdam assumenda quia dolores doloremque odit pariatur, laborum quasi optio. Dolores
            repellat dolore est repellendus.
          </p>
          <a href="#menu" className="btn">Pegue o seu agora</a>
        </div>
      </section>
    </div>
  )
}

export default Home
