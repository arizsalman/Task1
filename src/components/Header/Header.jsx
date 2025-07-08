import React from 'react'

import "./Header.sass";
// import "./Header.scss";

const Header = () => {
  return (
    <>
    
  <header className="site-header">
  <nav className="navbar">
    <div className="logo">MySite</div>
    <ul className="nav-links">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Menu</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  </nav>
  </header>
    </>
  )
}

export default Header
