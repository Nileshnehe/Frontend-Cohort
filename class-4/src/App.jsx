import React from 'react'
import Navabar from './components/Navabar'
import Men from './components/Men'
import Female from './components/Female'

const App = (props) => {
  function btnClicked(){
    console.log('Button is clicked');
    
  }
  return (
    <div 
    onClick={()=> btnClicked()}
    className='active:scale-90 bg-emerald-400 rounded px-4 py-2 w-fit m-3 text-2xl font-bold'>
      <button>Click here!</button>
    </div>
  )
}

export default App