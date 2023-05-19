import React, { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default ClassComponent;

//destructuring in class component
class ClassComponent extends Component {
    render() {
        const {name, heroName} = this.props;
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}
