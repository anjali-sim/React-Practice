import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            count:0
        }
    }

    //we should not update the state directly, React will not re-render the component
    increment() {
        this.setState({
            count: this.state.count+1
        },
        () => {
            console.log('Callback value',this.state.count)
        })
        console.log(this.state.count)
    }
    //whenever you want to execute the code after the state has been changed,
    //do not place that code after the setState function, instead place that code in callback function


    increment() {
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    }

    incrementFive() {
        //this does not increment the count by 5, instead it is incremented by 1
        //so for this we will use prevState
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment by Five</button>
      </div>
    )
  }
}

export default Counter
