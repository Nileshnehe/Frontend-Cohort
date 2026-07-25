import React from 'react'
import Price from './Price'

interface ProductProps {
  title: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  
}
const Product = ({title, description, oldPrice, newPrice} : ProductProps) => {
  return (
    <div className='product'>
        <p>{title}</p>
        <p>{description}</p>
        <Price oldPrice={oldPrice} newPrice={newPrice}
        />
    </div>
  )
}

export default Product