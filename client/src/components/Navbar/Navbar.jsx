import React from 'react'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import './Navbar.css'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="wrap">
        <div className="left">
          <div className='item'>
            <img src='img/en.png' alt='en' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1/'>Woman</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2/'>Man</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3/'>Children</Link>
          </div>
        </div>
        <div className='center'>
            <Link className='link' to='/'>LamaSTORE</Link>
        </div>
        <div className='right'>
          <div className='item'>
              <Link className='link' to='/'>Homepage</Link>
          </div>
          <div className='item'>
              <Link className='link' to='/'>About</Link>
          </div>
          <div className='item'>
              <Link className='link' to='/'>Contact</Link>
          </div>
          <div className='item'>
              <Link className='link' to='/'>Stores</Link>
          </div>
          <div className="nav-icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div 
              className="cartIcon"
              onClick={e => setOpen(!open)}
            >
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
