import React from 'react'
import "./App.css";
import Product from "./Product";

const App = () => {
  return (
    <div className='mainPage'>
      <Product 
        title='Laptop'
        description='description'
        oldPrice={25000}
        newPrice={20000}
      />

      <Product 
        title='Laptop'
        description='description'
        oldPrice={5000}
        newPrice={20000}
      />

      <Product 
        title='Laptop'
        description='description'
        oldPrice={25000}
        newPrice={20000}
      />

      <Product 
        title='Laptop'
        description='description'
        oldPrice={25000}
        newPrice={20000}
      />

      <Product 
        title='Laptop'
        description='description'
        oldPrice={25000}
        newPrice={20000}
      />
    </div>

  )
}

export default App