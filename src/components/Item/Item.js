import React from 'react';
import './Item.css';


const Item = (props) => {
    // console.log(props);
    const {img, name, category, price, description, ratings, reviews} = props.item;
    return (
        <div className="item">
            <div>
            <img className="item-img" src={img} alt="" />
            </div>
            <div>
            <h2 className="item-name">{name}</h2>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Ingredients:</strong> {description}</p>
            <p><strong>Price:</strong> {price}Tk</p>
            <p><strong>Rating:</strong> {ratings}({reviews} reviews)</p>
            <button onClick={ () => props.handleAddItem(props.item)} className="add-button"><i className="fas fa-shopping-cart"> add to cart</i></button>
            </div>
        </div>
    );
};

export default Item;