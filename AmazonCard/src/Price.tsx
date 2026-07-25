import React from 'react'

interface PriceProps {
  oldPrice: number;
  newPrice: number;
}

const Price = ({oldPrice, newPrice} : PriceProps) => {

  // const oldPriceStyle = {
  //   textDecoration: "line-through",
  //   color: '#ccc'
  // }
  return (
    <div className='price'>
        <p className="old-price">old Price: Rs {oldPrice} </p>
        <p>newPrice: Rs {newPrice}</p>
    </div>
  )
}

export default Price