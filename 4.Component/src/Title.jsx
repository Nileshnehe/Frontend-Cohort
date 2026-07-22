import React from 'react';
import "./Title.css";


const Title = ({ title, desc, features }) => {
  console.log(features);
  return (
    <div className='product'>
      <h1> {title}</h1>
      <h3>{desc}</h3>
      {
        <ul>
          {
            features?.map((feature) =>(
              <li>{feature}</li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Title