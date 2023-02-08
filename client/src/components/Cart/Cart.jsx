import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Cart.css'

const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: 'Long Sleeve Graphic T-shirt'
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: 'Coat'
    },
  ]

  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {data?.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="cart-details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="cart-price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='cart-delete' />
        </div>
      ))}
      <div className="cart-total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='cart-reset'>Reset Cart</span>
    </div>
  )
}

export default Cart