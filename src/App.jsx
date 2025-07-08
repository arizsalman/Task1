import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

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

     <div className="App">
      <h1>Add to SASS CSS</h1>
    </div>


    <div className="container">
      <div className="box sass-box">Sass</div>
      <div className="box css-box">CSS</div>
    </div>

    <footer className="site-footer">
    <div className="footer-content">
      <h2 className="footer-logo">MyFoodSite</h2>
      <p className="footer-description">
        Serving delicious meals and unforgettable experiences since 2020. We
        value taste, freshness, and your satisfaction.
      </p>
      <p className="copyright">© 2025 MyFoodSite. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default App
