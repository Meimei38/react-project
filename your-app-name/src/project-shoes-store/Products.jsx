import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import data from './dataShoe.json';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Swal from 'sweetalert2';

export default class HomePage extends Component {
  state = {
    selectedProduct: null,
    cart: [],
  };
  renderProduct = prod => {
    this.setState({
      selectedProduct: prod,
    });
    console.log(this.state.selectedProduct);
  };
  addToCart = prod => {
    console.log(this.state.cart);
    const cloneCart = [...this.state.cart];

    const foundItem = cloneCart.find(item => {
      return item.product.id === prod.id;
    });

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      const cartItem = {
        product: prod,
        quantity: 1,
      };
      cloneCart.push(cartItem);
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Đã thêm vào giỏ hàng thành công',
          text: 'Sản phẩm đã được thêm vào giỏ hàng!',
        })
      }
    );
  };
  delete = id => {
    const cloneCart = [...this.state.cart];
    const index = cloneCart.findIndex(item => item.id === id);

    if (index !== -1) {
      Swal.fire({
        title: 'Bạn muốn xóa sản phẩm này khỏi giỏ hàng?',
        text: 'Bạn sẽ không thể hoàn tác hành động này!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xóa',
        cancelButtonText:'Hủy'
      }).then(result => {
        if (result.isConfirmed) {
          cloneCart.splice(index, 1);
          this.setState({
            cart: cloneCart,
          });
          Swal.fire(
            'Đã xóa thành công!',
            'Sản phẩm này đã được xóa khỏi giỏ hàng.',
            'success'
          );
        }
      });
    }
  };
  handleQuantity = (shose, inIncrease) => {
    const cloneCart = [...this.state.cart];

    const index = cloneCart.findIndex(item => item.id === shose.id);

    if (index === -1) {
      Swal.fire(
        'Không tìm thấy!',
        'Không tìm thấy sản phẩm',
        'error'
      );
    }
    if (inIncrease) {
      cloneCart[index].quantity += 1;
    } else if (cloneCart[index].quantity > 1) {
      cloneCart[index].quantity -= 1;
    } else {
      Swal.fire({
        title: 'Bạn muốn xóa sản phẩm này khỏi giỏ hàng?',
        text: 'Bạn sẽ không thể hoàn tác hành động này!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xóa',
        cancelButtonText:'Hủy'
      }).then(result => {
        if (result.isConfirmed) {
          cloneCart.splice(index, 1);
          this.setState({
            cart: cloneCart,
          });
          Swal.fire(
            'Đã xóa thành công!',
            'Sản phẩm này đã được xóa khỏi giỏ hàng.',
            'success'
          );
        }
      });
    }
    this.setState({
      cart: cloneCart,
    });
  };
  render() {
    return (
      <div className='container'>
        <NavBar cart={this.state.cart} />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/list'
            element={
              <ProductList
                arr={data}
                selected={this.renderProduct}
              />
            }
          />
          <Route
            path='/detail'
            element={
              <ProductDetail
                data={this.state.selectedProduct}
                addToCart={this.addToCart}
              />
            }
          />
          <Route
            path='/cart'
            element={
              <Cart
                cart={this.state.cart}
                delete={this.delete}
                handleQuantity={this.handleQuantity}
              />
            }
          />
        </Routes>
        <Footer />

        {/* <div className='container'>
          <ProductList arr={data} />
        </div> 
        */}
      </div>
    );
  }
}
