import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className='card'>
      <div className="image">
        {item.isNew && <span>New Season</span>}
        <img src={item.img} alt='' className='firstImg' />
        {item.img2 && <img src={item.img2} alt='' className='secondImg' />}
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <span className='oldPrice'>${item.oldPrice}</span>
        <span>${item.price}</span>
      </div>
    </div>
    </Link>
  )
}

export default Card
