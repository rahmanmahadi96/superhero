import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Restaurant.css';

const Restaurant = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    // data fetch 
    useEffect( () => {
        fetch('./items.JSON')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    // event listener 
    const handleAddItem = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        
        <div className="restaurant-container">
           {/* item  */}
          <div className="item-container">
              {
                  items.map(item => <Item 
                    key={item.id} 
                    item={item}
                    handleAddItem = {handleAddItem}></Item>)
              }
          </div>
          {/* cart  */}
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Restaurant;
