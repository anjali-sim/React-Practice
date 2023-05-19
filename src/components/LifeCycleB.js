import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abc'
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStatedFromProps(props, state) {
        console.log('LifecycleB getDerivedStatedFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }


    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate");
    }

    
  render() {
    console.log("LifecycleB render")
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
