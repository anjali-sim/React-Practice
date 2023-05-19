import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

  render() {

    //4th Approach *******************************
    return this.state.isLoggedIn && <div>Welcome A</div>

    //3rd Approach *******************************
    // return(
    //     this.state.isLoggedIn ? <div>Welcome A</div> : <div>Welcome G</div>
    // )

    //2nd Approach *******************************
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome A</div>
    // } else {
    //     message = <div>Welcome G</div>
    // }
    // return <div>{message}</div>

    //1st Approach ********************************
    // if(this.state.isLoggedIn){
    //     return <div>Welcome A</div>
    // } else {
    //     return <div>Welcome G</div>
    // }

    // return (
    //   <div>
    //     <div>Welcome A</div> 
    //     <div>Welcome G</div>
    //   </div>
    // )
  }
}

export default ConditionalRendering
