import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {

  const [sidebar,setSidebar]=useState(true)

  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      <Main sidebar={sidebar} setSidebar={setSidebar}/>
    </>
  )
}

export default App
