import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Madhugiri",
        feelslike: 24.73,
        humidity: 80,
        temp:24.17,
        tempMax:24.17,
        tempMin:24.17,
        weather:"overcast Clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather app </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}

export default WeatherApp;