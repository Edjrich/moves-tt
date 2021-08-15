import axios from 'axios';
import { useEffect, useState } from 'react';
import SevenDayForecast from '../SevenDayForecast';
import Error from './Error';

function WeatherDetails ({selectedCity}) {

    const [weatherData, setWeatherData] = useState ({});
    const [loading, setLoading] = useState (true);
    const [coordinates, setCoordinates] = useState ({})
    // const [timeCode, setTimeCode] = useState('');
    const [isWorking, setIsWorking] = useState(true);

    // console.log(selectedCity)

    useEffect (() => {
        // const getWeather = (() => {
            axios ({
                url: 'https://api.openweathermap.org/data/2.5/weather?',
                method: 'GET',
                params: {
                    // zip: selectedZip,
                    q: selectedCity,
                    appid: '1e4d1fb4deb2aa41fee0c8300f106f70',
                    units: 'metric'
                }
            // }).then((res) => {
            //     if (res.ok) {
            //         return res;
            //     } else {
            //         setIsWorking(false);
            //     }
            }).then((rawData) => {
                // console.log(rawData)
                // console.log(rawData.data)
                setWeatherData(rawData.data);
                setLoading(false);
                setCoordinates(rawData.data.coord)
                // setTimeCode(rawData.data.dt)
                // console.log(rawData.data.dt)
                // convertDate(rawData.data.dt);
                setIsWorking(true);
            }).catch((err) => {
                if (err.message === 'Nothing to geocode')
                setIsWorking(false);
            })
    }, [selectedCity]);

    // const convertDate = (event) => {

    //     // console.log(Date)
    //     // console.log(event)
        
    //     // let numberDate = timeCode;
    //   // unix code, to be accepted as variable from api object
    //     let newDate = new Date(event);

        
    //     let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //     let dayInfo = newDate.toLocaleDateString(undefined, options);

    //     // setTimeCode(dayInfo);


    //     // console.log(newDate)
    //     // // console.log(NoTimeDate)
    //     // console.log(dayInfo)  
    //     setTimeCode(dayInfo)
    //     setLoading(false);
    // }

    return (
        isWorking ? 
        <Error />
        :
        loading ? <p>loading...</p> :
        <div>
            <h2>Today's weather</h2>
            {/* <ul>
                {
                    weatherData.map((details) => {
                        return (
                            <li>
                                <p>{details.name}</p>
                            </li>
                        )
                    })
                }
            </ul> */}
            {/* <p>Date: {timeCode}</p> */}
            <p>Here's what the weather is like in {weatherData.name}!</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <p>Description of weather: {weatherData.weather[0].description}</p>
            <p>Temperature: {Math.round(weatherData.main.temp)}</p>
            <p>Max temperature: {Math.round(weatherData.main.temp_max)}</p>
            <p>Min temperature: {Math.round(weatherData.main.temp_min)}</p>
            <p>Wind speed: {weatherData.wind.speed}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            {
                coordinates ? <SevenDayForecast coordinates={coordinates}/>
                : null
            }
            
        </div>
    )
}

export default WeatherDetails;

// IMPORTANT NOTES: 
// Canadian postal codes only accept the first 3 letters
// country code required, us is default


// make api for current weather with static city value
// make api for current weather with static postal code value
// save lat & long (state?)
// make second api call using long & lat



// Show current weather data and the forecast for the next seven days
// ○ Weather description (ex. rain, snow)
// ○ Current temperature
// ○ Minimum temperature
// ○ Maximum temperature
// ○ Wind speed
// ○ Precipitation
// ○ Humidity