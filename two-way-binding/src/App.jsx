import React, { useState } from 'react'

const App = () => {
  const arr = ['nil','tanu', 'manu','saru']

  const [name, setName] = useState(0)
  return (
    <div>
      <h1>{arr[name]}</h1>
      
      <button onClick={()=> {
        
        if (name<arr.length-1){
          setName(name+1)
        }

      }}>Press Me!</button>

<button onClick={()=> {
  setName(0)
}}>reset</button>
    </div>
  )
}

export default App