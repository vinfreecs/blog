import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return (
    <nav className='navbar'>
        <ul>
          <li className='home'>
          <Link to="/">My Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/thoughts">Thoughts</Link>
          </li>
          <li>
            <Link to="/progress">Progress</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;