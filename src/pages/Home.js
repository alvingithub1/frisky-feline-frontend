import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import homeCat from '../assets/cat-home.png'


class Home extends Component {
  render() {
    return (
      <>
        <h3>Home</h3>
        <div className='homeImage'>
          <img src={homeCat}/>
        </div>
        <NavLink to={`/catindex`}>
          <Button>Show All Cats</Button>
        </NavLink>

      </>
    )
  }
}

export default Home