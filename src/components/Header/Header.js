import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            {/* nav  */}
            <div className="nav">
                <h3>Home</h3>
                <h3>Menu</h3>
                <h1>Eatathon</h1>
                <h3>About</h3>
                <button className="sign-in">Login Or Signup</button>
            </div>
            <div className="code">
                <p>Code: <strong>Eatathon007 | Tk 50 off on oreders over Tk 200</strong></p>
            </div>
           {/* banner  */}
            <div className="banner">
                <h1>Order Your Favourite Food with Eatathon</h1>
                <h1><small>Minimum Order</small> 1000Tk</h1>
                <h4>to Get a Free Burger</h4>
            </div>
                    
        </div>
    );
};

export default Header;