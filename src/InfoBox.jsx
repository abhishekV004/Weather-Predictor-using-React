import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./Infobox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1645434283828-8030c0ef9066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFdlYXRoZXIlMjBjb2xkfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1697966436829-4e9d1070100f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdlYXRoZXIlMjBob3R8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  
  
    return (
    <div className="InfoBox">
      {/* <h1>WeatherInfo-{info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <SunnyIcon />
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature ={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Max Temp ={info.tempMax}&deg;C</p>
              <p>Min Temp ={info.tempMin}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
