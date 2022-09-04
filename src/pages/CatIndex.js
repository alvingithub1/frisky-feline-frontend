import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import LikeButton from '../components/LikeButton'

class CatIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultImage: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      likes: 0
    }
  }

  replaceImage = (error) => {
    //replacement of broken Image
    error.target.src = this.state.defaultImage; 
}

// handleChange = () => {
//   let newCount = this.state.likes + 1
//   this.setState({ likes: newCount })

// }






handleChange = (e) => {
  let newCount = this.state.likes + 1
  this.setState({ likes : newCount})

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
              <Card itemID={cat.id}>
                <div className='indivCard'>
                <CardImg top src={cat.image} alt="Card image cap" onError={this.replaceImage} />
                </div>
                <CardBody>

                {/* <Button id={cat.id} onClick={this.handleChange} >❤️ {this.state.likes}</Button> */}

                  <LikeButton></LikeButton>
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