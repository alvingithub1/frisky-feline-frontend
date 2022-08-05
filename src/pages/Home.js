import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import homeCat from '../assets/cat-home.png'


class Home extends Component {
  render() {
    return (
      <>
      <div className='homePageAll'>
        <h3 className='headerHome'>Home (Welcome to Friskey Felines!)</h3>
        <p className='introHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Pretium vulputate sapien nec sagittis aliquam malesuada. Semper quis lectus.</p>
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