import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal (
      <h1>Portal Demo</h1>,
      document.getElementById('portal-root')
  )
}
{ /* On inspecting in the console, the Portal Demo comes under id root and not under id portal-root
      So, we will use portal to make the portal demo under the id portal-root  */}

export default PortalDemo
