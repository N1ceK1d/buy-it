import {React, useState, useEffect } from 'react';
import './Products.css'

function buy() {
  alert("Add to shopping cart!");
}

function Products() {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products') //get
      .then(response => response.json())
      .then(products => {
        console.log(products.products);
        setProducts(products.products);
        setIsFetched(true);
    });
  }, []);

  return (
    <div className='Products'>
      {
        isFetched ? products.map((item => (
          <div key={item.id} className="product">
            <h3 className="product-title">{item.title} - {item.id}</h3>
            <p className="product-price">{item.price}$</p>
            <p className="product-description">{item.description}</p>
            <img className="product-image" src={item.images[0]} />
            <button onClick={buy} className="addProduct">В корзину</button>
          </div>
        ))): <></>
      }
    </div>
  )
}

export default Products;