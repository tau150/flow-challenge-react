import React, {useState} from 'react';
import './App.css';
import CitySelector from './components/CitySelector';

function App() {

  return (
    <div className="App test">
      <h1>Weather App</h1>
      <CitySelector />
    </div>
  );
}

export default App;
