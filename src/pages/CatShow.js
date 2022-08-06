import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class CatShow extends Component {

  
  
  render() {
    
    let {cat} = this.props
    
    return (
      <>
      <div className="show-container">
        <Card className="card-container" key={cat.id}>
          <CardImg top width="100%" src={this.props.cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {this.props.cat.name}</CardTitle>
            <CardSubtitle>{this.props.cat.age}</CardSubtitle>
            <CardText>{this.props.cat.enjoys}</CardText>
            <div className="show-button">
              <NavLink to={`/catedit/${this.props.cat.id}`}>
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