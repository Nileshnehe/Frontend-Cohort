import React from 'react'

const Navabar = (props) => {
    console.log(props)
  return (
    <div style={{backgroundColor:props.color}} className=' px-3 py-2 flex justify-between items-center'>
        <h2>{props.title}</h2>
        <div className='flex gap-2.5 '>
            {props.links.map(function(elem,idx){
                return <p key={idx}>{elem}</p>
            })}
        </div>
    </div>
        
  )
}

export default Navabar