import React from 'react'
import menu1 from '../assets/menu-1.png'
import menu2 from '../assets/menu-2.png'
import menu3 from '../assets/menu-3.png'
import menu4 from '../assets/menu-4.png'
import menu5 from '../assets/menu-5.png'
import menu6 from '../assets/menu-6.png'

const menuItems = [
  { img: menu1, name: 'Café coado', price: 'R$ 15,99', oldPrice: 'R$20,99' },
  { img: menu2, name: 'Café coado', price: 'R$ 15,99', oldPrice: 'R$20,99' },
  { img: menu3, name: 'Café coado', price: 'R$ 13,99', oldPrice: 'R$18,99' },
  { img: menu4, name: 'Café coado', price: 'R$ 11,99', oldPrice: 'R$12,99' },
  { img: menu5, name: 'Café coado', price: 'R$ 8,90', oldPrice: 'R$10,99' },
  { img: menu6, name: 'Café coado', price: 'R$ 11,20', oldPrice: 'R$15,99' },
]

const Menu: React.FC = () => {
  return (
    <section className="menu" id="menu">
      <h2 className="title">Nosso <span>menu</span></h2>
      <div className="box-container">
        {menuItems.map((item, i) => (
          <div className="box" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="price">{item.price} <span>{item.oldPrice}</span></div>
            <a href="#" className="btn">Adicione ao carrinho</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
