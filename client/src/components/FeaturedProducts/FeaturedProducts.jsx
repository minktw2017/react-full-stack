import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.css'

const FeaturedProducts = ({ type }) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12
    }
  ]

  return (
    <div className='featuredproducts'>
      <div className="top">
        <h2>{ type } products</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, aut consequatur delectus similique, inventore ducimus fuga excepturi id consectetur cumque rerum totam, ea quisquam? Eaque ex quas, nesciunt recusandae deleniti animi. Ut vitae, voluptas unde magni aperiam nihil nisi animi facere alias nesciunt eaque voluptates a libero dolores, suscipit quos.</p>
      </div>
      <div className="bottom">
        {data.map(item =>
          <Card item={item} key={item.id} />
        )}
      </div>
    </div>
  )
}

export default FeaturedProducts
