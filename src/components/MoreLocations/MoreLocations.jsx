import React, { useState,useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'

import styles from './MoreLocations.module.css'

const MoreLocations = () => {

  const {setPopuparLocations} = useContext(WeatherContext)

  const [onSound, setOnSound] = useState(false)

  const handleClick = (e) => {
    console.log(e.target.value)
    setPopuparLocations(e.target.value)
  }

  //!Si handleClick is true que haga un fetch a la URL de citys 
  //*Sino que acceda a la ubicacion del usuario

  let sound = new Audio()

  sound.src = 'https://res.cloudinary.com/dcwoyu2zc/video/upload/v1660507221/assets/lofi-sound_y7ez5o.mp3'



  return (
    <article className={styles.moreLocations_container}>

        <button value={'Paris'} onClick={handleClick}>Paris</button>
        <button value={'Tokyo'} onClick={handleClick}>Tokio</button>
        <button value={'Venecia'} onClick={handleClick}>Venecia</button>
        <button value={'Atenas'} onClick={handleClick}>Atenas</button>
        <button value={'New york'} onClick={handleClick}>New york</button>

    </article>
  )
}

export default MoreLocations