import React from 'react';
import './App.css';

const App = () => (
  <div className="app">
    <header className="header">
      <h1>Bata Shoes</h1>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main className="main">
      <section className="hero">
        <h2>Step into Comfort</h2>
        <p>Discover the latest collection of Bata shoes for every occasion.</p>
        <button className="shop-now">Shop Now</button>
      </section>
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/511cnuQiQ0L._AC_UY300_.jpg" alt="Shoe 1" />
            <h3>Classic Leather Shoe</h3>
            <p>$99.99</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/61scD50U4GL._AC_UY1000_.jpg" alt="Shoe 2" />
            <h3>Sporty Sneakers</h3>
            <p>$79.99</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/51VOXnU4PXL._AC_UY1000_.jpg" style={{ height: 200 }} alt="Shoe 3" />
            <h3>Comfort Sandals</h3>
            <p>$49.99</p>
          </div>
          <div className="product-card">
            <img src="https://5.imimg.com/data5/AH/VV/GLADMIN-15843401/bata-men-brown-casual-shoes-f853428500.jpg" alt="Shoe 4" />
            <h3>Formal Loafers</h3>
            <p>$89.99</p>
          </div>
        </div>
      </section>
      <section className="products">
     
        <div className="product-grid">
          <div className="product-card">
            <img src="https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOBATA-MEN-FRORAVE684239D0D47F/1563348196413_0..jpg" alt="Shoe 1" />
            <h3>Running shoe</h3>
            <p>$89.99</p>
          </div>
          <div className="product-card">
            <img src="https://5.imimg.com/data5/YI/EI/GLADMIN-11672813/bata-black-heels-for-women-f771612100.jpg" alt="Shoe 2" />
            <h3>Women's heel</h3>
            <p>$70.99</p>
          </div>
          <div className="product-card">
            <img src="https://images-cdn.ubuy.co.in/6Z3C3T9S-bata-black-formal-shoes-for-men.jpg"  alt="Shoe 3" />
            <h3>Formal shoe</h3>
            <p>$59.99</p>
          </div>
          <div className="product-card">
            <img src="https://images.jdmagicbox.com/quickquotes/images_main/bata-beige-flat-sandals-for-women-3-164444001-afzes.jpg" alt="Shoe 4" />
            <h3>Formal Loafers</h3>
            <p>$69.99</p>
          </div>
        </div>
      </section>
    </main>


    <footer className="footer">
      <p>&copy; 2024 Bata Shoes. All rights reserved.</p>
    </footer>
  </div>
);

export default App;