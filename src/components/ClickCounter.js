import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count +1}
    //     })
    // }

  render() {
    // const {count} = this.state
    return (
        <button onClick={this.props.incrementCount}>{this.props.name} Clicked {this.props.count} times</button>
    )
  }
}

export default withCounter(ClickCounter)
