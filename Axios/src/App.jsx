import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    setAllData(response.data)
    console.log(response.data);
  }
  useEffect(function(){
    getData()
  }, [])
  return (

    <div>
      <button>GetData</button>

      <div className='all-cards'>
        {allData.map(function (elem, idx) {

          return <div key={idx}>
            <Card  elem={elem}/>
          </div>
        })}

        
      </div>

    </div>


  )
}

export default App