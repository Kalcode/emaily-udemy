import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export default class Modal extends Component {

  componentDidMount() {
    if (this.props.opened) document.body.style.overflow = 'hidden'
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.opened !== this.props.opened) {
      if (nextProps.opened) document.body.style.overflow = 'hidden'
      else document.body.removeAttribute('style')
    }
  }

  onClick = (e) => {
    this.setState({ opened: false })
    this.props.onClosed && this.props.onClosed()
  }

  render() {
    const { opened, title, children } = this.props
    if (!opened) return null
    return (
      createPortal(
        <div className={opened ? 'modal-open' : null }>
          <div className='modal-overlay' />
          <div id='modal1' className='modal'>
            <h4 className='modal-title'>{title}</h4>
            <div className='modal-content'>
              <p>{children}</p>
            </div>
            <div className='modal-footer'>
              <button className='btn-flat' onClick={this.onClick}>Close</button>
            </div>
          </div>
        </div>
    , document.body)
    )
  }
}
