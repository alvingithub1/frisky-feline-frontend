import React, { Component } from 'react'
import confused from '../assets/confused-cat.gif'

export class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
          <h1>Sorry This page was not found</h1>
          <img src={confused}/>
      </div>
    )
  }
}

export default NotFound