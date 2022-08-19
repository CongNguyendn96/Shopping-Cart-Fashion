import React from 'react';
import Cart from '../../components/Cart';
import {Link} from "react-router-dom";
import "./styles.scss";

function Header(props) {
    return (
        <div className="header">
            <h2>Fashion For Everyone</h2>
            <Link to="/add">
                <button className='header-btn'>Create New Item</button>
            </Link>
            <Cart/>
        </div>
    );
}

export default Header;