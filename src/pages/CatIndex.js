import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {

  render() {
    return (
      <>
      <div className='indexAllContainer' >
      <h3 className='indexTitle'>Find your purrfect match</h3>
      <div className='cardContainerAll'>
        {this.props.cats &&  this.props.cats.map(cat => {
          return(
            <div key={cat.id} className='cardIndex'>
              <Card >
                <div className='indivCard'>
                  <CardImg top src={cat.image} alt="Card image cap" />
                </div>
                <CardBody>
                  <CardTitle>{cat.name}</CardTitle>
                  <CardSubtitle>{cat.age}</CardSubtitle>
                  <NavLink to={`/catshow/${cat.id}`}>
                    <Button>More info here</Button>
                  </NavLink>
                </CardBody>
              </Card>
          </div>
           )
        })}
      </div>
      </div>
      </>
    )
  }
}

export default CatIndex