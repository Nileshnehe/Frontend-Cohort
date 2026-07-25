import React from 'react'
import "./App.css"
import Title from './Title'
const App = () => {
  let option = ["durable", "long-time"]
  return (

    <div>
      <Title title="Laptop" price ={40000} features={option} />
      <Title title="Smart Watch" price ={50000} />
      <Title title="Mobile" price = {4000} />
    </div>
  )
}

export default App