import React , {useState} from 'react'
import './Card.css'


const dateBuilder = (d) => {
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    let day = days[d.getDay()];
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }


function Card({weatherName, weatherCountry, weatherTemp, weatherType, weatherUrl, weatherAlt}) {    

    return (
        
        <div className="card">
            <div className="box__location">{weatherName}, <span>{weatherCountry}</span></div>
            <div className="Date">{dateBuilder(new Date())}</div>
            <div className="box__weather">
                <h1>{Math.round(weatherTemp)}°c</h1>
                <h2>{weatherType}</h2>
                <img className="city-icon" src={weatherUrl} alt={weatherAlt} />
            </div>
        </div>
    )
}

export default Card
