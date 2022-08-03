import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';

export class Home extends Component {
  render() {
    return (
      <>
        <h3>Home</h3>
        <NavLink to={`/catindex`}>
          <Button>Show All Cats</Button>
        </NavLink>

      </>
    )
  }
}

export default Home