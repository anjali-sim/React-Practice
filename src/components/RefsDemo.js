import React, { Component } from 'react'

//Use cases of ref
//1. to focus the input on loading the page
//2. to fetch the value from input

class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      //callback refs
      this.cbRef = null
      this.setCbRef = element => {
        this.cbRef = element
      }
    }

    componentDidMount() {
        //callback refs
        if(this.cbRef) {
            this.cbRef.focus()
        }

        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
