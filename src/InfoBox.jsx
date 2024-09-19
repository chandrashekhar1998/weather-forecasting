import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({ info }) {
    const INIT_URL= 
    "https://images.unsplash.com/photo-1528083526517-4fc9fd9431f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMHdpdGglMjBjbG91ZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=8ijy1ixq0ALEpJIt9D4ElKJzayexgzXTDG2ZRCYVfHQ=";
    const COLD_URL = "https://images.unsplash.com/photo-1534324482290-e147f564f5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D";
       
    
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                 sx={{ height: 140 }}
                 image={
                  info.humidity> 80
                  ? RAIN_URL
                  : info.temp>20 
                  ? HOT_URL
                  : COLD_URL
                 }
                 title="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                 {info.city} {
                  info.humidity> 80
                  ? <ThunderstormIcon />
                  : info.temp>20 
                  ? < WbSunnyIcon/>
                  : <AcUnitIcon />
                 }
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>
                 <p>Temparature = {info.temp}&deg;C</p>
                 <p>Humidity = {info.humidity}</p>
                 <p>Feels like = {info.feelslike}</p>
                 <p>The Weather can be described as <i>{info.weather}</i>  and feels like {info.feelslike}&deg;C</p>                 
              </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
} 

export default InfoBox;
    


