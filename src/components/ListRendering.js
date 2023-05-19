import React from 'react'

function ListRendering() {
    const names = ['Bruce', 'Clark', 'Diana'];
  return (
    <div>
      {/* <h2>names[0]</h2>
      <h2>names[1]</h2>
      <h2>names[2]</h2> */}
      {
        names.map(item => <h2>{item}</h2>)
      }
    </div>
  )
}

export default ListRendering
