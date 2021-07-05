import React, {useState, useEffect} from 'react'
import './App.css';
import { db } from './firebase'
import firebase from 'firebase';
import Card from './Card';



function App() {

  const  api ={
    key: "1fbaec320be1e9c04e0aa8bcbf75f274",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const [card, setCard] = useState([])


  useEffect(() => {
    db.collection("card").orderBy("timestamp", "desc").onSnapshot(snapshot =>(
      setCard(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const multipleCard = (e) => {
    e.preventDefault();
    document.getElementById('test').style.display="none"

    db.collection('card').add({
      weatherName: weather.name,
      weatherCountry: weather.weather && weather.sys.country,
      weatherTemp: weather.weather && weather.main.temp,
      weatherType: weather.weather && weather.weather[0].main,
      weatherUrl: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
      weatherAlt: weather.weather[0].description,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
  }

  const search = evt =>{
    if(evt.key === 'Enter'){
      evt.preventDefault();
      document.getElementById('test').style.display="block"
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        
        })
    }
  }

  return (
    <div className="App">
      <div className="search__input">

          <form>
            <input type="text" className="input" placeholder="Enter a city name" onChange={e=> setQuery(e.target.value)} value={query} onKeyPress={search} />
            <button id="test" onClick={multipleCard}>submit</button>
          </form>
      </div>
        <div className="box__card">
           <div className="slider">
                <div className="test">
            {card.map(({id, data: {weatherName, weatherCountry, weatherTemp, weatherType, weatherUrl, weatherAlt} }) => (         
                  <Card
                  key={id}
                  weatherName = {weatherName}
                  weatherCountry = {weatherCountry}
                  weatherTemp = {weatherTemp}
                  weatherType = {weatherType}
                  weatherUrl = {weatherUrl}
                  weatherAlt = {weatherAlt}
                  />
                 
              ))}
              </div>
            </div>
        </div>
    </div>
    
  );
}

export default App;
