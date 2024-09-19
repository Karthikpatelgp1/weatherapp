import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://52.54.149.198:8080/api/weather?city=${city}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("the error", error)
    }
  
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button style={{ marginLeft: "5px" }} type="submit">Get Weather</button>
      </form>
      <div style={{ marginTop: "10px" }}>
        {weather && <div style={{ color: "green" }}><span style={{ color: "red" }}>Weather in {city}</span>:{weather.description}<br></br>
          <span style={{ color: "red" }}>Temperature :</span> {weather.temperature} Farenheit</div>

        }

      </div>
    </div>
  );
}

export default App;

