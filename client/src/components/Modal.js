import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export default class Modal extends Component {
  // state = {
  //   opened: false,
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.opened !== this.props.opened) {
  //     this.setState({ opened: true })
  //   }
  // }

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
            <div className='modal-content'>
              <h4>{title}</h4>
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
