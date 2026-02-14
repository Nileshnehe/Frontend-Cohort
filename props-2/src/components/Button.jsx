import React from 'react'

const Button = (props) => {
    console.log(props.text)
    return (
        <div className='bg-green-400 py-2 px-5 rounded w-fit m-2 font-bold'>
            {props.text}
        </div>
    )
}

export default Button