import React, { Component } from 'react'
import UserContext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E context {this.context}
        {/* Returns Component E context Abcde */}
        <ComponentF />
      </div>
    ) 
  }
}

ComponentE.contextType = UserContext

export default ComponentE
