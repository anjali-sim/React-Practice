import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      {/* <h1 className='primary'>stylesheets</h1> */}
      <h1 className={className}>stylesheets</h1>
      {/* when we want to use more than one classes */}
      <h1 className={`${className} font-xl`}>stylesheets</h1>
    </div>
  )
}

export default Stylesheet
