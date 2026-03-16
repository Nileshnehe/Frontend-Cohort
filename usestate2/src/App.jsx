import React, { useState } from 'react'
import "./App.css"

const App = () => {
const [num, setNum] = useState(0)

  return (
    <div className='main'>
      <h1>{num}</h1>
<div className='button-div'>
      <button className="btn" onClick={()=>{
        setNum(num+1)}}>increase</button>

      <button onClick={()=> {
        setNum(num - 2)}}>Decrease -2</button>

      <button onClick={()=> {
        setNum(num + 5)}}>increase +5</button>

      <button onClick={() => {
        setNum(0)}}>Reset</button>
    </div>
    
    
    
</div>
  )
}

export default App