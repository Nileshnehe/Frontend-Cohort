import React from 'react'
import "./App.css"
import Title from './Title'
const App = () => {
  let option = ["durable", "long-time"]
  return (

    <div>
      <Title title="Laptop" desc="This Laptop is for Gamers" features={option} />
      <Title title="Smart Watch" desc="This watch is Premium" />
      <Title title="Mobile" desc="this mobile have 128gb storage" />
    </div>
  )
}

export default App