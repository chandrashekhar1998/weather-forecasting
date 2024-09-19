
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from "react";
import { colors } from '@mui/material';


function SearchBox({ updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a7768c73f06750f23248dd095c53a0d9";

    let getWeatherInfo = async () => {
      try{
        let response = await fetch(`${ API_URL}?q=${city}&appid=${API_KEY}&units=metric` );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
         city:city,
         feelslike: jsonResponse.main.feels_like,
         temp: jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         coordinate:{
             lon: jsonResponse.coord.lon,
             lat: jsonResponse.coord.lat,
         },
         weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      } catch(err) {
        throw err;
      }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
              <br /> <br />
              <Button variant="contained" type='Search' > Search</Button>
              {error && <p style={{color:"red"}}>No such places exists</p>}
            </form>
        </div>
    );
}

export default SearchBox;