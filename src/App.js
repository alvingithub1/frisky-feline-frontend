import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [],
      
    }
  }

  componentDidMount(){
    this.readCat()
    
  }

  
  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(payload => this.setState({cats:payload}))
    .catch(errors => console.log("Cat read errors", errors))
  }
  
  createNewCat = (theNewCatObject) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(theNewCatObject),
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => {
      errors = true
      this.setState({errors:errors})
    })
  }
  
  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`,{
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method:"PATCH"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Update cat errors", errors))
  }
  
  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Delete cat errors", errors))
  }
  
  

  render() {
    
    return (
    
      <Router className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" render={() => <CatIndex cats={this.state.cats}/>} />
          <Route path="/catshow/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === id && cat)
            return <CatShow cat={cat} deleteCat={this.deleteCat} />
          }} />
          <Route path="/catnew" 
            render={()=>{
            return <CatNew createNewCat = {this.createNewCat}  />
          }} />
          <Route path="/catedit/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return(
              <CatEdit 
                cat={cat}
                updateCat={this.updateCat}
              />
            )
          }} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
      
    )
  }
}

export default App