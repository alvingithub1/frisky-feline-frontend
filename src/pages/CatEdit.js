import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedCat: {
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys,
        image: this.props.cat.image,
        likes: this.props.cat.likes
      },
      submitted: false
    }
  }

  componentDidMount = () => {
    this.setState({updatedCat: this.props.cat})
}


  handleChange = (e) => {
    let { updatedCat } = this.state
    updatedCat[e.target.name] = e.target.value
    this.setState({ updatedCat: updatedCat })
  }

  handleSubmit = () => {
    alert(`Congratulations you edited a new ${this.props.cat.name}`)
    this.props.updateCat(this.state.updatedCat, this.props.cat.id)
    this.setState({ submitted: true })
  }

  render() {
    const {cat} = this.props

    return (
      <>
      <div className="form-container">
        <Form>
          <h2>Edit {this.props.cat.name}</h2>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.name }
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input 
              type="text" 
              name="age" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.age }
          />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input 
              type="text" 
              name="enjoys"
              onChange={this.handleChange}
              value={ this.state.updatedCat.enjoys }
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input 
              type="text" 
              name="image" 
              onChange={this.handleChange}
              value={ this.state.updatedCat.image }
            />
          </FormGroup>
          <div className="form-button">
            <Button
              name="submit"
              onClick={this.handleSubmit}
              >Submit Cat
            </Button>
          </div>
          {/* if submitted is true then go to catindex page  */}
          { this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`}/> }
        </Form>
      </div>
      </>
    )
  }
}




export default CatEdit
