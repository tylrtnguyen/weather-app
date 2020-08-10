import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchByCoords = async (long, lat, unit) => {
    const { data } = await axios.get(URL, {
        params: {
            lat: lat,
            lon: long,
            units: unit,
            APPID: API_KEY
        }
    });
    return data;
}

export const fetchByCity = async (city, unit) => {
    const { data } = await axios.get(URL, {
        params: {
            q: city,
            units: unit,
            APPID: API_KEY
        }
    });
    return data;
}
