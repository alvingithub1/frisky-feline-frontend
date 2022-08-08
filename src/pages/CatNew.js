import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Form, FormGroup, Input, Label} from 'reactstrap'


class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted:false,
      error: false,
      msg:"Enjoys must be 10 characters"
      
    }
  }

  handleChange = (e) =>{

    let { newCat } = this.state
    newCat[e.target.name] = e.target.value

    this.setState({newCat: newCat})
  }

  
  handleSubmit = () =>{
    alert("Congratulations you created a new Frisky Feline!")
    this.props.createNewCat(this.state.newCat)
    this.setState({submitted: true})
  }



  render() {
    return (
    <>
    <div className="form-container">
      <Form>
        <h3 className='catNewTitle'>Create a new cat below!</h3>
            <FormGroup>
              <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.newCat.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
                <Input
                  type="text"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.newCat.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="enjoys">Enjoys:<span className="show-requirement-text">Must Be at least 10 characters!</span></Label>
                <Input
                  type="text"
                  name="enjoys"
                  onChange={this.handleChange}
                  value={this.state.newCat.enjoys}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
                <Input
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.newCat.image}
              />
            </FormGroup>
            <div className="form-button">
              <Button
                name="submit"
                onClick={this.handleSubmit}>
                Create a New Profile
              </Button>
            </div>
            {   this.state.submitted  && <Redirect to="/catindex" />}
          </Form>  
    </div>
        </>  
      )
  }
}

export default CatNew