import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark m-1'>
        <div className='container-fluid'>
          <NavLink to='/' style={{textDecoration:'none'}}>
          <a
            className='navbar-brand'
            style={{ margin: `0 10px 0 10px`, color: `white` }}
            href='#'>
            <h3> Meimei Shop </h3>
          </a>
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link'>
                  <NavLink
                    style={{ textDecoration: 'none', color: 'white' }}
                    to='/'>
                    Home
                  </NavLink>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>
                  <NavLink
                    style={{ textDecoration: 'none', color: 'white' }}
                    to='list'>
                    Products
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
          <div
            className='container collapse navbar-collapse d-flex justify-content-end'
            id='navbarSupportedContent'>
            <div>
                <NavLink to='/cart'>
              <span className='text-light'>
                <i
                  className='fa-solid fa-cart-shopping'
                  style={{ marginBottom: `10px` }}></i>
              </span>
              </NavLink>
            </div>
            <div className='mx-3 text-light'>
              <h4>
                Hello <u>Meimei</u>,
              </h4>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
