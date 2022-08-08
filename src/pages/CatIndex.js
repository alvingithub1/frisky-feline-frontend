import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultImage: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80'
    }
  }

  replaceImage = (error) => {
    //replacement of broken Image
    error.target.src = this.state.defaultImage; 
}
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
                <CardImg top src={cat.image} alt="Card image cap" onError={this.replaceImage} />
                </div>
                <CardBody>
                  <CardTitle>Name: {cat.name}</CardTitle>
                  <CardSubtitle>Age: {cat.age}</CardSubtitle>
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