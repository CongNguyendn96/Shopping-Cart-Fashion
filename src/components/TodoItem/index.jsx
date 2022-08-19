import React from 'react';
import "./styles.scss";
import { URL_USER } from '../../constants';
import store from '../../store';
import { observer } from "mobx-react"

function TodoItem({item}) {
    const handleAddItemToCart = (e) => { 
        e.preventDefault();
            fetch(URL_USER, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({...item,qty:1})
            })
          store.setRender();
    }
    return (
        <li className='item' key={item.id}>
            <div className='item__image'>
                <img src={item.img}  alt="" />
            </div>
            <div className='item__wrap'>
                <div className='item__info'>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
                <div className='item__button'>
                    <button onClick={handleAddItemToCart}>Add to cart</button>
                </div>  
            </div>
        </li>
    );
}

export default observer(TodoItem) ;