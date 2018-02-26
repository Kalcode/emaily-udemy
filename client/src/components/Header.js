import React,  { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href='/auth/google'>Login With Google</a></li>
      default:
        return [
          <li key='stripe'><Payments /></li>,
          <li key='logout'><a href='/api/logout'>Logout</a></li>,
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <Link to={this.props.auth ? '/surveys' : '/'} className='brand-logo left'>Logo</Link>
            <ul className='right'>
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, null)(Header)
