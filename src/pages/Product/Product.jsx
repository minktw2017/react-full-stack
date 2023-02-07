import React from 'react'
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import './Product.css'

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi eos suscipit veritatis sequi officiis ad, maxime, rerum magni esse minima praesentium repudiandae dolorum exercitationem natus, aliquid corrupti in! A?</p>
        <div className="quantity">
          <button onClick={e => setQuantity(prev => prev === 1 ? 1 : prev- 1)}>-</button>
          {quantity}
          <button onClick={e => setQuantity(prev => prev === 20 ? 20 : prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="info-link">
          <div className="link-item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="link-item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDICTIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
