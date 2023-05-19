import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked")
    }

    //in onClick we pass the function handler and not the function call
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
