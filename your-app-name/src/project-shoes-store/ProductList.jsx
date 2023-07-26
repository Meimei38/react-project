import React, { Component } from 'react';
import ProductItem from './ProductItem'
const displayList = (arr, selected) => {
    let contentTable = arr.map((item, index) => {
      return (
        <ProductItem
          key={index}
          product={item}
          selected ={selected}
        />
      );
    });
    return contentTable;
  };
export default class ProductList extends Component {
  render() {
    return (
      <div className='px-0 mt-5'>
        <div className='d-flex flex-wrap row'>{displayList(this.props.arr, this.props.selected)}</div>
      </div>
    );
  }
}
