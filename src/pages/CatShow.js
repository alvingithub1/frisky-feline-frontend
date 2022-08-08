import React, { Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class CatShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultImage: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      
    }
  }

  replaceImage = (error) => {
    //replacement of broken Image
    error.target.src = this.state.defaultImage; 
}


  
render() {
  const {cat} = this.props
  return (
    <>
    <div className="show-container">
      <Card className="card-container" key={cat.id}>
      <CardImg top width="100%" src={cat.image} alt="Card image cap" onError={this.replaceImage} />
        <CardBody>
          <Button onClick={this.handleClick}>❤️</Button>
          <CardTitle>Hi, my name is {cat.name}</CardTitle>
          <CardSubtitle>I am {cat.age} years old.</CardSubtitle>
          <CardText>I enjoy {cat.enjoys}</CardText>
          <div className="show-button">
            <NavLink to={`/catedit/${cat.id}`}>
              <Button>Update Cat</Button>
            </NavLink>
            <NavLink to="/catindex">
              <Button onClick={() => this.props.deleteCat(cat.id)}>Delete Cat</Button>
            </NavLink>
          </div>
        </CardBody>
      </Card>
    </div>
    </>
    )
  }
}


export default CatShow