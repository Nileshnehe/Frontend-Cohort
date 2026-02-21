import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const Increase = () => {
    setNum(num + 1)
  }

  const Decrease = () => {
    setNum(num - 1)
  }

  const Reset = () => {
    setNum(0)
  }

  const unique = () => {
    setNum(num * 5)
  }
  return (
    <div>
      <h1>Counter</h1>
      <div className='main'>
      <main>
        <h1>{num}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Reset}>Reset</button>
      </main>
      </div>
    </div>
  )
}

export default App  