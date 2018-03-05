import React,  { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Modal from './Modal'
import Payments from './Payments'

class Header extends Component {
  state = {
    modal: false,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth && (nextProps.auth.credits > this.props.auth.credits)) {
      this.setState({ modal: true })
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href='/auth/google'>Login With Google</a></li>
      default:
        return [
          <li key='stripe'><Payments /></li>,
          <li key='credits' style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
          <li key='logout'><a href='/api/logout'>Logout</a></li>,
        ]
    }
  }

  render() {
    return (
      <nav>
        <Modal
          title='Credits Added'
          onClosed={()=> { this.setState({ modal: false }) }}
          opened={this.state.modal}
        >
          5 credits have been added to your account successfully!<br />
          Thank you for your purchase.
        </Modal>
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
