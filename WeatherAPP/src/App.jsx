import React from 'react';
import './App.css';
import { SearchBar } from './SearchComponents.jsx';
import { ButtonComponent } from './SearchComponents.jsx';
import { WeatherTemperature } from './components/WeatherTemperature.jsx';
import { Humidity } from './Humidity.jsx';

function App() {  
  return (
    <div id="MainContainer">
      <SearchBar />
      <ButtonComponent />
      <WeatherTemperature />
      <Humidity />\
    </div>
  );
}

export default App;