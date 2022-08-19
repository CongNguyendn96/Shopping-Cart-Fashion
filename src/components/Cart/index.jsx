import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";
import store from '../../store';
import {observer} from "mobx-react";
import {URL_USER} from "../../constants";
import {useCallback, useState, useEffect} from "react";

function Cart() {
    const [listItemUser, setListItemUser] = useState([]);
        const [showCart, setShowCart] = useState(false);
    const fetchData = useCallback(async()=>{
        await fetch(URL_USER)
        .then((res) => res.json())
        .then((data) => {
            setListItemUser(data);
        })
        .catch(err => console.log(err))
    },[store.render])
   
    useEffect(() => {
        fetchData()
    },[fetchData]);

    let totalProduct = listItemUser.reduce((a,e)=>a+e.qty,0);
    let totalPrice = listItemUser.reduce((a,e)=>a+e.qty* e.price,0);
    const handleDelete =(id)=>{
        fetch(URL_USER+`/${id}`,{
         method:"DELETE"
        })
        store.setRender();
     }
     const handleIncreaseQty = (e) => {
        fetch(URL_USER+`/${e.id}`,{
            method: "PUT",     
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...e,qty: e.qty+1
            })
           })
           store.setRender();
     }
     const handleDecreaseQty = (e) => {
            e.qty>1 && 
            fetch(URL_USER+`/${e.id}`,{
            method: "PUT",     
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...e,qty: e.qty-1
            })
           })
           store.setRender();
     }
    return (
        <div data-total={totalProduct} className='cart'>
            <FontAwesomeIcon icon={faCartShopping}  className="shop-cart" onClick={()=>setShowCart(!showCart)}/>
            { showCart ? ( <ul className='cart-list'>
                <div className='cart-title'>
                    <p onClick={()=>setShowCart(!showCart)}>x</p>
                    <p>Your Shopping Cart</p>
                    <span>{totalProduct}</span>
                </div>
                {listItemUser.length > 0 && listItemUser.map((itemUser, index) => (
                     <li key={index} className="cart-item">
                        <div className='cart-item__info'>
                            <img src={itemUser.img} alt="" />
                            <p>{itemUser.name}</p>
                        </div>
                        <div className='cart-item__price'>
                            <p className='cart-number'>
                                <button onClick={() => handleDecreaseQty(itemUser)}>-</button>
                                    {itemUser.qty}
                                <button  onClick={() => handleIncreaseQty(itemUser)}>+</button>
                            </p>
                            <p>${itemUser.price}</p>
                            <button className='remove-cart-btn' onClick={()=>handleDelete(itemUser.id)}>x</button>
                        </div>
                     </li>
                ))}
                <div className='cart-footer'>
                    <p>Subtotal: $ {totalPrice}  </p>
                    <div>
                        <button>Payment</button>
                    </div>
                </div>
            </ul>):("")}
        </div>
    );
}

export default observer(Cart);