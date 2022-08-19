import React,{ useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'


import styles from './InfoClima.module.css'

const InfoClima = () => {

  const {locationInfo,weather, main} = useContext(WeatherContext)


  return (
    <>
        <h1 className={styles.name}>{locationInfo?.name}</h1>
        <p className={styles.description}>{weather?.description}</p>
        <div className={styles.info}>
            <img src={main} alt="" width={74}/>
            <h1 className={styles.temperature}>{locationInfo?.main?.temp} ºC</h1>
            <div className={styles.main}>
                <p><ion-icon name="water-outline"></ion-icon> Hum: {locationInfo?.main?.humidity}%</p>
                <p><ion-icon name="thermometer-outline"></ion-icon> Temp max: {locationInfo?.main?.temp_max}</p>
                <p><ion-icon name="thermometer-outline"></ion-icon> Temp min: {locationInfo?.main?.temp_min}</p>
                <p><ion-icon name="cloudy-outline"></ion-icon> Wind: {locationInfo?.wind?.speed} km/h</p>
            </div>
        </div>
    </>
  )
}

export default InfoClima