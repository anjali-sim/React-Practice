import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        //3rd method
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "GoodBye"
        })
    }

    //4th method
    clickHandler = () => {
        this.setState({
            message: "GoodBye"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler}>Click</button> */}
        <button onClick={this.clickHandler.bind(this)}>Click</button> {/* 1st method */}
        <button onClick={() => this.clickHandler()}>Click</button> {/* 2nd method */}
        <button onClick={this.clickHandler}>Click</button> {/* 3rd method */}
        <button onClick={this.clickHandler}>Click</button> {/* 4th method */}
      </div>
    )
  }
}

export default EventBind
