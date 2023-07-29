import React from 'react';
import './App.css';
import { useState } from 'react';
import Input from './component/input';
import Filter from './component/filter';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='container'>
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      <div className='inputContainer'>
        <Input value={setSearchTerm} />
      </div>
      <div className='dataContainer'>
        <Filter value={searchTerm} />
      </div>
    </div>
  );
};

export default App;
