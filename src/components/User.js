import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name} */}
        {/* If we change the name to render, then also it will work properly */}
        {/* {this.props.render(false)} */}
        {this.props.name(true)}
      </div>
    )
  }
}

export default User
