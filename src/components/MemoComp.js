import React from 'react'

function MemoComp({name}) {
    console.log("Rendering memo component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp) //it is Higher Order Component

// in ParentComp we will remove the RegComp and PureComp and include MemoComp
