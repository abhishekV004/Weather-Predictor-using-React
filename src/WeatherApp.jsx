import  SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
    city:"Delhi",
    feelsLike: 42.04,
    humidity: 48,
    temp: 35.91,
    tempMax: 35.91,
    tempMin: 35.91,
    weather: "broken clouds",
    })

    let  updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}