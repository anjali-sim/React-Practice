import React from 'react'

const Greet = (props) => {
    return (
        <div>
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>
    )
}

//destructuring method-1
const Greet1 = ({name, heroName}) => {
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

//destructuring method-2
const Greet2 = props => {
    const {name, heroName} = props
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}