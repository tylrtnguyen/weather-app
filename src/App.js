import React, { useEffect, useState} from 'react';
import { fetchByCity, fetchByCoords } from './api/fetchWeather';
import Head from './Head';
import './App.css';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [unit, setUnit] = useState("metric");

    const weatherSearch = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchByCity(city, unit);
            setWeather(data);
            setCity('');
        }
    }

    const handleConvert = () => {
        if(unit === "metric") {
            setUnit("imperial");
        } else {
            setUnit("metric");
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lon = position.coords.longitude;
            const lat = position.coords.latitude;
            const data = await fetchByCoords(lon, lat, unit);
            setWeather(data);
        })
    }, [unit])

    return (
        <div className="main-container">
            <Head />
            <input
                type="text"
                className="search"
                placeholder="Your city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={weatherSearch}
            />
            {weather.main && (
                <>
                <input type="button" value={unit === "metric" ? "Convert to Fahrenheit" : "Convert to Celsius"} className="btn-convert" onClick={handleConvert} />
                <div className="city">
                    <h2 className="city-name"> 
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;{unit === "metric" ? "C" : "F"}</sup>
                    </div>
                    <div className="relative">
                        <h2>Humidity: {weather.main.humidity}%</h2>
                        <h2>Feels like: {Math.round(weather.main.feels_like)}<sup>&deg;{unit === "metric" ? "C" : "F"}</sup></h2>
                        <h2>Wind: {unit ==="metric" ? `${Math.round((weather.wind.speed)*3.6)} km/h` : `${Math.round(weather.wind.speed)} miles/h`} </h2>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default App;