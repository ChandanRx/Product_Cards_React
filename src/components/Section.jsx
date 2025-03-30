import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Section = () => {
  const [Items, setItems] = useState([])

  console.log(Items)

  useEffect(() => {
    Products()
  }, [])

  const Products = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setItems(data)
  }

  const truncate = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <>
      <div className='section'>
        {
          Items.map((i) => (

            <div key={i.id} className="product-card">
              <img src={i.image} alt={i.title} className="product-image" />
              <h3 className="product-title">{i.title}</h3>
              <p className="product-category">Category: {i.category}</p>
              <p className="product-description">
                {truncate(i.description, 120)}
              </p>
              <p className="product-rating">
                ⭐ {i.rating?.rate} ({i.rating?.count} reviews)
              </p>
              <div className='product-bottom'>
              <p className="product-price">₹ {i.price}</p>
              <button className="buy-btn">Buy</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Section;