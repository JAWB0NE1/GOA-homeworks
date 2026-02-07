import React from "react"
function App() {
  function getWeather() {
    let city = document.getElementById("city").value.trim()
    

    let API_KEY = "2b5c6fc0d7a71dd342dc41596e1a79d5"

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
       

        document.getElementById("cityName").innerText = data.name
        document.getElementById("temp").innerText = data.main.temp + "°"
        document.getElementById("humidity").innerText = data.main.humidity + "%"
        document.getElementById("wind").innerText = (data.wind.speed * 3.6) + " km/h"
        document.getElementById("feels").innerText = data.main.feels_like + "°"

        let rain = data.rain?.["1h"] || 0
        let snow = data.snow?.["1h"] || 0
        document.getElementById("precip").innerText =
          rain + snow + " mm"
      })
  }

  return (
    <div className="app">
      <div className="txtbox1">
        <h3 className="txt1">Weather Now</h3>
        <h1 className="txt2">How's the sky looking today?</h1>
      </div>

      <div className="search">
        <input id="city" placeholder="Search for a place..."/>
        <button onClick={getWeather}>Search</button>
      </div>

      <div className="cube1">

        <div className="weather">
          <h2 id="cityName">---</h2>
          <p>None, None 0, 2026</p>
          <h1 id="temp">--°</h1>
        </div> 

      </div>

      <div className="details">

          <div className="box" id="box1">
            <p>Humidity</p>
            <h3 id="humidity">--%</h3>
          </div>

          <div className="box" id="box2">
            <p>Wind</p>
            <h3 id="wind">-- km/h</h3>
          </div>

          <div className="box" id="box3">
            <p>Feels Like</p>
            <h3 id="feels">--°</h3>
          </div>

          <div className="box" id="box4">
            <p>Precipitation</p>
            <h3 id="precip">-- mm</h3>
          </div>

        </div>
        
        <div className="diverman">
          <p className="dp1">Hourly forecast</p>
          <div className="divs"><p>3 MP</p></div>
          <div className="divs"><p>4 MP</p></div>
          <div className="divs"><p>5 MP</p></div>
          <div className="divs"><p>6 MP</p></div>
          <div className="divs"><p>7 MP</p></div>
          <div className="divs"><p>8 MP</p></div>
          <div className="divs"><p>9 MP</p></div>
          <div className="divs"><p>10 MP</p></div>
        </div>
        <p className="lone_wolf">Daily forecast</p>
        <div className="di7man">
          <div className="d1">
            <p className="p1">Tue</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
          <div className="d2">
            <p className="p1">Wed</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
          <div className="d3">
            <p className="p1">Thu</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
          <div className="d4">
            <p className="p1">Fri</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
          <div className="d5">
            <p className="p1">Sat</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
          <div className="d6">
            <p className="p1">Sun</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
          <div className="d7">
            <p className="p1">Mon</p>
            <p className="p2">--°</p>
            <p className="p3">--°</p>
          </div>
        </div>
    </div>
  )
}

export default App