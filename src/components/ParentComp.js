import { render } from '@testing-library/react'
import React, { Component } from 'react'
import MemoComp from './MemoComp'

//if we extend this component from PureComponent, then the output will be only first 3 lines
class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abc'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Abc'
            })
        }, 2000)
    }
    

  render() {
    console.log("********************Parent Component*********************")
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
        {/* <MemoComp /> */}
        {/* By including only MemoComp in the output only the parent comp is rendered */}
      </div>
    )
  }
}

export default ParentComp


//output:
// ********************Parent Component*********************
// Reg Comp render
// Pure Comp render
// ********************Parent Component*********************
// Reg Comp render
// ********************Parent Component*********************
// Reg Comp render