import React from 'react'
import './App.css'
import Data from './data.json'
import { useState } from 'react'

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='container'>
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      <div className='inputContainer'>
        <input
          className='search'
          type='text'
          placeholder='konsey üyesi giriniz'
          onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className='dataContainer'>
          {
            Data.filter((val)=>{
              if(searchTerm == ""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            }).map((val)=>{
              return (
              <div className='data' key={val.id}>
                <img src={val.image} alt='image' />
                <h3>{val.title}</h3>
                <p>{val.Description}</p>
              </div>
                )
            })
          }
      </div>
    </div>
  )
}

export default App