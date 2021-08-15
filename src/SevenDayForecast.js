import { useEffect, useState } from "react";
import axios from "axios";

const SevenDayForecast = (props) => {

    const [forecast, setForecast] = useState ([]);
    const [loading, setLoading] = useState(true);
    const {coordinates} = props;

    // console.log(props)
    // console.log(coordinates)
    // console.log(coordinates.lat)
    // console.log(coordinates.lon)

        // example url for one call(): 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'

        useEffect (() => {
            axios ({
                url: 'https://api.openweathermap.org/data/2.5/onecall?',
                method: 'GET',
                params: {
                    lat: coordinates.lat,
                    lon: coordinates.lon,
                    appid: '1e4d1fb4deb2aa41fee0c8300f106f70',
                    // units: 'metric'
                }
            }).then((rawData) => {
                // console.log(rawData)
                console.log(rawData.data.daily)
                setForecast(rawData.data.daily)
                // console.log(rawData.data.hourly[0])
                setLoading(false);
            })
    }, [coordinates.lat, coordinates.lon]);

    return (
        loading ? <p>loading...</p> :
        <div>
            <h2>The Seven Day Forecast</h2>
            {/* <h4>Too much weather</h4> */}
            {
                forecast.map((details) => {
                    return (
                        <>
                            <p></p>
                            <p>{details.weather[0].main}</p>
                            <p>{details.weather[0].description}</p>
                            <p>Max temp: {Math.round(details.temp.max)}</p>
                            <p>Min temp: {Math.round(details.temp.min)}</p>
                            <p>Wind speed: {Math.round(details.wind_speed)}</p>
                            <p>Humidity: {Math.round(details.humidity)}</p>
                        </>
                    )
                })
            }
        </div>
    )
};

export default SevenDayForecast;


// PSEUDO 
// make api call
// make component to display days individually  
// 