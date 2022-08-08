import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import homeCat from '../assets/cat-home.png'


class Home extends Component {
  render() {
    return (
      <>
      <div className='homePageAll'>
        <h3 className='headerHome'>Welcome to Frisky Feline!</h3>
        <p className='introHome'>Frisky Feline is an online platform that cats can meet other cats. Please view all of our available cats and get to know them a little more. If you have an available cat, please feel free to put them on the cat availability page.</p>
        <div className='homeImage'>
          <img src={homeCat}/>
        </div>
        <NavLink to={`/catindex`}>
          <Button>Show All Cats</Button>
        </NavLink>
        </div>
      </>
    )
  }
}

export default Home