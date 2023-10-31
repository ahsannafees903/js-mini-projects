/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import classes from "./Weather.module.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [des, setDes] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [search, setSearch] = useState("Karachi");

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e8fb90b3dc0f8cb4cd87c03bab0a521`;

  const fetchApi = async (API_URL) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCity(data.main);
    
    setDes(data.weather)
  
    setSpeed(data.wind)
  
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      fetchApi(API_URL);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [API_URL]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={classes.card}>
          <div>
            <input
              type="search"
              value={search}
              placeholder="search city"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {!city ? (
            <p>no data found</p>
          ) : (
            <div>
              <h1>{search}</h1>
              <h2>{city.temp}*C</h2>
              <h3>Feel's like {city.feels_like}*C</h3>
              <h4>
                Humidity <i> {city.humidity}% </i>
              </h4>
              <h4>
                {city.temp >= 0 && city.temp <= 15 ? (
                  <p>
                    <b>Weather</b> <br /> cold
                  </p>
                ) : (
                  <p></p>
                )}
              </h4>
              <h4>
                {city.temp < 0 && city.temp <= -60 ? (
                  <p>
                    <b>Weather</b> <br />
                    Too cold
                  </p>
                ) : (
                  <p></p>
                )}
              </h4>
              <h4>
                {city.temp > 15 && city.temp <= 30 ? (
                  <p>
                    <b>Weather</b> <br /> normal
                  </p>
                ) : (
                  <p></p>
                )}
              </h4>
              <h4>
                {city.temp > 30 && city.temp <= 40 ? (
                  <p>
                    <b>Weather</b> <br /> hot
                  </p>
                ) : (
                  <p></p>
                )}
              </h4>
              <h4>
                {city.temp > 40 && city.temp <= 60 ? (
                  <p>
                    <b>Weather</b> <br /> very hot
                  </p>
                ) : (
                  <p></p>
                )}
              </h4>
              <p>
                min temp : {city.temp_min}*C | max temp {city.temp_max}*C
              </p>
              <h3>{des[0].description}</h3>
              <p>
                {<b>Wind speed</b>} {speed.speed}km\h
              </p>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Weather;
