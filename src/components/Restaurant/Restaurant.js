import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Restaurant.css';

const Restaurant = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./items.JSON')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    const handleAddItem = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        
        <div className="restaurant-container">
           
          <div className="item-container">
              {
                  items.map(item => <Item 
                    key={item.id} 
                    item={item}
                    handleAddItem = {handleAddItem}></Item>)
              }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Restaurant;
