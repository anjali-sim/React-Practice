import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abc'
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStatedFromProps(props, state) {
        console.log('LifecycleA getDerivedStatedFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }


    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: 'Pqr'
        })
    }    


  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA

//output: without including child component LifeCycleB
// LifecycleA constructor
// LifecycleA getDerivedStatedFromProps
// LifecycleA render
// LifecycleA componentDidMount

//output: with including child component LifeCycleB
// LifecycleA constructor
// LifecycleA getDerivedStatedFromProps
// LifecycleA render
// LifecycleB constructor
// LifecycleB getDerivedStatedFromProps
// LifecycleB render
// LifecycleB componentDidMount
// LifecycleA componentDidMount

//output: on changing the state
// LifecycleA constructor
// LifecycleA getDerivedStatedFromProps
// LifecycleA render
// LifecycleB getDerivedStatedFromProps
// LifecycleB shouldComponentUpdate
// LifecycleB render
// LifecycleB getSnapshotBeforeUpdate
// LifecycleA getSnapshotBeforeUpdate
// LifecycleB componentDidUpdate
// LifecycleA componentDidUpdate