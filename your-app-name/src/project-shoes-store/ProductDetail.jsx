import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ProductDetail extends Component {
  capitalize = str => {
    return str.toUpperCase();
  };
  renderDetail = () => {
    const detail = this.props.data;
    return (
      <div className='row'>
        <div className='col-6'>
          <h3
            className='text-center'
            style={{ marginTop: `30px` }}>
            {this.capitalize(detail.name)}
          </h3>
          <img
            src={detail.image}
            height={400}
            width={400}
            style={{ marginLeft: `104px` }}
          />
        </div>
        <div className='col-6 px-4'>
          <h3
            className='text-center'
            style={{ marginTop: `30px`, marginBottom: `30px` }}>
            THÔNG TIN CHI TIẾT
          </h3>
          <table className='table table-bordered'>
            <thead></thead>
            <tbody>
              <tr className='row lh-lg'>
                <td className='col-6'>Tên Sản Phẩm</td>
                <td className='col-6'>{this.capitalize(detail.name)}</td>
              </tr>
              <tr className='row lh-lg'>
                <td className='col-6'>Mô tả sản phẩm</td>
                <td className='col-6'>{detail.shortDescription}</td>
              </tr>
              <tr className='row lh-lg'>
                <td className='col-6'>Chi tiết:</td>
                <td className='col-6'>{detail.description}</td>
              </tr>
              <tr className='row lh-lg'>
                <td className='col-6'>Giá bán</td>
                <td className='col-6'>${detail.price}</td>
              </tr>
              <tr className='row lh-lg'>
                <td className='col-6'>Số lượng</td>
                <td className='col-6'>{detail.quantity}</td>
              </tr>
            </tbody>
          </table>
          <div className='btn-group d-flex justify-content-center m-4'>
            <NavLink to='/list'>
            <button
              type='button'
              class='btn btn-secondary mx-3'>
              Back To List
            </button>
            </NavLink>
            <NavLink to='/cart'>
              <button
              type='button'
              class='btn btn-warning' onClick={()=>this.props.addToCart(detail)}>
              Add To Cart
            </button>  
            </NavLink>
            
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <div className='container'>{this.renderDetail()}</div>;
  }
}
