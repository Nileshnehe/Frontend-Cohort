import React from 'react';
import "./Title.css";


const Title = ({ title, price }) => {
let styles = {backgroundColor : price > 30000 ? "yellow" : "blue"}
  return (
    <div className='product' style={styles}>
      <h1> {title}</h1>
      <p>{price}</p>
      {price > 30000 ? <p>"Discount of 5%"</p> : null}
    </div>
  )
}

export default Title