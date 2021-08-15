import './App.css';
import WeatherDetails from './Components/WeatherDetails';
import Form from './Components/Form';
import { useState } from 'react';
// import SevenDayForecast from './SevenDayForecast';

function App() {

  const [selectedCity, setSelectedCity] = useState ();
  const [selectedZip, setSelectedZip] = useState ();

  console.log(selectedCity)
  console.log(selectedZip)

  return (
    selectedCity ?
    <div className="App">
      <header className="App-header">
        <h1>How about that weather?</h1>
        <Form setSelectedCity={setSelectedCity, setSelectedZip} />
        <WeatherDetails selectedCity={selectedCity, selectedZip}/>
      </header>
    </div>
    : 
    <div className="App">
      <header className="App-header">
        <h1>How about that weather?</h1>
        <Form setSelectedCity={setSelectedCity} />
    </header>
    </div>
  );
}

export default App;

//PSEUDO 
// make api call