import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cart extends Component {
  renderContent = (arr, handleQuantity, deleteFunction) => {
    if (arr.length === 0) {
      return <h5 className='text-danger text-center mt-3'>Giỏ hàng trống!</h5>;
    }
    return this.renderTable(arr, handleQuantity, deleteFunction);
  };
  renderTable = (arr, handleQuantity, deleteFunction) => {
    return (
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
          {arr.map((item, index) => (
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
                  onClick={() => handleQuantity(item, false)}>
                  -
                </button>
                <span> {item.quantity} </span>
                <button
                  className='btn btn-light'
                  onClick={() => handleQuantity(item, true)}>
                  +
                </button>
              </td>
              <td width={100}>${item.product.price}</td>
              <td width={100}>${item.quantity * item.product.price} </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteFunction(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  render() {
    return (
      <div>
        {this.renderContent(this.props.cart, this.props.handleQuantity, this.props.delete)}
        <div className='d-flex justify-content-center mt-5 mb-3'>
        <NavLink
          to='/list'
          style={{ textDecoration: 'none' }}>
          <button className='btn btn-outline-secondary'>Back To List</button>
        </NavLink>
        </div>
      </div>
    );
  }
}
