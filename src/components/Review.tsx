import React from 'react'
import quoteImg from '../assets/quote-img.png'
import pic1 from '../assets/pic-1.png'
import pic2 from '../assets/pic-2.png'
import pic3 from '../assets/pic-3.png'

const reviews = [
  { img: pic1, name: 'Rodolpho like', text: 'Lorem ipsum...', stars: 4.5 },
  { img: pic2, name: 'Aline Mori', text: 'Lorem ipsum...', stars: 4.5 },
  { img: pic3, name: 'João da Silva', text: 'Lorem ipsum...', stars: 4.5 },
]

const Review: React.FC = () => {
  return (
    <section className="review" id="review">
      <h2 className="title">Nossos <span>Clientes</span></h2>
      <div className="box-container">
        {reviews.map((r, i) => (
          <div className="box" key={i}>
            <img src={quoteImg} alt="comentario" />
            <p>{r.text}</p>
            <img src={r.img} alt={r.name} className="user" />
            <h3>{r.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  width={30}
                  height={30}
                  src={index < Math.floor(r.stars)
                    ? "https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                    : index < r.stars
                    ? "https://img.icons8.com/ios-glyphs/30/ffffff/star-half-empty.png"
                    : "https://img.icons8.com/ios/30/ffffff/star--v1.png"
                  }
                  alt="star"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Review
