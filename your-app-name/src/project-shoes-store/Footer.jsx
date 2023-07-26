import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-bottom bg-dark text-light'>
        <div className='footer content d-flex justify-content-center align-middle'>
          <h6 className='copyright mt-2'>
            © 2023 MeimeiShop
          </h6>
        </div>
      </div>
    );
  }
}
