import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h3>Category</h3>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h3>Links</h3>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h3>About</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolore, id tempora necessitatibus neque numquam odio voluptate magnam aut vitae consectetur voluptatum deserunt reprehenderit? Facilis explicabo eligendi delectus a id debitis perspiciatis magnam eos beatae vitae. Beatae libero illum magni.
          </span>
        </div>
        <div className="item">
          <h3>Contact</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis corporis debitis commodi tenetur fugit obcaecati enim eos explicabo! Adipisci nesciunt aspernatur illo recusandae modi sit rerum labore, molestiae quis provident aut, dignissimos, nobis eveniet corrupti obcaecati voluptas itaque error?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">
          <span className="logo">MINKSTORE</span>
          <span>
            Copyright &copy; 2023 Your Company Name. All rights reserved.
          </span>
        </div>
        <div className="payment">
          <img src="./img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer
