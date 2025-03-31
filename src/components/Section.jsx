import React, { useEffect, useState } from 'react';

const Section = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // Adding a liked property to track likes
    const updatedData = data.map(item => ({ ...item, liked: false }));
    setItems(updatedData);
  };

  // Function to toggle like status
  const toggleLike = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, liked: !item.liked } : item
    ));
  };

  // Function to truncate description text
  const truncate = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className='section'>
      {items.map((i) => (
        <div key={i.id} className="product-card">
          <img src={i.image} alt={i.title} className="product-image" />
          <h3 className="product-title">{i.title}</h3>
          <p className="product-category">Category: {i.category}</p>
          <p className="product-description">{truncate(i.description, 120)}</p>
          <p className="product-rating">
            ⭐ {i.rating?.rate} ({i.rating?.count} reviews)
          </p>

          <div className='product-bottom'>
            <p className="product-price">₹ {i.price}</p>
            <button className="buy-btn">Buy</button>
            <span className="heart-icon" onClick={() => toggleLike(i.id)}>
              {i.liked ? "❤️" : "🤍"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
