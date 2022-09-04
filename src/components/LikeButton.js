import React, { Component } from 'react'

class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }

    addLike = () => {
        let newCount = this.state.likes + 1
        this.setState({ likes: newCount })
      }
    


  render() {
    return (
        <>
        <button onClick={this.addLike}>❤️ {this.state.likes}</button>
        </>
    )
  }
}

export default LikeButton