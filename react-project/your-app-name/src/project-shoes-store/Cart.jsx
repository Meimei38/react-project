import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => (
              <tr key={index}>
                <td>{item.product.id}</td>
                <td>{item.product.name}</td>
                <td>
                  <img
                    src={item.product.image}
                    alt=''
                    width={60}
                  />
                </td>
                <td>
                  <button
                    className='btn btn-light'
                    onClick={() => this.props.handleQuantity(item, false)}>
                    -
                  </button>
                  <span> {item.quantity} </span>
                  <button
                    className='btn btn-light'
                    onClick={() => this.props.handleQuantity(item, true)}>
                    +
                  </button>
                </td>
                <td width={100}>${item.product.price}</td>
                <td width={100}>${item.quantity * item.product.price} </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => this.props.delete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-center m-4'>
          <NavLink to='/list'>
            <button className='btn btn-outline-secondary'>Back To List </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
