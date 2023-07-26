import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
const style ={
    background:{
        backgroundColor:'#f8f9fa'
    }
}

export default function ProductItem(props) {
    return (
      <div
        className='card col-4 m-3 mx-3'
        style={{width: `18rem`}}>
        <img
          src={props.product.image}
          className='card-img-top'
          alt={props.product.image}
        />
        <div className='card-body'>
          <h5 className='card-title' style={{height: `50px`}}>{props.product.name}</h5>
          <p className='card-text'>${props.product.price}</p>
          <NavLink to='/detail'><button
            className='btn btn-dark' onClick={()=>props.selected(props.product)}>
            Add to cart <i className='fa-solid fa-cart-plus'></i>
          </button></NavLink>
        </div>
      </div>
    );
  }
