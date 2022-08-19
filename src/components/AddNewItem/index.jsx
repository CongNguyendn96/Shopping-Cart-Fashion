import React, { useState} from 'react';
import {URL} from "../../constants"
import {useNavigate} from "react-router-dom";
import "./styles.scss";
import { observer } from "mobx-react"
import store from '../../store';
import { makeId } from '../../common/common';
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
function AddNewItem() {
    let navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        id : makeId(12),
        name: "",
        price: "",
        img: ""
    });
    const [name, setName] = useState("");
    const handleChangeValue = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }
    const handleAddNewItem = (e) => {
        e.preventDefault();
            fetch(URL, {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(formValue)
            })
            navigate("/");
            toast.success('Success new product!');
        }    
    const resetValueInput = (e) => {
        e.preventDefault();
        document.querySelector(".form-name").value ="";
        document.querySelector(".form-price").value ="";
        document.querySelector(".form-url").value ="";
    }
    return (
        <div style={{display: "flex", justifyContent:"center", backgroundColor:"#e5edf4"}}>
            <form  onSubmit={handleAddNewItem}>
                <div className='form-back'>
                    <Link to ="/">
                    <button className='return-btn' type="button">Back</button>
                    </Link>
                </div>
                <div className='form-item'>
                    <div className='form-title'>
                        <h2>Add New Product</h2>
                    </div>
                    <div>
                        <label htmlFor=''>Name:</label>
                        <div style={{display: 'block', padding: 0}}>
                            <input 
                            type="text" 
                            className='form-name'
                            name = "name" 
                            required
                            value = {formValue.name} 
                            onChange={handleChangeValue}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Price:</label>
                        <div style={{display: 'block', padding:0}}>
                            <input 
                            type="number" 
                            name='price' 
                            required
                            className='form-price'
                            value={formValue.price} 
                            onChange={handleChangeValue}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor=''>Image:</label>
                        <div style={{display: 'block', padding: 0}}>
                            <input 
                            type="text"
                            name="img"
                            required
                            className='form-url'
                            value={formValue.img} 
                            onChange={handleChangeValue}/>
                        </div>
                    </div>
                    <div className='form-btn'>
                        <button onClick={()=>store.setRender()} type='submit'>Save</button>
                        <button onClick = {resetValueInput} type='reset'>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default observer(AddNewItem) ;