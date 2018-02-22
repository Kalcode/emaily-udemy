import React,  { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <a href='#' className='brand-logo left'>Logo</a>
            <ul id='nav-mobile' className='right'>
              <li><a href='#'>Login With Google</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
