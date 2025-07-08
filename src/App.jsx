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

    <section className="product-section">
  <div className="product-card">
  
    <h2 className="product-title">Stylish Shoes</h2>
    <p className="product-price">$49.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
    
    <h2 className="product-title">Casual Shirt</h2>
    <p className="product-price">$29.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
   
    <h2 className="product-title">New  Shirt</h2>
    <p className="product-price">$21.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
   
    <h2 className="product-title">Women Shirt</h2>
    <p className="product-price">$19.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
  
    <h2 className="product-title">Stylish Shoes</h2>
    <p className="product-price">$49.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
    
    <h2 className="product-title">Casual Shirt</h2>
    <p className="product-price">$29.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
   
    <h2 className="product-title">Upper  Shirt</h2>
    <p className="product-price">$21.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
   
    <h2 className="product-title">Lower Shirt</h2>
    <p className="product-price">$19.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
  
    <h2 className="product-title">Stylish Trouser</h2>
    <p className="product-price">$49.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
    
    <h2 className="product-title">Casual Shirt</h2>
    <p className="product-price">$29.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
   
    <h2 className="product-title">New  Shirt</h2>
    <p className="product-price">$21.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div className="product-card">
   
    <h2 className="product-title">Women Shirt</h2>
    <p className="product-price">$19.99</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
</section>



    <div className="container">
      <div className="box sass-box">Sass</div>
      <div className="box css-box">CSS</div>
    </div>

    <footer className="site-footer">
    <div className="footer-content">
    <h2 className="footer-logo">MyShirtSite</h2>
    <p className="footer-description">
  Offering stylish, comfortable, and high-quality shirts since 2020. We
  prioritize fashion, comfort, and customer satisfaction.
    </p>
    <p className="copyright">© 2025 MyShirtSite. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default App
