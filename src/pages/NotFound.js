import React, { Component } from 'react'
import confused from '../assets/confused-cat.gif'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
          <h3 className='notFoundTitle'>Sorry, this page was not found</h3>
          <img src={confused}/>
      </div>
    )
  }
}

export default NotFound