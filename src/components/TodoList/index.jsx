import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";
import TodoItem from "../TodoItem"
import {URL, URL_USER} from "../../constants"
import store from '../../store';
import { observer } from "mobx-react"

TodoList.propTypes = {
    
};

function TodoList(props) {
    const [listItem, setListItem] = useState([]);
    const fetchData = useCallback(async()=>{
        await fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            setListItem(data);
        })
        .catch(err => console.log(err))
        
    },[store.PRODUCT_render])

    useEffect(() => {
        fetchData()
    },[fetchData]);
    useEffect(()=>{
        
    },[listItem])

    return (
        <div className='body'>
            <p className='total-item'> Total: {listItem.length} Product</p>
            <ul className='list-item'>
                {listItem.length > 0 && listItem.map((item, index) => (
                    <TodoItem  key = {index} item = {item} listItem={listItem}/>
                ))}
            </ul>
        </div>
    );
}

export default observer (TodoList );